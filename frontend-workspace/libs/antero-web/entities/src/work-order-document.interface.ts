import { Nullable } from "@allmax-angular/shared/types";
import { Document } from "./document.interface";
import { WorkOrder } from "./work-order.interface";

export interface WorkOrderDocument {
  id: number;
  workOrderID: number;
  workOrder: Nullable<WorkOrder>;
  documentID: number;
  document: Nullable<Document>;
}