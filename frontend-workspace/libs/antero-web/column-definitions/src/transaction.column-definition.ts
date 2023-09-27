import { BaseColumnDefinition, DataColumn } from "@allmax-angular/shared/types";

export class TransactionColumnDefintion extends BaseColumnDefinition {
  constructor(visibleCols?: string[]) {
    super();

    this.columns = [
      new DataColumn('id'),
      new DataColumn('transactionDate', { dataType: 'date' }),
      new DataColumn('supplierID'),
      new DataColumn('supplier'),
      new DataColumn('invoiceNumber'),
      new DataColumn('userID'),
      new DataColumn('user.fullName'),
      new DataColumn('comment'),
      new DataColumn('costOfGoods'),
    ];

    if (visibleCols) {
      this.setVisibility(visibleCols);
    }
  }
}