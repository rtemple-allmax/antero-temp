import { ButtonBaseComponent } from '@allmax-angular/shared/types';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'amx-slide-out-button',
  templateUrl: './slide-out-button.component.html',
  styleUrls: [ './slide-out-button.component.scss' ],
})
export class SlideOutButtonComponent extends ButtonBaseComponent {
  @Input() public origin: 'left' | 'right' = 'left';
  @Input() public stopPropagation = true;
  @Input() public danger = false;

  public open = false;
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
      if (this.hovered) {
        return 'var(--fg-color)';
      } else {
        return 'var(--msg-danger)'
      }
    } else {
      return 'var(--fg-color)'
    }
  }

  public toggle(e: Event): void {
    if (this.stopPropagation) {
      e.stopPropagation();
    }
    this.open = !this.open;
  }

  public close(): void {
    this.open = false;
  }

  public mouseenterHandler(): void {
    this.hovered = true;
    // this.open = true;
  }

  public mouseleaveHandler(): void {
    this.hovered = false;
    // this.open = false;
  }
}
