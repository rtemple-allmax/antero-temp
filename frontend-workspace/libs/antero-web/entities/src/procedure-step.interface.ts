import { Nullable } from "@allmax-angular/shared/types";
import { Procedure } from "./procedure.interface";

export interface ProcedureStep {
  id: number;
  procedureID: number;
  procedure: Nullable<Procedure>;
  stepOrder: number;
  name: Nullable<string>;
  instructions: Nullable<string>;
  isComplete: boolean;
  needsFollowUp: boolean;
  completionNotes: Nullable<string>;
}