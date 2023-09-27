import { Nullable } from "@allmax-angular/shared/types";
import { Equipment } from "./equipment.interface";
import { Image } from "./image.interface";

export interface EquipmentImage {
  id: number;
  equipmentID: number;
  equipment: Nullable<Equipment>;
  imageID: number;
  image: Nullable<Image>;
  order?: number;
}