import { Component, EventEmitter, Output } from '@angular/core';
import { EquipmentFormBaseComponent } from '../../../types/equipment-form.base';
import { CrudFunctions, CustomValidator, ValidationData } from '@allmax-angular/shared/types';
import { AddEquipment } from '@allmax-angular/antero-web/types';
import { EquipmentStatePropNames } from '../../../types/store.schema';
import { Sliders } from '../../../types/sliders.enum';
import { Equipment } from '@allmax-angular/antero-web/entities';

@Component({
  selector: 'ant-equipment-slider-add',
  templateUrl: './equipment-slider-add.component.html',
  styleUrls: ['./equipment-slider-add.component.scss'],
})
export class EquipmentSliderAddComponent extends EquipmentFormBaseComponent {
  @Output() public recordAdded = new EventEmitter<Equipment>()

  public customValidators: CustomValidator<string>[] = [
    new CustomValidator<string>((val: any) => this.dbCtrl.nameExists(new ValidationData(
      null,
      val,
      CrudFunctions.CREATE,
      { model: 'equipment', columns: [ 'name' ], values: [ val ]})), `Equipment name alreadys exists`)
  ];

  public async submit(): Promise<void> {
    const record: AddEquipment = this.buildRecord(CrudFunctions.CREATE) as AddEquipment;
    if (record) {
      const res = await this.eqCtrl.addEquipment(record);
      if (res) {
        this.recordAdded.emit(res);
        if (this.eqStore) {
          this.eqStore.setValue(EquipmentStatePropNames.OPEN_SLIDER, Sliders.NONE);
          this.eqStore.setValue(EquipmentStatePropNames.REFRESH, true);
        }        
      } 
    }
  }
}
