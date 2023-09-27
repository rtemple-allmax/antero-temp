import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EquipmentFormBaseComponent } from '../../../types/equipment-form.base';
import { Equipment } from '@allmax-angular/antero-web/entities';
import { CrudFunctions, CustomValidator, ValidationData } from '@allmax-angular/shared/types';
import { EquipmentStatePropNames } from '../../../types/store.schema';
import { Sliders } from '../../../types/sliders.enum';

@Component({
  selector: 'ant-equipment-slider-edit',
  templateUrl: './equipment-slider-edit.component.html',
  styleUrls: ['./equipment-slider-edit.component.scss'],
})
export class EquipmentSliderEditComponent extends EquipmentFormBaseComponent implements OnInit {
  @Output() public recordEdited = new EventEmitter<Equipment>();

  public customValidators: CustomValidator<string>[] = [
    new CustomValidator<string>((val: any) => this.dbCtrl.nameExists(new ValidationData(
      this.source as any,
      val,
      CrudFunctions.UPDATE,
      { model: 'equipment', columns: [ 'name' ], values: [ val ]})),
      `Equipment name alreadys exists`
    )
  ];

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
        this.recordEdited.emit(res);
        if (this.eqStore) {
          this.eqStore.setValue(EquipmentStatePropNames.SELECTED_EQUIPMENT, res);
          this.eqStore.setValue(EquipmentStatePropNames.OPEN_SLIDER, Sliders.NONE);
          this.eqStore.setValue(EquipmentStatePropNames.REFRESH, true);
        }        
      } 
    }
  }
}
