import { TabBaseComponent } from '@allmax-angular/antero-web/bases';
import { DataStores } from '@allmax-angular/antero-web/types';
import { Component, EventEmitter, AfterViewInit, Output, ViewChild } from '@angular/core';
import { CollapsiblePanelsEquipment, PersistentUIKeysEquipment } from '../../../types/persistence.schema';
import { LayoutPanelContainerComponent } from '@allmax-angular/shared/ui/layout-panel';
import { Nullable } from '@allmax-angular/shared/types';
import { EquipmentPanelCustomizedDataComponent } from '../../panels/equipment-panel-customized-data/equipment-panel-customized-data.component';
import { combineLatest } from 'rxjs';
import { EquipmentPanelDetailsComponent } from '../../panels/equipment-panel-details/equipment-panel-details.component';
import { EquipmentPanelPurchasingComponent } from '../../panels/equipment-panel-purchasing/equipment-panel-purchasing.component';
import { EquipmentPanelInstrumentsComponent } from '../../panels/equipment-panel-instruments/equipment-panel-instruments.component';
import { EquipmentPanelPartsComponent } from '../../panels/equipment-panel-parts/equipment-panel-parts.component';
import { EquipmentPanelDocumentsComponent } from '../../panels/equipment-panel-documents/equipment-panel-documents.component';
import { EquipmentPanelCustomFieldsComponent } from '../../panels/equipment-panel-custom-fields/equipment-panel-custom-fields.component';

@Component({
  selector: 'ant-equipment-tab-details',
  templateUrl: './equipment-tab-details.component.html',
  styleUrls: ['./equipment-tab-details.component.scss'],
})
export class EquipmentTabDetailsComponent extends TabBaseComponent implements AfterViewInit {
  @ViewChild(LayoutPanelContainerComponent) public layoutContainer: Nullable<LayoutPanelContainerComponent>;
  @ViewChild(EquipmentPanelCustomizedDataComponent) public myDataPanel: Nullable<EquipmentPanelCustomizedDataComponent>;
  @ViewChild(EquipmentPanelDetailsComponent) public detailsPanel: Nullable<EquipmentPanelDetailsComponent>;
  @ViewChild(EquipmentPanelPurchasingComponent) public purchasingPanel: Nullable<EquipmentPanelPurchasingComponent>;
  @ViewChild(EquipmentPanelInstrumentsComponent) public instrumentsPanel: Nullable<EquipmentPanelInstrumentsComponent>;
  @ViewChild(EquipmentPanelPartsComponent) public partsPanel: Nullable<EquipmentPanelPartsComponent>;
  @ViewChild(EquipmentPanelDocumentsComponent) public documentsPanel: Nullable<EquipmentPanelDocumentsComponent>;
  @ViewChild(EquipmentPanelCustomFieldsComponent) public customPanel: Nullable<EquipmentPanelCustomFieldsComponent>;
  @Output() public editDetailsRequested = new EventEmitter();

  private store = this.state.getStore(DataStores.EQUIPMENT_UI);

  private collapsedPanels: Array<{ name: string, state: boolean}> = [];

  public collapsiblePanels: typeof CollapsiblePanelsEquipment = CollapsiblePanelsEquipment;

  public ngAfterViewInit(): void {
    if (this.store) {
      const sub = combineLatest([
        this.store.observe(PersistentUIKeysEquipment.PANELS_ORDER),
        this.store.observe(PersistentUIKeysEquipment.PANELS_COLLAPSED)
      ]).subscribe(([
        order,
        collapsedPanels
      ]) => {
        this.layoutContainer?.sort(order);
        this.collapsedPanels = collapsedPanels;
        for (const panel of this.collapsedPanels) {
          switch(panel.name) {
            case CollapsiblePanelsEquipment.CUSTOM:
              if (this.customPanel?.panel) {
                this.customPanel.panel.collapsed = panel.state;
              }
              break;
            case CollapsiblePanelsEquipment.DETAILS:
              if (this.detailsPanel?.panel) {
                this.detailsPanel.panel.collapsed = panel.state;
              }
              break;
            case CollapsiblePanelsEquipment.DOCUMENTS:
              if (this.documentsPanel?.panel) {
                this.documentsPanel.panel.collapsed = panel.state;
              }
              break;
            case CollapsiblePanelsEquipment.INSTRUMENTS:
              if (this.instrumentsPanel?.panel) {
                this.instrumentsPanel.panel.collapsed = panel.state;
              }
              break;
            case CollapsiblePanelsEquipment.MY_DATA:
              if (this.myDataPanel?.panel) {
                this.myDataPanel.panel.collapsed = panel.state;
              }
              break;
            case CollapsiblePanelsEquipment.PARTS:
              if (this.partsPanel?.panel) {
                this.partsPanel.panel.collapsed = panel.state;
              }
              break;
            case CollapsiblePanelsEquipment.PURCHASING:
              if (this.purchasingPanel?.panel) {
                this.purchasingPanel.panel.collapsed = panel.state;
              }
              break;
          } 
        }
      });
      if (sub) { this.subs.push(sub); }
    }
  }

  public editDetailsRequestedHandler(): void {
    this.editDetailsRequested.emit();
  }

  public orderChangedHandler(order: string[]): void {
    this.store?.setValue(PersistentUIKeysEquipment.PANELS_ORDER, order);
  }

  public collapsedStateChangedHandler(name: string, state: boolean) {
    const panels = [ ...this.collapsedPanels ];
    const found = panels.find(x => x.name === name);
    if (found) {
      found.state = state;
      this.store?.setValue(PersistentUIKeysEquipment.PANELS_COLLAPSED, panels);
    }
  }
}
