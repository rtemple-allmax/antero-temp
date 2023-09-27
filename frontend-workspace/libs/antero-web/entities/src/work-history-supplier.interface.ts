import { Nullable } from "@allmax-angular/shared/types";
import { WorkHistory } from "./work-history.interface";

export interface WorkHistorySupplier {
  id: number;
  workHistoryID: number;
  workHistory: Nullable<WorkHistory>;
  supplier: Nullable<string>;
  invoice: Nullable<string>;
  partCost: number;
  laborCost: number;
  miscCost: number;
  taxCost: number;
}