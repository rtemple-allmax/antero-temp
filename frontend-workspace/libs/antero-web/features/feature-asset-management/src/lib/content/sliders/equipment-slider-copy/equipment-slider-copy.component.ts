import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EquipmentFormBaseComponent } from '../../../types/equipment-form.base';
import { Equipment } from '@allmax-angular/antero-web/entities';
import { CrudFunctions, CustomValidator, ValidationData } from '@allmax-angular/shared/types';
import { EquipmentStatePropNames } from '../../../types/store.schema';
import { AddEquipment } from '@allmax-angular/antero-web/types';
import { Sliders } from '../../../types/sliders.enum';

@Component({
  selector: 'ant-equipment-slider-copy',
  templateUrl: './equipment-slider-copy.component.html',
  styleUrls: ['./equipment-slider-copy.component.scss'],
})
export class EquipmentSliderCopyComponent extends EquipmentFormBaseComponent implements OnInit {
  @Output() public recordCopied = new EventEmitter<Equipment>();

  public customValidators: CustomValidator<string>[] = [
    new CustomValidator<string>((val: any) => this.dbCtrl.nameExists(new ValidationData(
      this.source as any,
      val,
      CrudFunctions.COPY,
      { model: 'equipment', columns: [ 'name' ], values: [ val ]})),
      `Equipment name alreadys exists`
    )
  ];

  public ngOnInit(): void {
    const sub = this.eqStore?.observe(EquipmentStatePropNames.SELECTED_EQUIPMENT)?.subscribe((x) => {
      this.source = x;
      if (this.source) { this.populate(CrudFunctions.COPY); }
    });
    if (sub) { this.subs.push(sub); }
  }

  public async submit(): Promise<void> {
    const record: AddEquipment = this.buildRecord(CrudFunctions.COPY) as AddEquipment;
    if (record) {
      const res = await this.eqCtrl.addEquipment(record);
      if (res) {
        this.recordCopied.emit(res);
        if (this.eqStore) {
          this.eqStore.setValue(EquipmentStatePropNames.SELECTED_EQUIPMENT, res);
          this.eqStore.setValue(EquipmentStatePropNames.OPEN_SLIDER, Sliders.NONE);
          this.eqStore.setValue(EquipmentStatePropNames.REFRESH, true);
        }        
      } 
    }
  }
}
