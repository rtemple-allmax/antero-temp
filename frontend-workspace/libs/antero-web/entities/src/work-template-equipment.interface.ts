import { Nullable } from "@allmax-angular/shared/types";
import { Equipment } from "./equipment.interface";
import { WorkTemplate } from "./work-template.interface";

export interface WorkTemplateEquipment {
  id: number;
  workTemplateID: number;
  workTemplate: Nullable<WorkTemplate>;
  equipmentID: number;
  equipment: Nullable<Equipment>;
  estimatedQuantity: number;
}