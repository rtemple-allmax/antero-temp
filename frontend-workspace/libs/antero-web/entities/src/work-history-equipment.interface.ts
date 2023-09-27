import { Nullable } from "@allmax-angular/shared/types";
import { WorkHistory } from "./work-history.interface";

export interface WorkHistoryEquipment {
  id: number;
  workHistoryID: number;
  workHistory: Nullable<WorkHistory>;
  equipment: Nullable<string>;
  equipmentDescription: Nullable<string>;
  estimatedQuantity: number;
  actualQuantity: number;
  workOrderRate: number;
  workOrderUnits: Nullable<string>;
}