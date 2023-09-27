import { BaseColumnDefinition, DataColumn } from "@allmax-angular/shared/types";

export class LaborAccountColumnDefinition extends BaseColumnDefinition {
  constructor(visibleCols?: string[]) {
    super();

    this.columns = [
      new DataColumn('id', { allowSearch: false }),
      new DataColumn('name', { sortOrder: 'asc' })
    ];

    if (visibleCols) {
      this.setVisibility(visibleCols);
    }
  }
}