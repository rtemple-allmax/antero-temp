import { Modals } from '@allmax-angular/antero-web/types';
import { CrudFunctions, Nullable } from '@allmax-angular/shared/types';
import { AfterViewInit, Component, HostBinding, OnInit } from '@angular/core';
import { EquipmentPanelBaseComponent } from '../equipment-panel.base';

@Component({
  selector: 'ant-equipment-purchasing-panel',
  templateUrl: './equipment-purchasing-panel.component.html',
  styleUrls: ['./equipment-purchasing-panel.component.scss'],
})
export class EquipmentPurchasingPanelComponent extends EquipmentPanelBaseComponent implements AfterViewInit {
  public override title = 'Purchasing';

  @HostBinding('attr.data-id') public override dataID = this.title;

  public ngAfterViewInit(): void {
    const data = this.persistence.get();
    if (data?.equipmentPanelsCollapsible) {
      const record = data.equipmentPanelsCollapsible.find(x => x.name === this.title);
      if (record && this.panel) {
        this.panel.collapsed = record.collapsed;
      }
    }
  }

  public editHandler(): void {
    this.antero.openModal(Modals.EQUIPMENT_EDIT_PURCHASING, CrudFunctions.UPDATE);
  }
  
  public collapsedStateChangedHandler(state: boolean) {
    this.persistence.setEquipmentPanelCollapsibleState(this.title, state);
  }
}
