import { EquipmentDetailsPanelComponent, EquipmentInstrumentsPanelComponent, EquipmentPartsPanelComponent } from '@allmax-angular/antero-web/ui/equipment-panels';
import { PositioningService } from '@allmax-angular/shared/services/src/lib/positioning';
import { Nullable } from '@allmax-angular/shared/types';
import { LayoutPanelContainerComponent } from '@allmax-angular/shared/ui/layout-panel';
import { Component, OnInit, Input, ViewChild, Renderer2 } from '@angular/core';
import { EquipmentTabBaseComponent } from '../equipment-tab.base';

@Component({
  selector: 'ant-equipment-tab-details',
  templateUrl: './equipment-tab-details.component.html',
  styleUrls: ['./equipment-tab-details.component.scss'],
})
export class EquipmentTabDetailsComponent extends EquipmentTabBaseComponent {
  @ViewChild(LayoutPanelContainerComponent) public containerRef: Nullable<LayoutPanelContainerComponent>;
  @ViewChild(EquipmentDetailsPanelComponent) public detailPanelRef: Nullable<EquipmentDetailsPanelComponent>;
  @ViewChild(EquipmentPartsPanelComponent) public partsPanel: Nullable<EquipmentPartsPanelComponent>;
  @ViewChild(EquipmentInstrumentsPanelComponent) public instrumentsPanel: Nullable<EquipmentInstrumentsPanelComponent>;

  public scrollHandler(): void {
    this.partsPanel?.closeMenus();
    this.instrumentsPanel?.closeMenus();
  }
}
