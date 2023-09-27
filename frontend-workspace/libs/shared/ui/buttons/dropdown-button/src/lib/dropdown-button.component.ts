import { ButtonBaseComponent, Nullable } from '@allmax-angular/shared/types';
import { guid } from '@allmax-angular/shared/utils';
import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'amx-dropdown-button',
  templateUrl: './dropdown-button.component.html',
  styleUrls: [ './dropdown-button.component.scss' ]
})
export class DropdownButtonComponent extends ButtonBaseComponent implements AfterViewInit {
  @ViewChild('dropdown') public dropdown: Nullable<ElementRef<HTMLDivElement>>;
  @ViewChild('content') public content: Nullable<ElementRef<HTMLDivElement>>;

  @Input() public origin: 'left' | 'right' = 'left';
  @Input() public padding = 'var(--space-sm)';
  @Input() public items: any[] = [];

  public id = `dropdownbtn${ guid() }`
  public target = `#${ this.id }`;
  
  public open = false;
  private dropdownEl: Nullable<HTMLDivElement>;
  private contentEl: Nullable<HTMLDivElement>;

  
  
  public ngAfterViewInit(): void {
    this.dropdownEl = this.dropdown?.nativeElement;
    this.contentEl = this.content?.nativeElement;
  }

  public toggle(): void {
    this.open = !this.open;
    if (this.open) {
      this.setPosition();
    } else {
      this.clearPosition();
    }
  }

  public itemClick(e: any): void {
    // console.log('item click', e)
    e.itemData.onItemClick();
  }

  public clickOutsideHandler(): void {
    this.open = false;
    this.clearPosition();
  }

  public setPosition(): void {
    if (!this.open) { return; }
    const dropdownRect = this.dropdownEl?.getBoundingClientRect();
    const contentRect = this.contentEl?.getBoundingClientRect();
    
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;

    this.renderer.setStyle(this.contentEl, 'position', 'fixed');
    this.renderer.appendChild(this.contentEl?.closest('body'), this.contentEl);

    if (this.contentEl && contentRect && dropdownRect) {
      
      const topVal = (contentRect.top + contentRect.height) < (windowHeight + 12)  ?
      `${dropdownRect.bottom + 1}px` : 
      `${ dropdownRect.top - (contentRect.height + 12) }px`;

      if (this.origin === 'left') {
        this.renderer.setStyle(this.contentEl, 'left', `${dropdownRect?.left}px`);
      } else {
        this.renderer.setStyle(this.contentEl, 'right', `${ windowWidth - dropdownRect?.right }px`);
      }
      
      
      
      this.renderer.setStyle(this.contentEl, 'top', topVal);
      
      // this.renderer.setStyle(this.contentEl, 'width', `fit-content`)
      this.renderer.setStyle(this.contentEl, 'height', `auto`)

      if ((contentRect.top + contentRect.height) < (windowHeight + 12)) {
        this.renderer.removeClass(this.contentEl, 'above');
      } else {
        this.renderer.addClass(this.contentEl, 'above');
      }
      this.renderer.setStyle(this.contentEl, 'display', 'block');
    }
  }

  public clearPosition(): void {
    if (!this.contentEl || !this.dropdownEl) { return; }
    this.renderer.setStyle(this.contentEl, 'display', 'none');
    this.renderer.setStyle(this.contentEl, 'position', 'absolute');
    this.renderer.appendChild(this.dropdownEl, this.contentEl);
    this.renderer.setStyle(this.contentEl, 'top', 0);
    this.renderer.removeStyle(this.contentEl, 'left');
    this.renderer.removeStyle(this.contentEl, 'right');
  }
}
     