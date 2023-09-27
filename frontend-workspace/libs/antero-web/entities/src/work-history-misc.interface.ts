import { Nullable } from "@allmax-angular/shared/types";
import { WorkHistory } from "./work-history.interface";

export interface WorkHistoryMisc {
  id: number;
  workHistoryID: number;
  workHistory: Nullable<WorkHistory>;
  description: Nullable<string>;
  cost: number;
}