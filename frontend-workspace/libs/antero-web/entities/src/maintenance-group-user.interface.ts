import { Nullable } from "@allmax-angular/shared/types";
import { MaintenanceGroup } from "./maintenance-group.interface";
import { User } from "./user.interface";

export interface MaintenanceGroupUser {
  id: number;
  maintenanceGroupID: number;
  maintenanceGroup: Nullable<MaintenanceGroup>;
  userID: number;
  user: Nullable<User>;
}