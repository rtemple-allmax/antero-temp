import { Nullable } from '@allmax-angular/shared/types';
import { isNullOrEmpty } from '@allmax-angular/shared/utils';
import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { debounceTime, fromEvent, merge } from 'rxjs';

@Component({
  selector: 'amx-shortcut-button',
  templateUrl: './shortcut-button.component.html',
  styleUrls: ['./shortcut-button.component.scss'],
})
export class ShortcutButtonComponent implements AfterViewInit {
  @ViewChild('button') public butttonEl: Nullable<ElementRef>;

  @Input() public label = '';
  @Input() public icon: any;
  @Input() public height = '40px';
  @Input() public fgColor = 'var(--fg-color)';
  @Input() public awesome = false;
  @Input() public selected = false;
  
  @Output() public clicked = new EventEmitter<undefined>();
  @Output() public dblClicked = new EventEmitter<undefined>();
  @Output() public rightClicked = new EventEmitter<undefined>();
  @Output() public ctrlClicked = new EventEmitter<undefined>();

 
  public openContext = false;

  public get src(): string {
    if (!isNullOrEmpty(this.icon)) {
      return `assets/icons/${ this.icon }.svg`
    } else {
      return `assets/icons/iconNoImage.svg`
    }
  }

  public ngAfterViewInit(): void {
    const el = this.butttonEl?.nativeElement;
    if (el) {
      const clickEv = fromEvent<MouseEvent>(el, 'click');
      const dblClickEv = fromEvent<MouseEvent>(el, 'dblclick');
      const merged = merge(clickEv, dblClickEv).pipe(debounceTime(300));
      merged.subscribe(ev => {
        if (ev.type === 'click') {
          // single click 
          if (ev.ctrlKey) {
            this.ctrlClicked.emit();
          } else {
            this.clicked.emit();
          }
        } else {
          // dbl click
          console.log('dbl click')
          this.dblClicked.emit();
        }
      })
    }
  }

  

  public rightClickHandler(e: Event): void {
    e.preventDefault();
    this.openContext = true;
    this.rightClicked.emit();
  }

  public deselect(): void {
    this.openContext = false;
  }
}
