import { ImageData } from '@allmax-angular/antero-web/types';
import { Nullable } from '@allmax-angular/shared/types';
import { ConfirmationComponent } from '@allmax-angular/shared/ui/confirmation';
import { confirmIcons, toolbarIcons } from '@allmax-angular/shared/ui/icons';
import { unsubscribe } from '@allmax-angular/shared/utils';
import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  Output,
  QueryList,
  ViewChildren,
  ViewChild
} from '@angular/core';
import { DxScrollViewComponent } from 'devextreme-angular';

import { Subscription } from 'rxjs';

export interface ImageDeleteEventArgs {
  image: ImageData;
  handle: ConfirmationComponent;
}

@Component({
  selector: 'amx-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: [ './image-gallery.component.scss' ]
})
export class ImageGalleryComponent implements OnChanges, AfterViewInit, OnDestroy {
  @ViewChild(DxScrollViewComponent) public scrollView: Nullable<DxScrollViewComponent>;
  @ViewChildren(ConfirmationComponent) public confirmationQuery: Nullable<QueryList<ConfirmationComponent>>;

  @Input() public height = 'auto';
  @Input() public thumbs: ImageData[] = [];
  @Input() public primaryImageID = 0;
  @Input() public selectedImageID = 0;

  @Output() public imagesAdded = new EventEmitter<File[]>();
  @Output() public imageDeleted = new EventEmitter<ImageDeleteEventArgs>();
  @Output() public primaryImageSet = new EventEmitter<ImageData>();
  @Output() public closed = new EventEmitter<undefined>();


  public selectedIndex = -1;
  public showDeleteConfirmation = false;

  public confirmation: Nullable<ConfirmationComponent>;

  public icons = { ...toolbarIcons, ...confirmIcons }

  public subs: Subscription[] = [];

  public hovered = false;
  private intervalID: any;
  
  public ngAfterViewInit(): void {
    this.confirmation = this.confirmationQuery?.first;
    if (this.confirmationQuery) {
      this.subs.push(this.confirmationQuery?.changes.subscribe(q => this.confirmation = q.first));
    }
  }

  public ngOnChanges(): void {
    if (this.thumbs.length > 0) {
      if (this.selectedIndex < 0) {
        if (this.selectedImageID > 0) {
          const index = this.thumbs.findIndex(x => x.sharedID === this.selectedImageID);
          if (index >= 0) {
            this.selectedIndex = index;
          }
        } else {
          this.selectedIndex = 0;
        }
      }
    }
  }

  public ngOnDestroy(): void {
    unsubscribe(this.subs);
  }

  public filesSelectedHandler(files: File[]): void {
    this.imagesAdded.emit(files);
  }

  public openDeleteConfirmation(): void {
    this.showDeleteConfirmation = true;
  }

  public closeDeleteConfirmation(): void {
    this.showDeleteConfirmation = false;
  }

  public deleteHandler(): void {
    if (this.selectedIndex >= 0 && this.confirmation) {
      this.imageDeleted.emit({ image: this.thumbs[this.selectedIndex], handle: this.confirmation });
    }
  } 

  public primaryHandler(): void {
    if (this.selectedIndex >= 0 && this.selectedIndex < this.thumbs.length) {
      this.primaryImageSet.emit(this.thumbs[this.selectedIndex]);
    }
    this.selectedIndex = 0;
  }

  public getUrl(): string {
    if (this.selectedIndex >= 0 && this.selectedIndex < this.thumbs.length && this.thumbs[this.selectedIndex].hydrated) {
      return `url(${ this.thumbs[ this.selectedIndex ].imageUrl })`;
    }
    return '';
  }

  public getThumbUrl(thumb: any): string {
    if (thumb.hydrated) {
      return `url(${ thumb.thumbnailUrl })`;
    }
    return '';
  }

  public setSelectedIndex(i: number): void {
    if (i >= 0 && i < this.thumbs.length) {
      this.selectedIndex = i;
    }

    const id = this.thumbs[this.selectedIndex]?.sharedID;
    if (id) {
      const el = document.getElementById(`thumb${ id }`);
      if (el) {
        this.scrollView?.instance?.scrollToElement(el)
      }
    }
  }

  public increment(e: Event): void {
    e.stopPropagation();
    if (this.selectedIndex < this.thumbs.length - 1) {
      this.selectedIndex++;
    } else {
      this.selectedIndex = 0;
    }
    const id = this.thumbs[this.selectedIndex]?.sharedID;
    if (id) {
      const el = document.getElementById(`thumb${ id }`);
      if (el) {
        this.scrollView?.instance?.scrollToElement(el)
      }
    }
  }

  public decrement(e: Event): void {
    e.stopPropagation();
    if (this.selectedIndex > 0) {
      this.selectedIndex--;
    } else {
      this.selectedIndex = this.thumbs.length - 1;
    }

    const id = this.thumbs[this.selectedIndex]?.sharedID;
    if (id) {
      const el = document.getElementById(`thumb${ id }`);
      if (el) {
        this.scrollView?.instance?.scrollToElement(el)
      }
    }
  }
  
  public close(): void {
    this.closed.emit();
  }

  public stopBubble(e:Event): void {
    e.stopPropagation();
  }
}
