import { Modals } from '@allmax-angular/antero-web/types';
import { CrudFunctions } from '@allmax-angular/shared/types';
import { Component, OnInit } from '@angular/core';
import { PartsPanelBaseComponent } from '../part-panel.base';

@Component({
  selector: 'ant-parts-equipment-panel',
  templateUrl: './parts-equipment-panel.component.html',
  styleUrls: ['./parts-equipment-panel.component.scss'],
})
export class PartsEquipmentPanelComponent extends PartsPanelBaseComponent {
  public addHandler(): void {
    this.antero.openModal(Modals.EQUIPMENT_ADD_EDIT_PART, CrudFunctions.CREATE);
  }
}
