import { ButtonBaseComponent } from '@allmax-angular/shared/types';
import { outputAst } from '@angular/compiler';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'amx-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss'],
})
export class IconButtonComponent extends ButtonBaseComponent {
  @Input() public awesome = false;
  @Input() public rotation = '0deg';
  @Input() public rounded = false;
  @Input() public border = 'none';
  @Input() public showBG = false;
  @Input() public danger = false;
  @Input() public showHoverEffect = true;
  @Input() public padding = '2px var(--space-sm)';

  @Input() public override fgColor = 'var(--icon-color)';
  
  public get transform(): string {
    return `rotate(${ this.rotation })`;
  }

  public get outerHeight(): string {
    return `calc(${ this.height } + 10px)`;
  }
}
