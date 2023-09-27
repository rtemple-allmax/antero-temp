import { Nullable } from "@allmax-angular/shared/types";
import { Document } from "./document.interface";

export interface StandardForm {
  id: number;
  documentID: number;
  document: Nullable<Document>;
}