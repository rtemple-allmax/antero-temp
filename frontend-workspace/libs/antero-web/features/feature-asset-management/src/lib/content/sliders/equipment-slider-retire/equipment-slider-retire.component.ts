import { Component, OnInit } from '@angular/core';
import { EquipmentStatePropNames } from '../../../types/store.schema';
import { Sliders } from '../../../types/sliders.enum';
import { EquipmentSliderBaseComponent } from '../../../types/equipment-slider.base';

@Component({
  selector: 'ant-equipment-slider-retire',
  templateUrl: './equipment-slider-retire.component.html',
  styleUrls: ['./equipment-slider-retire.component.scss'],
})
export class EquipmentSliderRetireComponent extends EquipmentSliderBaseComponent implements OnInit {
  public ngOnInit(): void {
    const sub = this.eqStore?.observe(EquipmentStatePropNames.SELECTED_EQUIPMENT)?.subscribe(x => this.source = x);
    if (sub) { this.subs.push(sub); }
  }

  public async confirmHandler(): Promise<void> {
    if (this.source) {
      const success = await this.eqCtrl.retire(this.source.id);
      if (success) {
        this.eqStore?.setValue(EquipmentStatePropNames.OPEN_SLIDER, Sliders.NONE);
        this.eqStore?.setValue(EquipmentStatePropNames.REFRESH, true);
        this.eqStore?.setValue(EquipmentStatePropNames.SELECTED_EQUIPMENT, null);
      }
    }
  }

  public cancelHandler(): void {
    this.eqStore?.setValue(EquipmentStatePropNames.OPEN_SLIDER, Sliders.NONE);
  }
}
