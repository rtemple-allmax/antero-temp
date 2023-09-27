import { Nullable } from "@allmax-angular/shared/types";
import { Role } from "./role.interface";
import { User } from "./user.interface";

export interface UserSecurity {
  id: number;
  userID: number;
  user: Nullable<User>;
  roleID: number;
  role: Nullable<Role>;
}