import { BaseColumnDefinition, DataColumn } from "@allmax-angular/shared/types";

export class EquipmentActivityColumnDefinition extends BaseColumnDefinition {
  constructor(visibleCols?: string[]) {
    super();

    this.columns = [
      new DataColumn('id', { allowSearch: false }),
      new DataColumn('actionDescription', { cellTemplate: 'cellTemplate' }),
      new DataColumn('dateTime', { dataType: 'datetime' }),
      new DataColumn('primaryValue'),
      new DataColumn('secondaryValue'),
      new DataColumn('username')
    ];

    if (visibleCols) {
      this.setVisibility(visibleCols);
    }
  }
}