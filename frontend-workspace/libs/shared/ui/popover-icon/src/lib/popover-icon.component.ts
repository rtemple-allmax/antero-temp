import { Nullable } from '@allmax-angular/shared/types';
import { guid } from '@allmax-angular/shared/utils';
import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'amx-popover-icon',
  templateUrl: './popover-icon.component.html',
  styles: [],
})
export class PopoverIconComponent {
  @Input() public icon: any;
  @Input() public height = '14px';
  @Input() public color = 'var(--icon-color)';
  @Input() public template: Nullable<TemplateRef<any>>;

  public id = '';
  public target = '';
  public visibility = false;

  constructor() {
    this.id = `popover-target${ guid() }`;
    this.target = `#${ this.id }`;
  }
  
  public mouseenterHandler(): void {
    this.visibility = true;
  }

  public mouseleaveHandler(): void {
    this.visibility = false;
  }
}
