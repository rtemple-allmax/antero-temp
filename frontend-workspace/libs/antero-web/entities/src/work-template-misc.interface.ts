import { Nullable } from "@allmax-angular/shared/types";
import { WorkTemplate } from "./work-template.interface";

export interface WorkTemplateMisc {
  id: number;
  workTemplateID: number;
  workTemplate: Nullable<WorkTemplate>;
  description: Nullable<string>;
  cost: number;
}