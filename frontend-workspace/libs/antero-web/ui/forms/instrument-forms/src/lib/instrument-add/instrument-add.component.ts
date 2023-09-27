import { Instrument, InstrumentTypes } from '@allmax-angular/antero-web/entities';
import { instrumentTypesToLabelsMap } from '@allmax-angular/antero-web/types';
import { CrudFunctions } from '@allmax-angular/shared/types';
import { Component, OnInit } from '@angular/core';
import { InstrumentFormBaseComponent } from '../instrument-form.base';

@Component({
  selector: 'ant-instrument-add',
  templateUrl: './instrument-add.component.html',
  styleUrls: ['./instrument-add.component.scss'],
})
export class InstrumentAddComponent extends InstrumentFormBaseComponent implements OnInit {
  public ngOnInit(): void {
    this.crud = CrudFunctions.CREATE;
  }

  public submit(): void {
    if (this.parent && this.formIsValid) {
      const record: Instrument = {
        id: 0,
        name: this.nameBinding.value,
        instrumentType: this.typeBinding.value === instrumentTypesToLabelsMap.get(InstrumentTypes.GUAGE) ? InstrumentTypes.GUAGE : InstrumentTypes.METER,
        units: this.unitsBinding.value,
        rollOver: this.rollOverBinding.value,
        equipment: null,
        equipmentID: this.parent.id,
        lastReading: 0,
        lastReadingDate: null
      };
      this.addRequested.emit(record);
    }
  }
}
