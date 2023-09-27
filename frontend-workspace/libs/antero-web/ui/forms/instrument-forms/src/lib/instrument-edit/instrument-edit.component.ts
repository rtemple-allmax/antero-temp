import { Instrument, InstrumentTypes } from '@allmax-angular/antero-web/entities';
import { instrumentTypesToLabelsMap } from '@allmax-angular/antero-web/types';
import { CrudFunctions } from '@allmax-angular/shared/types';
import { Component, OnInit } from '@angular/core';
import { InstrumentFormBaseComponent } from '../instrument-form.base';

@Component({
  selector: 'ant-instrument-edit',
  templateUrl: './instrument-edit.component.html',
  styleUrls: ['./instrument-edit.component.scss'],
})
export class InstrumentEditComponent extends InstrumentFormBaseComponent implements OnInit {
  public get heading(): string  { return `Edit ${ this.source?.name }` }

  public ngOnInit(): void {
    this.crud = CrudFunctions.UPDATE;
  }

  public submit(): void {
    if (this.formIsValid && this.source) {
      const record: Instrument = {
        id: this.source.id,
        name: this.nameBinding.value,
        instrumentType: this.typeBinding.value === instrumentTypesToLabelsMap.get(InstrumentTypes.GUAGE) ? InstrumentTypes.GUAGE : InstrumentTypes.METER,
        units: this.unitsBinding.value,
        rollOver: this.rollOverBinding.value,
        equipment: null,
        equipmentID: this.source.equipmentID,
        lastReading: 0,
        lastReadingDate: null
      };
      this.editRequested.emit(record);
    }
  }
}
