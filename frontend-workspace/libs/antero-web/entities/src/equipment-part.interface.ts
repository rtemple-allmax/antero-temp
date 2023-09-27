import { Nullable } from "@allmax-angular/shared/types";
import { Equipment } from "./equipment.interface";
import { Part } from "./part.interface";

export interface EquipmentPart {
  id: number;
  equipmentID: number;
  equipment: Nullable<Equipment>;
  partID: number;
  part: Nullable<Part>;
  comment: Nullable<string>;
  totalQuantity: number;
}