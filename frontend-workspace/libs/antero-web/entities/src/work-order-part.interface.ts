import { Nullable } from "@allmax-angular/shared/types";
import { PartQuantity } from "./part-quantity.interface";
import { WorkOrder } from "./work-order.interface";

export interface WorkOrderPart {
  id: number;
  workOrderID: number;
  workOrder: Nullable<WorkOrder>;
  partQuantityID: number;
  partQuantity: Nullable<PartQuantity>;
  unit: Nullable<string>;
  estimatedQuantity: number;
  actualQuantity: number;
  cost: number;
}