import { BaseColumnDefinition, DataColumn } from "@allmax-angular/shared/types";

export class WorkOrderSupplierColumnDefintition extends BaseColumnDefinition {
  constructor(visibleCols?: string[]) {
    super();

    this.columns = [
      new DataColumn('id', { allowSearch: false }),
      new DataColumn('workOrderID', { allowSearch: false }),
      new DataColumn('workOrder'),
      new DataColumn('supplierID', { allowSearch: false }),
      new DataColumn('supplier.name', { caption: 'Name' }),
      new DataColumn('invoice', { caption: 'Invoice Number' }),
      new DataColumn('partCost', { format: { type: 'currency', precision: 2 } }),
      new DataColumn('laborCost', { format: { type: 'currency', precision: 2 } }),
      new DataColumn('miscCost', { format: { type: 'currency', precision: 2 } }),
      new DataColumn('taxCost', { format: { type: 'currency', precision: 2 } })
    ];

    if (visibleCols) {
      this.setVisibility(visibleCols);
    }
  }
}