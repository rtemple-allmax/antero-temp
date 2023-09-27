import { Nullable } from "@allmax-angular/shared/types";
import { WorkHistory } from "./work-history.interface";

export interface WorkHistoryLabor {
  id: number;
  workHistoryID: number;
  workHistory: Nullable<WorkHistory>;
  laborClass: Nullable<string>;
  rate: number;
  laborAccount: Nullable<string>;
  laborType: Nullable<string>;
  multiplier: number;
  user: Nullable<string>;
  estimatedHours: number;
  actualHours: number;
}