// import { WorkScheduleTypes } from "@allmax-angular/antero-web/types";
import { Nullable } from "@allmax-angular/shared/types";
import { Equipment } from "./equipment.interface";
import { MaintenanceGroup } from "./maintenance-group.interface";
import { Task } from "./task.interface";
import { WorkPriority } from "./work-priority.interface";
import { WorkType } from "./work-type.interface";

export interface WorkTemplate {
  id: number;
  equipmentID: number;
  equipment: Nullable<Equipment>;
  taskID: number;
  task: Nullable<Task>;
  isEnabled: boolean;
  workTypeID: number;
  workType: Nullable<WorkType>;
  workPriorityID: number;
  workPriority: Nullable<WorkPriority>;
  daysToComplete: number;
  maintenanceGroupID: number;
  maintenanceGroup: Nullable<MaintenanceGroup>;
  dateLastScheduled: Nullable<Date>;
  dateLastCompleted: Nullable<Date>;
  workScheduleType: any;
  inServiceEnabled: boolean;
  inServiceDays: number;
  byDayOfWeek: boolean;
  daysOfWeek: number;
  months: number;
  weeks: number;
  dates: number;
  datesLast: boolean;
  outOfServiceDays: number;
  nextForecastDate: Nullable<Date>;
}