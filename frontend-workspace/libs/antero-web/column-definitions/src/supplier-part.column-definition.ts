import { BaseColumnDefinition, DataColumn } from "@allmax-angular/shared/types";

export class SupplierPartColumnDefinition extends BaseColumnDefinition {
  constructor(visibleCols?: string[]) {
    super();

    this.columns = [
      new DataColumn('id', { allowSearch: false }),
      new DataColumn('supplierID', { allowSearch: false }),
      new DataColumn('supplier.name', { caption: 'Name' }),
      new DataColumn('part.name', { caption: 'Name' }),
      new DataColumn('part.description'),
      new DataColumn('part.stockingUnit'),
      new DataColumn('itemNumber'),
      new DataColumn('itemDescription'),
      new DataColumn('lastReceivedDate'),
      new DataColumn('lastReceivedCost'),
      new DataColumn('isPrimary', { caption: 'Primary' }),
    ];

    if (visibleCols) {
      this.setVisibility(visibleCols);
    }
  }
}