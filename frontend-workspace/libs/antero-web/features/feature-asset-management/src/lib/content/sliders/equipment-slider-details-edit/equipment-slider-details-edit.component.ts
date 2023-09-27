import { Component, OnInit } from '@angular/core';
import { EquipmentFormBaseComponent } from '../../../types/equipment-form.base';
import { EquipmentStatePropNames } from '../../../types/store.schema';
import { CrudFunctions } from '@allmax-angular/shared/types';
import { Equipment } from '@allmax-angular/antero-web/entities';
import { Sliders } from '../../../types/sliders.enum';

@Component({
  selector: 'ant-equipment-slider-details-edit',
  templateUrl: './equipment-slider-details-edit.component.html',
  styleUrls: ['./equipment-slider-details-edit.component.scss'],
})
export class EquipmentSliderDetailsEditComponent extends EquipmentFormBaseComponent implements OnInit {
  public ngOnInit(): void {
    const sub = this.eqStore?.observe(EquipmentStatePropNames.SELECTED_EQUIPMENT)?.subscribe((x) => {
      this.source = x;
      if (this.source) { this.populate(CrudFunctions.UPDATE); }
    });
    if (sub) { this.subs.push(sub); }
  }

  public async submit(): Promise<void> {
    const record: Equipment = this.buildRecord(CrudFunctions.UPDATE) as Equipment;
    if (record) {
      const res = await this.eqCtrl.editEquipment(record);
      if (res) {
        if (this.eqStore) {
          this.eqStore.setValue(EquipmentStatePropNames.SELECTED_EQUIPMENT, res);
          this.eqStore.setValue(EquipmentStatePropNames.OPEN_SLIDER, Sliders.NONE);
          this.eqStore.setValue(EquipmentStatePropNames.REFRESH, true);
        }        
      } 
    }
  }
}
