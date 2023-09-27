import { Nullable } from "@allmax-angular/shared/types";
import { PartQuantity } from "./part-quantity.interface";
import { PurchaseOrder } from "./purchase-order.interface";
import { Transaction } from "./transaction.interface";

export interface TransactionDetail {
  id: number;
  transactionID: number;
  transaction: Nullable<Transaction>;
  partQuantityID: number;
  partQuantity: Nullable<PartQuantity>;
  purchaseOrderID: number;
  purchaseOrder: Nullable<PurchaseOrder>;
  orderedUnits: Nullable<string>;
  itemNumber: Nullable<string>;
  unitCost: number;
  quantityReceived: number;
  quantityExpected: number;
  totalCost: number;
}