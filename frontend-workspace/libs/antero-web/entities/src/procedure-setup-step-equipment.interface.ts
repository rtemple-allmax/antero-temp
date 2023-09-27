import { Nullable } from "@allmax-angular/shared/types";
import { Equipment } from "./equipment.interface";
import { ProcedureSetupStep } from "./procedure-setup-step.interface";

export interface ProcedureSetupStepEquipment {
  id: number;
  procedureSetupStepID: number;
  procedureSetupStep: Nullable<ProcedureSetupStep>;
  equipmentID: number;
  equipment: Nullable<Equipment>;
}