import { allIcons } from '@allmax-angular/shared/ui/icons';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'amx-collapsible-item',
  templateUrl: './collapsible-item.component.html',
  styleUrls: ['./collapsible-item.component.scss'],
})
export class CollapsibleItemComponent {
  public icons = { ...allIcons };

  @Input() public label = '';
  
  public index = -1;
  public collapsed = true;

  public get iconTransform(): string {
    return this.collapsed ? 'rotate(-90deg)' : 'rotate(0deg)';
  }
  
  public toggle(): void {
    this.collapsed = !this.collapsed;
  }

  public open(): void {
    this.collapsed = false;
  }

  public close(): void {
    this.collapsed = true;
  }
}
