import { BaseColumnDefinition, DataColumn } from "@allmax-angular/shared/types";

export class WorkHistoryEquipmentColumnDefinition extends BaseColumnDefinition {
  constructor(visibleCols?: string[]) {
    super();

    this.columns = [
      new DataColumn('id', { allowSearch: false }),
      new DataColumn('workHistoryID', { allowSearch: false }),
      new DataColumn('equipment'),
      new DataColumn('equipmentDescription'),
      new DataColumn('estimatedQuantity'),
      new DataColumn('actualQuantity'),
      new DataColumn('workOrderRate', { caption: 'Rate' }),
      new DataColumn('workOrderUnit', { caption: 'Units' })
    ];

    if (visibleCols) {
      this.setVisibility(visibleCols);
    }
  }
}