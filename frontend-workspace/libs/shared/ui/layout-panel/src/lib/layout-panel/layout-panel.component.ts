import { PersistentDataKeys } from '@allmax-angular/antero-web/services/persistence';
import { Component, ElementRef, EventEmitter, inject, Input, Output, OnInit } from '@angular/core';
import { LayoutPanelBaseComponent } from '../layout-panel.base';

@Component({
  selector: 'amx-layout-panel',
  templateUrl: './layout-panel.component.html',
  styleUrls: ['./layout-panel.component.scss'],
})
export class LayoutPanelComponent extends LayoutPanelBaseComponent {
  @Input() public title = 'title';
  @Input() public tutorialKey = PersistentDataKeys.NONE;

  @Output() public collapsedStateChanged = new EventEmitter<boolean>();

  public collapsed = false;
  public el = inject(ElementRef);

  public get iconTransform(): string {
    return this.collapsed ? 'rotate(-90deg)' : 'rotate(0deg)';
  }

  public toggle(): void {
    this.collapsed = !this.collapsed;
    this.collapsedStateChanged.emit(this.collapsed);
  }
}
