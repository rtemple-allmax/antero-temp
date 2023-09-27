import { instrumentTypesToLabelsMap } from "@allmax-angular/antero-web/types";
import { BaseColumnDefinition, DataColumn } from "@allmax-angular/shared/types";
import { getDateTimeString } from "@allmax-angular/shared/utils";

export class InstrumentColumnDefinition extends BaseColumnDefinition {
  constructor(visibleColumns?: string[]) {
    super();
    this.columns = [
      new DataColumn('id', { allowSearch: false }),
      new DataColumn('equipmentID', { allowSearch: false }),
      new DataColumn('equipment.name', { caption: 'Equipment' }),
      new DataColumn('name', { sortOrder: 'asc' }),
      new DataColumn('instrumentType', {
        caption: 'Type', 
        calculateDisplayValue: e => instrumentTypesToLabelsMap.get(e.instrumentType),
      }),
      new DataColumn('units'),
      new DataColumn('rollOver'),
      new DataColumn('lastReading', {
        dataType: 'string',
        calculateDisplayValue: e => this.getLastReadingDate(e),
      }),
      new DataColumn('history', { caption: 'History' }),
      new DataColumn('value', { allowEditing: true, caption: 'Reading' }),
      // new DataColumn('', { cellTemplate: 'buttonsTemplate', visible: true, width: '30px' })
    ];

    if (visibleColumns) {
      this.setVisibility(visibleColumns);
    }
  }

  private getLastReadingDate(e: any): string {
    return `${ e.lastReading ? e.lastReading : ''}${ e.lastReadingDate ? ' - ' : ''}${ e.lastReadingDate ? getDateTimeString(e.lastReadingDate) : ''}`;
  }
}