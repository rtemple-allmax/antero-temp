import { ButtonBaseComponent } from '@allmax-angular/shared/types';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'amx-combo-button',
  templateUrl: './combo-button.component.html',
  styleUrls: ['./combo-button.component.scss'],
})
export class ComboButtonComponent extends ButtonBaseComponent {
  @Input() public invert = false;
  
  public override icon: any;
  public override fgColor = 'var(--icon-color)'
  public hovered = false;

  public get color(): string {
    if (this.disabled) {
      return '#ccc';
    } else if (this.hovered) {
      if (this.invert) {
        return this.fgColor;
      } else {
        return 'white';
      }
    } else {
      if (this.invert) {
        return 'white';
      } else {
        return this.fgColor;
      }

    }
  }

  public get bg(): string {
    if (this.disabled) {
      return '#ddd';
    } else if (this.hovered) {
      if (this.invert) {
        return 'white';
      } else {
        return this.fgColor;

      }
    } else {
      if (this.invert) {
        return this.fgColor;
      } else {
        return 'white';
      }
    }
  }

  public get borderColor(): string {
    if (this.disabled) {
      return '#ccc';
    } else {
      return this.fgColor;
    }
  }

  public mouseenterHandler(): void {
    this.hovered = true;
  }

  public mouseleaveHandler(): void {
    this.hovered = false;
  }
}
