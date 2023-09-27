import { Nullable } from "@allmax-angular/shared/types";
import { Equipment } from "./equipment.interface";
import { ProcedureSetupStep } from "./procedure-setup-step.interface";
import { Task } from "./task.interface";

export interface ProcedureSetupStepWorkOrder {
  id: number;
  procedureSetupStepID: number;
  procedureSetupStep: Nullable<ProcedureSetupStep>;
  equipmentID: number;
  equipment: Nullable<Equipment>;
  taskID: number;
  task: Nullable<Task>;
}