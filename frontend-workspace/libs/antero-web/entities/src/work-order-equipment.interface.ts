import { Nullable } from "@allmax-angular/shared/types";
import { Equipment } from "./equipment.interface";
import { WorkOrder } from "./work-order.interface";

export interface WorkOrderEquipment {
  id: number;
  workOrderID: number;
  workOrder: Nullable<WorkOrder>;
  equipmentID: number;
  equipment: Nullable<Equipment>;
  estimatedQuantity: number;
  actualQuantity: number;
  workOrderRate: number;
  workOrderUnit: Nullable<string>;
}