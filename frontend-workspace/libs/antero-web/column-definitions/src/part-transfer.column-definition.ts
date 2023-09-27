import { BaseColumnDefinition, DataColumn } from "@allmax-angular/shared/types";

export class PartTransferColumnDefinition extends BaseColumnDefinition {
  constructor(visibleColumns?: string[]) {
    super();
    this.columns = [
      new DataColumn('id', { allowSearch: false }),
      new DataColumn('dateCreated', { dataType: 'date' }),
      new DataColumn('dateTransferred', { dataType: 'date' }),
      new DataColumn('partName'),
      new DataColumn('partDescription'),
      new DataColumn('quantity'),
      new DataColumn('partName'),
      new DataColumn('sourceWarehouse'),
      new DataColumn('sourceArea'),
      new DataColumn('destinationWarehouse'),
      new DataColumn('destinationArea'),
      new DataColumn('units'),
      new DataColumn('unitCost'),
      new DataColumn('userName'),
      new DataColumn('comment'),
    ];

    if (visibleColumns) {
      this.setVisibility(visibleColumns);
    }
  }
}