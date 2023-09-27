import { Nullable } from "@allmax-angular/shared/types";
import { Equipment } from "./equipment.interface";
import { MaintenanceGroup } from "./maintenance-group.interface";
import { Task } from "./task.interface";
import { User } from "./user.interface";
import { WorkPriority } from "./work-priority.interface";
import { WorkStatus } from "./work-status.interface";
import { WorkTemplate } from "./work-template.interface";
import { WorkType } from "./work-type.interface";

export interface WorkOrder {
  [key: string]: any;
  
  id: number;
  equipmentID: number;
  equipment: Nullable<Equipment>;
  taskID: number;
  task: Nullable<Task>;
  instructions: Nullable<string>;
  workOrderNumber: number;
  maintenanceGroupID: Nullable<number>;
  maintenanceGroup: Nullable<MaintenanceGroup>;
  assignedUserID: Nullable<number>;
  assignedUser: Nullable<User>;
  workTemplateID: Nullable<number>;
  workTemplate: Nullable<WorkTemplate>;
  workPriorityID: Nullable<number>;
  workPriority: Nullable<WorkPriority>;
  workTypeID: Nullable<number>;
  workType: Nullable<WorkType>;
  dateScheduled: Nullable<Date>;
  dateCreated: Nullable<Date>;
  dateCompleted: Nullable<Date>;
  daysToComplete: Nullable<number>;
  completedByID: Nullable<number>;
  completedBy: Nullable<User>;
  createReason: Nullable<string>;
  workOrderState: any;
  workStatusID: Nullable<number>;
  workStatus: Nullable<WorkStatus>;
  needsAttention: boolean;
  needsAttentionText: Nullable<string>;
  downtimeStart: Nullable<Date>;
  downtimeEnd: Nullable<Date>;
  completedNotes: Nullable<string>;
  dueDate: Nullable<Date>;
  isDue: boolean;
  isComplete: boolean;
  dateLastCompleted: Nullable<Date>;
  estimatedHours: Nullable<number>;
  remainingRequiredInstrumentsCount: number;
  checklist: Array<{ 
    id: number,
    label: string,
    order: number,
    state: boolean,
    workOrderID?: number,
    workOrder?: Nullable<WorkOrder>,
    workHistoryID?: number
  }>;
}