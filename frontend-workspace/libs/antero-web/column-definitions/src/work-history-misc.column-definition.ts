import { BaseColumnDefinition, DataColumn } from "@allmax-angular/shared/types";

export class WorkHistoryMiscColumnDefinition extends BaseColumnDefinition {
  constructor(visibleCols?: string[]) {
    super();

    this.columns = [
      new DataColumn('id', { allowSearch: false }),
      new DataColumn('workHistoryID', { allowSearch: false }),
      new DataColumn('description', { allowEditing: true }),
      new DataColumn('cost', { format: { type: 'currency', precision: 2 } })
    ];

    if (visibleCols) {
      this.setVisibility(visibleCols);
    }
  }
}