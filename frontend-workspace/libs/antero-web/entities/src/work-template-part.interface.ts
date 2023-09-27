import { Nullable } from "@allmax-angular/shared/types";
import { PartQuantity } from "./part-quantity.interface";
import { WorkTemplate } from "./work-template.interface";

export interface WorkTemplatePart {
  id: number;
  workTemplateID: number;
  workTemplate: Nullable<WorkTemplate>;
  partQuantityID: number;
  partQuantity: Nullable<PartQuantity>;
  estimatedQuantity: number;
}