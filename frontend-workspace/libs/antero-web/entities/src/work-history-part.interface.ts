import { Nullable } from "@allmax-angular/shared/types";
import { WorkHistory } from "./work-history.interface";

export interface WorkHistoryPart {
  id: number;
  workHistoryID: number;
  workHistory: Nullable<WorkHistory>;
  part: Nullable<string>;
  partDescription: Nullable<string>;
  warehouse: Nullable<string>;
  area: Nullable<string>;
  unit: Nullable<string>;
  estimatedQuantity: number;
  actualQuantity: number;
  cost: number;
}