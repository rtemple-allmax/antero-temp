import { Nullable } from "@allmax-angular/shared/types";
import { Instrument } from "./instrument.interface";
import { ProcedureStep } from "./procedure-step.interface";

export interface ProcedureStepInstrument {
  id: number;
  procedureStepID: number;
  procedureStep: Nullable<ProcedureStep>;
  instrumentID: number;
  instrument: Nullable<Instrument>,
  reading: Nullable<number>;
}    