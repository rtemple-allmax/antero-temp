import { Nullable } from "@allmax-angular/shared/types";
import { LaborAccount } from "./labor-account.interface";
import { LaborClass } from "./labor-class.interface";
import { LaborType } from "./labor-type.interface";
import { WorkTemplate } from "./work-template.interface";

export interface WorkTemplateLabor {
  id: number;
  workTemplateID: number;
  workTemplate: Nullable<WorkTemplate>;
  laborClassID: number;
  laborClass: Nullable<LaborClass>;
  laborAccountID: number;
  laborAccount: Nullable<LaborAccount>;
  laborTypeID: number;
  laborType: Nullable<LaborType>;
  estimatedHours: number;
}