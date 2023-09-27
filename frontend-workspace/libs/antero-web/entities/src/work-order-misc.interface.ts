import { Nullable } from "@allmax-angular/shared/types";
import { WorkOrder } from "./work-order.interface";

export interface WorkOrderMisc {
  id: number;
  workOrderID: number;
  workOrder: Nullable<WorkOrder>;
  description: Nullable<string>;
  cost: number;
}