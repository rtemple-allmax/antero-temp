import { Nullable } from "@allmax-angular/shared/types";
import { WorkRequest } from "./work-request.interface";

export interface WorkRequestInstrument {
  id: number;
  workRequestID: number;
  workRequest: Nullable<WorkRequest>;
  instrument: Nullable<string>;
  reading: number;
  units: Nullable<string>;
}