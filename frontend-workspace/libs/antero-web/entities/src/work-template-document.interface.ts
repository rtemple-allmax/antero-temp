import { Nullable } from "@allmax-angular/shared/types";
import { Document } from "./document.interface";
import { WorkTemplate } from "./work-template.interface";

export interface WorkTemplateDocument {
  id: number;
  workTemplateID: number;
  workTemplate: Nullable<WorkTemplate>;
  documentID: number;
  document: Nullable<Document>;
}