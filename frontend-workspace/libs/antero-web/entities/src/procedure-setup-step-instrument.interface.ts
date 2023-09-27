import { Nullable } from "@allmax-angular/shared/types";
import { Instrument } from "./instrument.interface";
import { ProcedureSetupStep } from "./procedure-setup-step.interface";

export interface ProcedureSetupStepInstrument {
  id: number;
  procedureSetupStepID: number;
  procedureSetupStep: Nullable<ProcedureSetupStep>;
  instrumentID: number;
  instrument: Nullable<Instrument>;
}