import { ButtonBaseComponent } from '@allmax-angular/shared/types';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'amx-dropdown-item-button',
  templateUrl: './dropdown-item-button.component.html',
  styleUrls: ['./dropdown-item-button.component.scss'],
})
export class DropdownItemButtonComponent extends ButtonBaseComponent {
  @Input() public danger = false;
  @Input() public subItem = false;

  public hovered = false;

  public get iconColor(): string {
    if (this.disabled) {
      return 'var(--gray-3)'
    } else if (this.danger) {
      if (this.hovered) {
        return 'var(--gray-0)'  
      } else {
        return 'var(--msg-danger)'
      }
    } else {
      return 'var(--icon-color)'
    }
  }

  public get textColor(): string {
    if (this.disabled) {
      return 'var(--disabled-color)'
    } else if (this.danger) {
      return 'var(--msg-danger)'
    }

    return 'var(--fg-color)';
  }

  public clickHandler(e: Event): void {
    // console.log('click handler')
    if (this.disabled) {
      // console.log('should not bubble', e)
      e.stopPropagation();
    } else {
      this.click(e);
      document.dispatchEvent(new Event('click'));
    }
  }

  public mouseenterHandler(): void {
    this.hovered = true;
  }

  public mouseleaveHandler(): void {
    this.hovered = false;
  }
}
