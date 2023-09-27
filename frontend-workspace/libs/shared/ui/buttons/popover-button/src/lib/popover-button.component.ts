import { ButtonBaseComponent, Nullable } from '@allmax-angular/shared/types';
import { guid } from '@allmax-angular/shared/utils';
import { Component, Input, OnInit, TemplateRef } from '@angular/core';

export enum PopoverButtonTypes {
  ICON, 
  TEXT
}

@Component({
  selector: 'amx-popover-button',
  templateUrl: './popover-button.component.html',
  styleUrls: ['./popover-button.component.scss'],
})
export class PopoverButtonComponent extends ButtonBaseComponent implements OnInit {
  @Input() public template: Nullable<TemplateRef<any>>;
  @Input() public type = PopoverButtonTypes.ICON;
  @Input() public padding = 'var(--space-md)';

  public id = '';
  public target = '';
  public visibility = false;

  public types: typeof PopoverButtonTypes = PopoverButtonTypes;
  
  public ngOnInit(): void {
    this.id = `popover-target${ guid() }`;
    this.target = `#${ this.id }`;   
  }

  public show(): void {
    this.visibility = true;
  }

  public hide(): void {
    this.visibility = false;
  }

  public clickHandler(): void {
    this.clicked.emit();
  }
}
