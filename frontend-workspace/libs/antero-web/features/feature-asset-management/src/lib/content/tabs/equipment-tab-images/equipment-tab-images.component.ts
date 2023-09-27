import { TabBaseComponent } from '@allmax-angular/antero-web/bases';
import { Nullable } from '@allmax-angular/shared/types';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DxScrollViewComponent } from 'devextreme-angular';

@Component({
  selector: 'ant-equipment-tab-images',
  templateUrl: './equipment-tab-images.component.html',
  styleUrls: ['./equipment-tab-images.component.scss'],
})
export class EquipmentTabImagesComponent extends TabBaseComponent {
  // @ViewChild(DxScrollViewComponent) public scrollView: Nullable<DxScrollViewComponent>;
  // @ViewChild(ImageGalleryComponent) public gallery: Nullable<ImageGalleryComponent>;
  
  // @Input() public height = 'auto';

  // private subs: Subscription[] = [];

  // private selection: Nullable<Equipment>;
  // public selectedIndex = -1;

  // public thumbs: ImageData[] = [];

  // public icons = { ...toolbarIcons };

  // public getThumbUrl(thumb: any): string {
  //   if (thumb.hydrated) {
  //     return `url(${ thumb.thumbnailUrl })`;
  //   }
  //   return '';
  // }

  // public get innerHeight() : string {
  //   return `calc(${ this.height} - 65px)`;
  // }
  
  // constructor(
  //   private antero: AnteroService,
  //   private appStore: AnteroStoreService,
  //   private ctrl: EquipmentControllerService,
  //   private cdr: ChangeDetectorRef,
  //   private eqStore: EquipmentSectionStore,
  //   private spinner: NgxSpinnerService
  // ) { }

  // public ngOnInit(): void {
  //   this.subs.push(this.eqStore.selection$.subscribe(x => {
  //     if (this.selection !== x) {
  //       this.selection = x;
  //       this.getImages();
  //     }
  //   }));
  //   this.subs.push(this.appStore.refresh$.subscribe(x => {
  //     if (x) {
  //       this.getImages();
  //       this.appStore.refresh = false;
  //     }
  //   }))
  // }

  // public ngOnDestroy(): void {
  //   unsubscribe(this.subs);
  //   this.cdr.detach();
  // }
  
  // public async getImages(): Promise<void> {
  //   this.spinner.show();
  //   this.thumbs = [];
  //   if (this.selection) {
  //     const data = await this.ctrl.getImagesData(this.selection.id);
  //     if (data) {
  //       data.forEach(async (x, i) => {
  //         const thumb = await this.ctrl.hydrateImage(x);
  //         x.imageUrl = thumb?.imageUrl;
  //         x.thumbnailUrl = thumb?.thumbnailUrl;
  //       });
  //       this.thumbs = [ ...data ].sort((a, b) => a.order - b.order);
  //       this.cdr.detectChanges();
  //     }
  //   }
  //   this.spinner.hide();
  // }

  // public select(thumb: ImageData): void {
  //   if (this.thumbs.length > 0) {
  //     this.appStore.thumbs = this.thumbs;
  //     this.appStore.selectedImageID = thumb.sharedID;
  //     this.appStore.primaryImageID = this.thumbs[0].sharedID;
  //     this.antero.openModal(Modals.IMAGE_GALLERY);
  //   }
  // }

  // public mousewheelHandler(e: WheelEvent): void {
  //   if ('deltaY' in e) {
  //     this.scrollView?.instance?.scrollBy(e.deltaY)
  //   }
  // }

  // public mousemoveHandler(e: MouseEvent): void {
  //   console.log('mouse move', e);
  // }

  // public download(data: ImageData): void {
  //   if (data?.imageUrl) {
  //     saveAs(data?.imageUrl)
  //   }
  // }

  // public deleteImage(data: ImageData): void {
  //   this.eqStore.selectedImage = data;
  //   this.antero.openModal(Modals.EQUIPMENT_DELETE_IMAGE);
  // } 

  // public async imagesAddedHandler(files: File[]): Promise<void> {
  //   this.spinner.show();
  //   if (this.selection && files.length > 0) {
  //     const result = await this.ctrl.addImages(this.selection.id, files);
  //     if (result) {
  //       this.getImages();
  //     }
  //   }
  // }

  // public async imageDeletedHandler(args: ImageDeleteEventArgs): Promise<void> {
  //   if (args.image) {
  //     const result = await this.ctrl.deleteImage(args.image.sharedID);
  //     if (result) {
  //       this.getImages();
  //       args.handle?.close();
  //     }
  //   }
  // }

  // public async primaryImageHandler(record: ImageData): Promise<void> {
  //   if (record) {
  //     const result = await this.ctrl.setPrimaryImage(record?.sharedID);
  //     if (result) {
  //       this.appStore.refresh = true;
  //       this.getImages();
  //     }
  //   }
  // }

  // public async orderChangedHandler(records: ImageData[]): Promise<void> {
  //   const data: EquipmentImage[] = records.map(x => {
  //     return {
  //       id: x.sharedID,
  //       equipmentID: x.parentID,
  //       equipment: null,
  //       imageID: x.imageID,
  //       image: null,
  //       order: x.order
  //     };
  //   })
  //   const result = await this.ctrl.reorderImages(data);
  //   if (result) {
  //     this.appStore.refresh = true;
  //   }
  // }
}
