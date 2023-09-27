import { Component, OnInit } from '@angular/core';
import { EquipmentSliderBaseComponent } from '../../../types/equipment-slider.base';
import { EquipmentStatePropNames } from '../../../types/store.schema';
import { ObservableBinding } from '@allmax-angular/shared/types';

@Component({
  selector: 'ant-equipment-slider-replace',
  templateUrl: './equipment-slider-replace.component.html',
  styleUrls: ['./equipment-slider-replace.component.scss'],
})
export class EquipmentSliderReplaceComponent extends EquipmentSliderBaseComponent implements OnInit {
  public newNameBinding = new ObservableBinding<string>();
  
  public ngOnInit(): void {
    if (this.eqStore) {
      const sub = this.eqStore.observe(EquipmentStatePropNames.SELECTED_EQUIPMENT)?.subscribe(x => this.source = x);
      if (sub) { this.subs.push(sub); }
    }
  }

  public submit(): void {
    console.log()
  }
}
