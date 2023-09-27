import { Nullable } from "@allmax-angular/shared/types";
import { WorkHistory } from "./work-history.interface";

export interface WorkHistoryInstrument {
  id: number;
  workHistoryID: number;
  workHistory: Nullable<WorkHistory>;
  instrument: Nullable<string>;
  reading: number;
  units: Nullable<string>;
}