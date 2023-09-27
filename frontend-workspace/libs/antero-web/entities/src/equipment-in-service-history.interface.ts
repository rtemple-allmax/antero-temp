import { Nullable } from "@allmax-angular/shared/types";
import { Equipment } from "./equipment.interface";

export interface EquipmentInServiceHistory {
  id: number;
  equipmentID: number;
  equipment: Nullable<Equipment>;
  dateChanged: Nullable<Date>; // when i press the button
  dateStatusChanged: Nullable<Date>; // when status actually changed
  inService: boolean;
  userName: Nullable<string>;
  comment: Nullable<string>;
}