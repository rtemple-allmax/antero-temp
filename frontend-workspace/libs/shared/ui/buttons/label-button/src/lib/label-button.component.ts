import { ButtonBaseComponent } from '@allmax-angular/shared/types';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'amx-label-button',
  templateUrl: './label-button.component.html',
  styleUrls: [ './label-button.component.scss' ]
})
export class LabelButtonComponent extends ButtonBaseComponent {
  public getStyles(): any {
    this.fgColor = 'white';
    this.bgColor = 'var(--icon-color)';
    return {
      'background': this.disabled ? '#eee' : this.bgColor,
      'color': this.disabled ? 'var(--disabled-color)' : this.fgColor,
      'font-size': this.height,
    }
  }
}
