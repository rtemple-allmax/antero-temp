import { WorkOrder } from "@allmax-angular/antero-web/entities";
import { Nullable } from "@allmax-angular/shared/types";

export interface ChecklistItem {
  id: number;
  label: string;
  order: number;
  state: boolean;
  workOrderID?: number;
  workOrder?: Nullable<WorkOrder>;
  workHistoryID?: number;
}