import { BaseColumnDefinition, DataColumn } from "@allmax-angular/shared/types";

export class WorkHistoryPartColumnDefinition extends BaseColumnDefinition {
  constructor(visibleCols?: string[]) {
    super();

    this.columns = [
      new DataColumn('id', { allowSearch: false }),
      new DataColumn('workHistoryID', { allowSearch: false }),
      new DataColumn('workHistory.workOrderNumber', { caption: 'WO#' }),
      new DataColumn('workHistory.dateCompleted', { caption: 'Date Completed' }),
      new DataColumn('workHistory.equipment.name', { caption: 'Equipment' }),
      new DataColumn('workHistory.task', { caption: 'Task' }),
      new DataColumn('workHistory.worktype', { caption: 'Type' }),
      new DataColumn('workHistory.workPriority', { caption: 'Priority' }),
      new DataColumn('part'),
      new DataColumn('partDescription'),
      new DataColumn('warehouse'),
      new DataColumn('area'),
      new DataColumn('unit'),
      new DataColumn('estimatedQuantity'),
      new DataColumn('actualQuantity'),
      new DataColumn('cost'),
      new DataColumn('updated'),
    ];

    if (visibleCols) {
      this.setVisibility(visibleCols);
    }
  }
}