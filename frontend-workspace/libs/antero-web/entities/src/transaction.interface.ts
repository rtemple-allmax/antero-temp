import { Nullable } from "@allmax-angular/shared/types";
import { Supplier } from "./supplier.interface";
import { User } from "./user.interface";

export interface Transaction {
  id: number;
  transactionDate: Nullable<Date>;
  supplierID: number;
  supplier: Nullable<Supplier>;
  invoiceNumber: Nullable<string>;
  userID: number;
  user: Nullable<User>;
  comment: Nullable<string>;
  costOfGoods: number;
}