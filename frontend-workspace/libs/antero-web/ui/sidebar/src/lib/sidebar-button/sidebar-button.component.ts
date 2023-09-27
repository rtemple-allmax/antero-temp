import { Nullable } from '@allmax-angular/shared/types';
import { Component, Input } from '@angular/core';

export interface SidebarItem {
  label: string;
  icon: any;
  handler: VoidFunction;
}

@Component({
  selector: 'ant-sidebar-button',
  templateUrl: './sidebar-button.component.html',
  styleUrls: [ './sidebar-button.component.scss' ]
})
export class SidebarButtonComponent {
  @Input() public item: Nullable<SidebarItem>;
  @Input() public collapsed = false;
  @Input() public active = false;
  
  public hovered = false;

  public mouseenterHandler(): void {
    this.hovered = true;
  }

  public mouseleaveHandler(): void {
    this.hovered = false;
  }
}