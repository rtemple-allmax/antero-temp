import { Nullable } from "@allmax-angular/shared/types";
import { Document } from "./document.interface";
import { Equipment } from "./equipment.interface";

export interface EquipmentDocument {
  id: number;
  equipmentID: number;
  equipment: Nullable<Equipment>;
  documentID: number;
  document: Nullable<Document>;
}