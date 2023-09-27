import { Nullable } from "@allmax-angular/shared/types";
import { MaintenanceGroup } from "./maintenance-group.interface";
import { User } from "./user.interface";

export interface Procedure {
  id: number;
  procedureNumber: number;
  dateScheduled: Nullable<Date>;
  name: Nullable<string>;
  procedureSetupID: number;
  maintenanceGroupID: number;
  maintenanceGroup: Nullable<MaintenanceGroup>;
  daysToComplete: number;
  estimatedHours: number;
  isCompleted: boolean;
  dateCompleted: Nullable<Date>;
  completedByID: number;
  completedBy: Nullable<User>;
  actualHours: number;
  isDue: boolean;
  dueDate: Nullable<Date>;
}