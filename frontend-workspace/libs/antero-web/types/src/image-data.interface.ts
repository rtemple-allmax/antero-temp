import { Nullable } from "@allmax-angular/shared/types";

export interface ImageData {
  parentID: number;
  imageID: number;
  sharedID: number;
  isPrimary: boolean;
  order: number;
  imageUrl: Nullable<string>;
  thumbnailUrl: Nullable<string>;
  hydrated: boolean;
}