import { Nullable } from "@allmax-angular/shared/types";
import { Supplier } from "./supplier.interface";
import { WorkOrder } from "./work-order.interface";

export interface WorkOrderSupplier {
  id: number;
  workOrderID: number;
  workOrder: Nullable<WorkOrder>;
  supplierID: number;
  supplier: Nullable<Supplier>;
  invoice: Nullable<string>;
  partCost: number;
  laborCost: number;
  miscCost: number;
  taxCost: number;
}