import { Nullable } from "@allmax-angular/shared/types";
import { ProcedureSetup } from "./procedure-setup.interface";

export interface ProcedureSetupStep {
  id: number;
  procedureSetupID: number;
  procedureSetup: Nullable<ProcedureSetup>;
  stepOrder: number;
  name: Nullable<string>;
  instructions: Nullable<string>;
}