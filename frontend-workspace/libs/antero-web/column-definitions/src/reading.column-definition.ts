import { BaseColumnDefinition, DataColumn } from "@allmax-angular/shared/types";

export class ReadingColumnDefinition extends BaseColumnDefinition {
  constructor(visibleCols?: string[]) {
    super();

    this.columns = [
      new DataColumn('id', { allowSearch: false }),
      new DataColumn('instrumentID', { allowSearch: false }),
      new DataColumn('instrument.name', { caption: 'Instrument Name' }),
      new DataColumn('instrument.units', { caption: 'Units' }),
      new DataColumn('dateOfReading', {
        caption: 'Date',
        dataType: 'datetime',
        sortOrder: 'desc',
        cellTemplate: 'cellTemplate'
      }),
      new DataColumn('value', { caption: 'Reading' }),
      new DataColumn('userName', { caption: 'User' }),
      new DataColumn('whereRecorded', { caption: 'By' })
    ];

    if (visibleCols) {
      this.setVisibility(visibleCols);
    }
  }
}
