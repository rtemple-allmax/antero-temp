import { ImageData } from '@allmax-angular/antero-web/types';
import { Nullable } from '@allmax-angular/shared/types';
import { allIcons } from '@allmax-angular/shared/ui/icons';
import { guid } from '@allmax-angular/shared/utils';
import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { debounceTime, fromEvent, merge } from 'rxjs';

enum MenuEvents {
  DOWNLOAD,
  DELETE
}

@Component({
  selector: 'amx-portrait',
  templateUrl: './portrait.component.html',
  styleUrls: ['./portrait.component.scss'],
})
export class PortraitComponent implements OnInit, AfterViewInit {
  @ViewChild('portrait') public portraitEl: Nullable<ElementRef>;

  @Input() public imgData: Nullable<ImageData>;

  @Output() public selectionRequested = new EventEmitter<ImageData>();
  @Output() public downloadRequested = new EventEmitter<ImageData>();
  @Output() public deleteRequested = new EventEmitter<ImageData>(); 

  public icons = { ...allIcons };
  public id = '';
  public target = '';


  public menuItems = [
    {
      icon: this.icons.downloadIcon,
      text: 'Download',
      menuEvent: MenuEvents.DOWNLOAD 
    },
    { 
      icon: this.icons.editIcon,
      text: 'Delete',
      danger: true,
      menuEvent: MenuEvents.DELETE
    },
  ];

  public get url(): string {
    if (this.imgData?.hydrated) {
      return `url(${ this.imgData?.thumbnailUrl })`;
    }
    return '';
  }

  public ngOnInit(): void {
    this.id = `portrait-${ guid() }`
    this.target = `#${ this.id }`
  }

  public ngAfterViewInit(): void {
    const el = this.portraitEl?.nativeElement;
    if (el) {
      const clickEv = fromEvent<MouseEvent>(el, 'click');
      const dblClickEv = fromEvent<MouseEvent>(el, 'dblclick');
      const merged = merge(clickEv, dblClickEv).pipe(debounceTime(300));
      merged.subscribe(ev => {
        if (ev.type === 'click') {
          // single click 
          console.log('single click')
          if (this.imgData) {
            this.selectionRequested.emit(this.imgData);
          }
        } else {
          // dbl click
          console.log('dbl click')
          if (this.imgData) {
            this.downloadRequested.emit(this.imgData);
          }
        }
      })
    }
  }
  
  public itemClick(e: any) {
    if (!e.itemData.items) {
      if (this.imgData) {
        switch (e.itemData.menuEvent) {
          case MenuEvents.DOWNLOAD:
            this.downloadRequested.emit(this.imgData);
            break;
          case MenuEvents.DELETE:
            this.deleteRequested.emit(this.imgData)
            break;
        }
      }
    }
  }
}
