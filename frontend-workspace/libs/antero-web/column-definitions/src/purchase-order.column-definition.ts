import { BaseColumnDefinition, DataColumn } from "@allmax-angular/shared/types";

export class PurchaseOrderColumnDefinition extends BaseColumnDefinition {
  constructor(visibleCols?: string[]) {
    super();

    this.columns = [
      new DataColumn('id', { allowSearch: false }),
      new DataColumn('orderDate', { dataType: 'date' }),
      new DataColumn('supplierID', { allowSearch: false }),
      new DataColumn('isClosed'),
      new DataColumn('supplier'),
      new DataColumn('purchaseOrderNumber', { caption: 'Order Number' }),
      new DataColumn('requistionNumber'),
      new DataColumn('shippingMethod'),
      new DataColumn('notToExceed'),
      new DataColumn('dateCreated'),
      new DataColumn('dateNeededBy', { dataType: 'date' }),
      new DataColumn('createdByID', { allowSearch: false }),
      new DataColumn('createdBy'),
      new DataColumn('shipping'),
      new DataColumn('tax'),
      new DataColumn('misc'),
      new DataColumn('shippingActual'),
      new DataColumn('taxActual'),
      new DataColumn('miscActual'),
      new DataColumn('accountNumber'),
      new DataColumn('billToAddress'),
      new DataColumn('shipToAddress'),
      new DataColumn('notes'),
      new DataColumn('fullyReceived'),
      new DataColumn('estimatedPartsTotalCost'),
      new DataColumn('estimatedTotalCost'),
      new DataColumn('actualPartsTotalCost'),
      new DataColumn('actualTotalCost'),
    ];

    if (visibleCols) {
      this.setVisibility(visibleCols);
    }
  }
}
