import { Nullable } from "@allmax-angular/shared/types";
import { Equipment } from "./equipment.interface";

export interface WorkHistory {
  id: number;
  equipmentID: number;
  equipment: Nullable<Equipment>;
  task: Nullable<string>;
  instructions: string;
  workOrderNumber: number;
  workStatus: Nullable<string>;
  maintenanceGroup: Nullable<string>;
  assignedUser: Nullable<string>;
  workPriority: Nullable<string>;
  workType: Nullable<string>;
  needsAttentionText: Nullable<string>;
  dateScheduled: Nullable<Date>;
  dateCreated: Nullable<Date>;
  dateCompleted: Nullable<Date>;
  dateDelinquent: Nullable<Date>;
  completedBy: Nullable<string>;
  createReason: Nullable<string>;
  createReasonText: Nullable<string>;
  downtimeStart: Nullable<Date>;
  downtimeEnd: Nullable<Date>;
  completedNotes: Nullable<string>;
}