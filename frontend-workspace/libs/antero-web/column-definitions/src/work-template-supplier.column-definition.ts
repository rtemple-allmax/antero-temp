import { BaseColumnDefinition, DataColumn } from "@allmax-angular/shared/types";

export class WorkTemplateSupplierColumnDefinitiion extends BaseColumnDefinition {
  constructor(visibleCols?: string[]) {
    super();

    this.columns = [
      new DataColumn('id', { allowSearch: false }),
      new DataColumn('workTemplateID', { allowSearch: false }),
      new DataColumn('workTemplate'),
      new DataColumn('supplierID', { allowSearch: false }),
      new DataColumn('supplier.name', { caption: 'Name' }),
      new DataColumn('invoice', { caption: 'Invoice Number' }),
      new DataColumn('partCost', { format: { type: 'currency', precision: 2 } }),
      new DataColumn('laborCost', { format: { type: 'currency', precision: 2 } }),
      new DataColumn('miscCost', { format: { type: 'currency', precision: 2 } }),
      new DataColumn('taxCost', { format: { type: 'currency', precision: 2 } }),
      new DataColumn('totalCost', { format: { type: 'currency', precision: 2 } })
    ];

    if (visibleCols) {
      this.setVisibility(visibleCols);
    }
  }
}