import { BaseColumnDefinition, DataColumn } from "@allmax-angular/shared/types";

export class PartAuditColumnDefinition extends BaseColumnDefinition {
  constructor(visibleCols?: string[]) {
    super();

    this.columns = [
      new DataColumn('id', { allowSearch: false }),
      new DataColumn('dateTimeRecorded', { dataType: 'date' }),
      new DataColumn('eventDateTime', { dataType: 'date' }),
      new DataColumn('eventSource'),
      new DataColumn('partName'),
      new DataColumn('partDescription'),
      new DataColumn('warehouseName'),
      new DataColumn('areaName'),
      new DataColumn('quantityChange'),
      new DataColumn('userName'),
      new DataColumn('description'),
    ];

    if (visibleCols) {
      this.setVisibility(visibleCols);
    }
  }
}