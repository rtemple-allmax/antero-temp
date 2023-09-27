import { Part, PartImage } from '@allmax-angular/antero-web/entities';
import { AnteroService } from '@allmax-angular/antero-web/services/antero-service';
import { AnteroStoreService } from '@allmax-angular/antero-web/state-management/antero-store';
import { ImageData, Modals } from '@allmax-angular/antero-web/types';
import { Nullable } from '@allmax-angular/shared/types';
import { Component, Input, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { saveAs } from 'file-saver';
import { combineLatest, Subscription } from 'rxjs';
import { PartStoreService } from '@allmax-angular/antero-web/state-management/part-store';
import { PartsControllerService } from '@allmax-angular/antero-web/data-access/parts-controller';
import { unsubscribe } from '@allmax-angular/shared/utils';
import { ImageDeleteEventArgs } from '@allmax-angular/shared/ui/image-gallery';

@Component({
  selector: 'ant-parts-images-panel',
  templateUrl: './parts-images-panel.component.html',
  styleUrls: ['./parts-images-panel.component.scss'],
})
export class PartsImagesPanelComponent implements OnInit, OnDestroy {
  @Input() public height = 'auto';

  private subs: Subscription[] = [];

  public record: Nullable<Part>;
  public thumbs: ImageData[] = [];

  public get innerHeight() : string {
    return `calc(${ this.height} - 65px)`;
  }

  constructor(
    private antero: AnteroService,
    private appStore: AnteroStoreService,
    private ctrl: PartsControllerService,
    private cdr: ChangeDetectorRef,
    private partStore: PartStoreService,
    private spinner: NgxSpinnerService
  ) { }

  public ngOnInit(): void {
    combineLatest([ this.appStore.refresh$, this.partStore.selection$ ]).subscribe(([refresh, record]) => {
      this.record = record;
      if (this.record && refresh) {
        this.getImages();
        this.appStore.refresh = false;
      } else if (this.record) {      
        this.getImages();
      }
    });
  }

  public ngOnDestroy(): void {
    unsubscribe(this.subs);
    this.cdr.detach();
  }

  public async getImages(): Promise<void> {
    this.spinner.show();
    this.thumbs = [];
    if (this.record) {
      const data = await this.ctrl.getImagesData(this.record.id);
      if (data) {
        data.forEach(async (x: ImageData) => {
          const thumb = await this.ctrl.hydrateImage(x);
          x.imageUrl = thumb?.imageUrl;
          x.thumbnailUrl = thumb?.thumbnailUrl;
        });
        this.thumbs = [ ...data ].sort((a, b) => a.order - b.order);
        this.cdr.detectChanges();
      }
    }
    this.spinner.hide();
  }

  public getThumbUrl(thumb: any): string {
    if (thumb.hydrated) {
      return `url(${ thumb.thumbnailUrl })`;
    }
    return '';
  }

  public select(thumb: ImageData): void {
    if (this.thumbs.length > 0) {
      this.appStore.thumbs = this.thumbs;
      this.appStore.selectedImageID = thumb.sharedID;
      this.appStore.primaryImageID = this.thumbs[0].sharedID;
      this.antero.openModal(Modals.IMAGE_GALLERY);
    }
  }

  public download(data: ImageData): void {
    if (data?.imageUrl) {
      saveAs(data?.imageUrl)
    }
  }

  public delete(data: ImageData): void {
    this.partStore.selectedImage = data;
    this.antero.openModal(Modals.EQUIPMENT_DELETE_IMAGE);
  }

  public async imagesAddedHandler(files: File[]): Promise<void> {
    this.spinner.show();
    if (this.record && files.length > 0) {
      const result = await this.ctrl.addImages(this.record.id, files);
      if (result) {
        this.getImages();
      }
    }
  }

  public async imageDeletedHandler(args: ImageDeleteEventArgs): Promise<void> {
    if (args.image) {
      const result = await this.ctrl.deleteImage(this.convertToPartImage(args.image));
      if (result) {
        this.getImages();
        args.handle?.close();
      }
    }
  }

  public async primaryImageHandler(record: ImageData): Promise<void> {
    if (record) {
      const result = await this.ctrl.setPrimaryImage(record?.sharedID);
      if (result) {
        this.appStore.refresh = true;
        this.getImages();
      }
    }
  }

  public async orderChangedHandler(records: ImageData[]): Promise<void> {
    const data: PartImage[] = records.map(x => this.convertToPartImage(x));
    const result = await this.ctrl.reorderImages(data);
    if (result) {
      this.appStore.refresh = true;
    }
  }

  public convertToPartImage(data: ImageData): PartImage {
    return {
      id: data.sharedID,
      partID: data.parentID,
      part: null,
      imageID: data.imageID,
      image: null,
      order: data.order
    };
  }
}
