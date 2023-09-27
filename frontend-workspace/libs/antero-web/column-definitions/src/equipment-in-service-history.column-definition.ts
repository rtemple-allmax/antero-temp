import { BaseColumnDefinition, DataColumn } from "@allmax-angular/shared/types";

export class EquipmentInServiceHistoryColumnDefinition extends BaseColumnDefinition {
  constructor(visiibleCols?: string[]) {
    super();

    this.columns = [
      new DataColumn('id', { allowSearch: false }),
      new DataColumn('equipmentID', { allowSearch: false }),
      new DataColumn('equipment.name', { caption: 'Equipment' }),
      new DataColumn('dateChanged', { caption: 'Date', dataType: 'date' }),
      new DataColumn('dateStatusChanged', { caption: 'Date', dataType: 'date', width: 120 }),
      new DataColumn('inService', { caption: 'Status', trueText: 'In Service', falseText: 'Out Of Service', width: 120 }),
      new DataColumn('userName', { caption: 'User' }),
      new DataColumn('comment')
    ];

    if (visiibleCols) {
      this.setVisibility(visiibleCols);
    }
  }
}
