import { Nullable } from "@allmax-angular/shared/types";
import { Instrument } from "./instrument.interface";
import { Reading } from "./reading.interface";
import { WorkTemplate } from "./work-template.interface";

export interface WorkTemplateInstrument {
  id: number;
  workTemplateID: number;
  workTemplate: Nullable<WorkTemplate>;
  instrumentID: number;
  instrument: Nullable<Instrument>;
  isRequired: boolean;
  minimum: number;
  maximum: number;
  interval: number;
  lastCompletedReading: number;
  latestReading: Nullable<Reading>;
  usage: number;
}