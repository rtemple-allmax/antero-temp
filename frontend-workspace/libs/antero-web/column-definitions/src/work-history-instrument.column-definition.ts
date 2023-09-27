import { BaseColumnDefinition, DataColumn } from "@allmax-angular/shared/types";

export class WorkHistoryInstrumentColumnDefinition extends BaseColumnDefinition {
  constructor(visibleCols?: string[]) {
    super();

    this.columns = [
      new DataColumn('id', { allowSearch: false }),
      new DataColumn('workHistoryID', { allowSearch: false }),
      new DataColumn('instrumentID', { allowSearch: false }),
      new DataColumn('instrument'),
      new DataColumn('units'),
      new DataColumn('reading')
    ];

    if (visibleCols) {
      this.setVisibility(visibleCols);
    }
  }
}