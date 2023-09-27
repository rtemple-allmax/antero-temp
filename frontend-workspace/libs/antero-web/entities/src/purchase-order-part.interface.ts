import { Nullable } from "@allmax-angular/shared/types";
import { PartQuantity } from "./part-quantity.interface";
import { PurchaseOrder } from "./purchase-order.interface";

export interface PurchaseOrderPart {
  id: number;
  purchaseOrderID: number;
  purchaseOrder: Nullable<PurchaseOrder>;
  partQuantityID: number;
  partQuantity: Nullable<PartQuantity>;
  itemNumber: Nullable<string>;
  orderUnit: Nullable<string>;
  quantityOrdered: number;
  quantityReceived: number;
  conversionFactor: number;
  unitCost: number;
  fullyReceived: boolean;
  currentReceiveQuantity: number;
}