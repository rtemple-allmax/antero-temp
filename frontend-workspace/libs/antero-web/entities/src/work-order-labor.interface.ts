import { Nullable } from "@allmax-angular/shared/types";
import { LaborAccount } from "./labor-account.interface";
import { LaborClass } from "./labor-class.interface";
import { LaborType } from "./labor-type.interface";
import { User } from "./user.interface";
import { WorkOrder } from "./work-order.interface";

export interface WorkOrderLabor {
  id: number;
  workOrderID: number;
  workOrder: Nullable<WorkOrder>;
  laborClassID: number;
  laborClass: Nullable<LaborClass>;
  laborAccountID: number;
  laborAccount: Nullable<LaborAccount>;
  userID: number;
  user: Nullable<User>;
  laborTypeID: number;
  laborType: Nullable<LaborType>;
  estimatedHours: number;
  actualHours: number;
}