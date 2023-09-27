import { BaseColumnDefinition, DataColumn } from "@allmax-angular/shared/types";

export class TransactionDataColumnDefinition extends BaseColumnDefinition {
  constructor(visibleCols?: string[]) {
    super();

    this.columns = [
      new DataColumn('transaction.id'),
      new DataColumn('transaction.transactionDate', { dataType: 'date' }),
      new DataColumn('transaction.supplierID'),
      new DataColumn('transaction.supplier'),
      new DataColumn('transaction.invoiceNumber'),
      new DataColumn('transaction.userID'),
      new DataColumn('transaction.user.fullName'),
      new DataColumn('transaction.comment'),
      new DataColumn('transaction.costOfGoods'),
    ];

    if (visibleCols) {
      this.setVisibility(visibleCols);
    }
  }
}