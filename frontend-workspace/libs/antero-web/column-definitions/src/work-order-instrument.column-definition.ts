import { BaseColumnDefinition, DataColumn } from "@allmax-angular/shared/types"

export class WorkOrderInstrumentColumnDefinition extends BaseColumnDefinition {
  constructor(visibleCols?: string[]) {
    super();

    this.columns = [
      new DataColumn('id', { allowSearch: false }),
      new DataColumn('workOrderID', { allowSearch: false }),
      new DataColumn('instrumentID', { allowSearch: false }),
      new DataColumn('instrument.name'),
      new DataColumn('instrument.units'),
      new DataColumn('isRequired'),
      new DataColumn('reading')
    ];

    if (visibleCols) {
      this.setVisibility(visibleCols);
    }
  }
}