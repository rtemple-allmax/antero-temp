import { Component, OnInit } from '@angular/core';
import { DataStores } from '@allmax-angular/antero-web/types';
import { EquipmentStatePropNames } from '../../../types/store.schema';
import { InstrumentFormBaseComponent } from '../../../types/instrument-form.base';
import { CrudFunctions, CustomValidator, ValidationData } from '@allmax-angular/shared/types';
import { Sliders } from '../../../types/sliders.enum';

@Component({
  selector: 'ant-equipment-slider-instrument-add',
  templateUrl: './equipment-slider-instrument-add.component.html',
  styleUrls: ['./equipment-slider-instrument-add.component.scss'],
})
export class EquipmentSliderInstrumentAddComponent extends InstrumentFormBaseComponent implements OnInit {
  public customValidators: CustomValidator<string>[] = [
    new CustomValidator<string>((val: any) => this.dbCtrl.nameExists(new ValidationData(
      null,
      val,
      CrudFunctions.CREATE,
      { model: 'instrument', columns: [ 'name', 'equipmentID' ], values: [ val, this.parent?.id ]})), `This Equipment already has an Instrument of that name`)
  ];

  public override ngOnInit(): void {
    super.ngOnInit();
    const sub = this.state.getStore(DataStores.EQUIPMENT)
    ?.observe(EquipmentStatePropNames.SELECTED_EQUIPMENT)
    ?.subscribe(x => this.parent = x);
    if (sub) { this.subs.push(sub); }
  }
  
  public async submit(): Promise<void> {
    const record = this.buildRecord(CrudFunctions.CREATE);
    if (record) {
      const res = await this.eqCtrl.addInstrument(record);
      if (res) {
        this.eqStore?.setValue(EquipmentStatePropNames.REFRESH, true);
        this.eqStore?.setValue(EquipmentStatePropNames.OPEN_SLIDER, Sliders.NONE);
      }
    }
  }
}
