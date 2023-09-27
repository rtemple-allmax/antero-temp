import { PartQuantity } from "@allmax-angular/antero-web/entities";
import { ImageData } from "./image-data.interface";

export interface PartData {
  id: number;
  comment: string;
  equipmentID: number;
  partID: number;
  equipmentPartID: number;
  partName: string;
  partPrimaryImage: ImageData;
  stockLocations: PartQuantity[];
  totalQuantity: number;
  units: string;
}