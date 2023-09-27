import { Nullable } from "@allmax-angular/shared/types";
import { Equipment } from "./equipment.interface";
import { WorkRequest } from "./work-request.interface";

export interface WorkRequestEquipment {
  id: number;
  workRequestID: number;
  workRequest: Nullable<WorkRequest>;
  equipmentID: number;
  equipment: Nullable<Equipment>;
  estimatedQuantity: number;
  actualQuantity: number;
  workOrderRate: number;
  workOrderUnit: Nullable<string>;
}