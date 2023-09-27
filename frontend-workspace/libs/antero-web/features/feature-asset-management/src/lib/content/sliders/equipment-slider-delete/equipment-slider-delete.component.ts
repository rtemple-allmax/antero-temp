import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { resources } from '../../../types/resources';
import { EquipmentFormBaseComponent } from '../../../types/equipment-form.base';
import { EquipmentStatePropNames } from '../../../types/store.schema';
import { Sliders } from '../../../types/sliders.enum';
@Component({
  selector: 'ant-equipment-slider-delete',
  templateUrl: './equipment-slider-delete.component.html',
  styleUrls: ['./equipment-slider-delete.component.scss'],
})
export class EquipmentSliderDeleteComponent extends EquipmentFormBaseComponent implements OnInit {
  @Output() public recordDeleted = new EventEmitter();

  public messages: string[] = [];

  public ngOnInit(): void {
    const sub = this.eqStore?.observe(EquipmentStatePropNames.SELECTED_EQUIPMENT)?.subscribe((x) => {
      this.source = x;
      if (this.source?.name) {
        this.messages = resources.deleteEquipmentMessages(this.source.name);
      }
    });
    if (sub) { this.subs.push(sub); }
  }

  public async confirmHandler(): Promise<void> {
    if (this.source) {
      const result = await this.eqCtrl.deleteEquipment(this.source);
      if (result) {
        this.eqStore?.setValue(EquipmentStatePropNames.SELECTED_EQUIPMENT, null);
        this.eqStore?.setValue(EquipmentStatePropNames.REFRESH, true);
        this.eqStore?.setValue(EquipmentStatePropNames.OPEN_SLIDER, Sliders.NONE);
        this.recordDeleted.emit();
      }
    }
  }

  public cancelHandler(): void {
    this.eqStore?.setValue(EquipmentStatePropNames.OPEN_SLIDER, Sliders.NONE);
  }
}
