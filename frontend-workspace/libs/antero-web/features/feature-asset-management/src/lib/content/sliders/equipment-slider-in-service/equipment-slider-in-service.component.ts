import { Component, OnInit } from '@angular/core';
import { EquipmentStatePropNames } from '../../../types/store.schema';
import { ObservableBinding } from '@allmax-angular/shared/types';
import { EquipmentInServiceHistory } from '@allmax-angular/antero-web/entities';
import { Sliders } from '../../../types/sliders.enum';
import { EquipmentSliderBaseComponent } from '../../../types/equipment-slider.base';

@Component({
  selector: 'ant-equipment-slider-in-service',
  templateUrl: './equipment-slider-in-service.component.html',
  styleUrls: ['./equipment-slider-in-service.component.scss'],
})
export class EquipmentSliderInServiceComponent extends EquipmentSliderBaseComponent implements OnInit  {
  public dateBinding = new ObservableBinding<Date>(null);
  public commentBinding = new ObservableBinding<string>();

  public get heading(): string {
    return this.source?.inServiceStatus ? 'Take Out Of Service' : 'Put In Service';  
  }

  ngOnInit(): void {
    const sub = this.eqStore?.observe(EquipmentStatePropNames.SELECTED_EQUIPMENT)?.subscribe(x => this.source = x);
    if (sub) { this.subs.push(sub); }
  }

  public async submit(): Promise<void> {
    if (this.source) {
      const history: EquipmentInServiceHistory = {
        id: 0,
        equipmentID: this.source.id,
        equipment: null,
        dateChanged: new Date(),
        dateStatusChanged: this.dateBinding.value,
        inService: !this.source.inServiceStatus,
        userName: null,
        comment: this.commentBinding.value
      }

      const result = await this.eqCtrl.toggleInServiceStatus(history);
      if (result?.equipment) {
        this.eqStore?.setValue(EquipmentStatePropNames.SELECTED_EQUIPMENT, { ...result.equipment })
        this.eqStore?.setValue(EquipmentStatePropNames.OPEN_SLIDER, Sliders.NONE);
      }
    }
  }
}
