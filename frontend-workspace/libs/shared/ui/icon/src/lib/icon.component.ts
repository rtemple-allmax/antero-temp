import { Component, Input } from '@angular/core';

@Component({
  selector: 'amx-icon',
  templateUrl: './icon.component.html',
})
export class IconComponent {
  @Input() public icon: any;
  @Input() public height = 'auto';
  @Input() public color = 'var(--icon-color)';
  @Input() public tabIndex = -1;
}
