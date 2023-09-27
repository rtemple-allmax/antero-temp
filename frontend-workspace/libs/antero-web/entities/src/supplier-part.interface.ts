import { Nullable } from "@allmax-angular/shared/types";
import { Part } from "./part.interface";
import { Supplier } from "./supplier.interface";

export interface SupplierPart {
  id: number;
  supplierID: number;
  supplier: Nullable<Supplier>;
  partID: number;
  part: Nullable<Part>;
  itemNumber: Nullable<string>;
  itemDescription: Nullable<string>;
  unit: Nullable<string>;
  lastReceivedCost: number;
  lastReceivedDate: Nullable<Date>;
  isPrimary: boolean;
}