import { CustomFieldNames } from '@allmax-angular/antero-web/entities';
import { Nullable } from '@allmax-angular/shared/types';
import { Component, OnInit, Input, HostBinding, AfterViewInit } from '@angular/core';
import { EquipmentPanelBaseComponent } from '../equipment-panel.base';

@Component({
  selector: 'ant-equipment-custom-fields-panel',
  templateUrl: './equipment-custom-fields-panel.component.html',
  styleUrls: ['./equipment-custom-fields-panel.component.scss'],
})
export class EquipmentCustomFieldsPanelComponent extends EquipmentPanelBaseComponent implements AfterViewInit {
  @Input() public customLabels: Nullable<CustomFieldNames>;

  public override title = 'Custom Fields';

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

  public collapsedStateChangedHandler(state: boolean) {
    this.persistence.setEquipmentPanelCollapsibleState(this.title, state);
  }
}
