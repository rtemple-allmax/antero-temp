import { Nullable } from "@allmax-angular/shared/types";
import { Supplier } from "./supplier.interface";
import { User } from "./user.interface";

export interface PurchaseOrder {
  id: number;
  orderDate: Nullable<Date>;
  supplierID: number;
  isClosed: boolean;
  supplier: Nullable<Supplier>;
  purchaseOrderNumber: Nullable<string>;
  requistionNumber: Nullable<string>;
  shippingMethod: Nullable<string>;
  notToExceed: number;
  dateCreated: Nullable<Date>;
  dateNeededBy: Nullable<Date>;
  createdByID: number;
  createdBy: Nullable<User>;
  shipping: number;
  tax: number;
  misc: number;
  shippingActual: number;
  taxActual: number;
  miscActual: number;
  accountNumber: Nullable<string>;
  billToAddress: Nullable<string>;
  shipToAddress: Nullable<string>;
  notes: Nullable<string>;
  fullyReceived: boolean;
  estimatedPartsTotalCost: number;
  estimatedTotalCost: number;
  actualPartsTotalCost: number;
  actualTotalCost: number;
}