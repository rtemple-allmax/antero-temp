import { Nullable } from "@allmax-angular/shared/types";
import { Equipment } from "./equipment.interface";
import { ProcedureStep } from "./procedure-step.interface";

export interface ProcedureStepEquipment {
  id: number;
  procedureStepID: number;
  procedureStep: Nullable<ProcedureStep>;
  equipmentID: number;
  equipment: Nullable<Equipment>;
}