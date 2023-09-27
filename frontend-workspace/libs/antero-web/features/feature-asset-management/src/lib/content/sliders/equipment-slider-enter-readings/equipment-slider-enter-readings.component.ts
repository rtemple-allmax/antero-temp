import { Equipment, Instrument, Reading } from '@allmax-angular/antero-web/entities';
import { Component, OnInit, inject } from '@angular/core';
import { EquipmentStatePropNames } from '../../../types/store.schema';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Sliders } from '../../../types/sliders.enum';
import { EquipmentSliderBaseComponent } from '../../../types/equipment-slider.base';


@Component({
  selector: 'ant-equipment-slider-enter-readings',
  templateUrl: './equipment-slider-enter-readings.component.html',
  styleUrls: ['./equipment-slider-enter-readings.component.scss'],
})
export class EquipmentSliderEnterReadingsComponent extends EquipmentSliderBaseComponent implements OnInit {
  public records: Instrument[] = [];

  private fb = inject(FormBuilder);
  
  public form: FormGroup = this.fb.group({
    date: this.fb.control(null),
    items: this.fb.array([])
  })

  public get items(): FormArray {
    return this.form.controls['items'] as FormArray;
  }

  public get completedCount(): number {
    return this.items.controls.filter(x => x.value.state).length
  }

  public ngOnInit(): void {
    const sub = this.eqStore?.observe(EquipmentStatePropNames.SELECTED_EQUIPMENT)?.subscribe(x => this.updateData(x));
    if (sub) { this.subs.push(sub); }
  }

  public async updateData(equipment: Equipment): Promise<void> {
    if (equipment) {
      const records = await this.eqCtrl.getInstruments_Raw(equipment.id);
      if (records) {
        this.records = records;
        for (const record of this.records) {
          const group = this.fb.group({ instrumentID: record.id, name: record.name, units: record.units, value: null });
          this.items.push(group);
        }
      }
    }
  }
  
  public async submit(): Promise<void> {
    const { date, items } = this.form.value;
    const readings: Reading[] = [];
    for(const item of items) {
      if (item.value) {
        const reading: Reading = {
          id: 0,
          instrumentID: item.instrumentID,
          instrument: null,
          dateOfReading: date,
          value: item.value,
          userName: null,
          fullName: null,
          whereRecorded: null
        }
        readings.push(reading);
      }
    }

    const result = await this.eqCtrl.enterReadings(readings);
    if (result) {
      this.eqStore?.setValue(EquipmentStatePropNames.REFRESH, true);
      this.eqStore?.setValue(EquipmentStatePropNames.OPEN_SLIDER, Sliders.NONE);
    }
  }
}
