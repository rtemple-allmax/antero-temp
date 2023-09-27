import { PersistentDataKeys } from '@allmax-angular/antero-web/services/persistence';
import { Nullable } from '@allmax-angular/shared/types';
import { Component, OnInit, Output, EventEmitter, Input, HostBinding, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { LayoutPanelBaseComponent } from '../layout-panel.base';
import { LayoutPanelComponent } from '../layout-panel/layout-panel.component';

@Component({
  selector: 'amx-layout-panel-collapsible',
  templateUrl: './layout-panel-collapsible.component.html',
  styleUrls: ['./layout-panel-collapsible.component.scss'],
})
export class LayoutPanelCollapsibleComponent extends LayoutPanelComponent  {
  
}
