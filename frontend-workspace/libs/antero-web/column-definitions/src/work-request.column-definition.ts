import { BaseColumnDefinition, DataColumn } from "@allmax-angular/shared/types";

export class WorkRequestColumnDefinition extends BaseColumnDefinition {
  constructor(visibleCols?: string[]) {
    super();

    this.columns = [
      new DataColumn('id'),
      new DataColumn('dateSubmitted', { dataType: 'date' }),
      new DataColumn('lastUpdated', { dataType: 'date' }),
      new DataColumn('status'),
      new DataColumn('submitterName'),
      new DataColumn('aDUserName'),
      new DataColumn('itemToRepair', { caption: 'Equipment' }),
      new DataColumn('equipmentID'),
      new DataColumn('itemLocation', { caption: 'Location' }),
      new DataColumn('statusInfo'),
      new DataColumn('submitterPhone'),
      new DataColumn('submitterEmail'),
      new DataColumn('issue'),
      new DataColumn('workOrderID'),
    ];

    if (visibleCols) {
      this.setVisibility(visibleCols);
    }
  }
}