import { Nullable } from "@allmax-angular/shared/types";
import { Image } from "./image.interface";
import { Part } from "./part.interface";

export interface PartImage {
  id: number;
  partID: number;
  part: Nullable<Part>;
  imageID: number;
  image: Nullable<Image>;
  order?: number ;
}