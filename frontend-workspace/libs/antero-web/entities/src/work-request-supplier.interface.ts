import { Nullable } from "@allmax-angular/shared/types";
import { Supplier } from "./supplier.interface";
import { WorkRequest } from "./work-request.interface";

export interface WorkRequestSupplier {
  id: number;
  workRequestID: number;
  workRequest: Nullable<WorkRequest>;
  supplierID: number;
  supplier: Nullable<Supplier>;
  invoice: Nullable<string>;
  partCost: number;
  laborCost: number;
  miscCost: number;
  taxCost: number;
}