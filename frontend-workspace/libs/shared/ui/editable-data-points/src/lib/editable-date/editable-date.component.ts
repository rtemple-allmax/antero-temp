import { getDateString, getDateTimeString } from '@allmax-angular/shared/utils';
import { Component } from '@angular/core';
import { EditableDataPointBaseComponent } from '../editable-data-point.base';

@Component({
  selector: 'amx-editable-date',
  templateUrl: './editable-date.component.html',
  providers: [ { provide: EditableDataPointBaseComponent, useExisting: EditableDateComponent }],
  styleUrls: ['./editable-date.component.scss'],
})
export class EditableDateComponent extends EditableDataPointBaseComponent{
  public dateType: 'date' | 'datetime' = 'date';

  public getString(val: any): string {
    if (!val) { return ''; }
    if (this.dateType === 'date') {
      return getDateString(val);
    } 
    return getDateTimeString(val);
  }
}
