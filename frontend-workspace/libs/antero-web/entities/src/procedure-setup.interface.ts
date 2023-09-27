import { Nullable } from "@allmax-angular/shared/types";
import { MaintenanceGroup } from "./maintenance-group.interface";

export interface ProcedureSetup {
  id: number;
  name: Nullable<string>;
  dateLastScheduled: Nullable<Date>;
  maintenanceGroupID: number;
  maintenanceGroup: Nullable<MaintenanceGroup>;
  daysToComplete: number;
  estimatedHours: number;
  isScheduled: boolean;
  byDayOfWeek: boolean;
  daysOfWeek: number;
  months: number;
  weeks: number;
  dates: number;
  datesLast: boolean;
}