import { Nullable } from "@allmax-angular/shared/types";
import { Role } from "./role.interface";

export interface User {
  id: number;
  name: Nullable<string>;
  displayName: Nullable<string>;
  username: Nullable<string>;
  fullName: Nullable<string>;
  description: Nullable<string>;
  primaryEmail: Nullable<string>;
  primaryPhone: Nullable<string>;
  contact1: Nullable<string>;
  contact1Type: Nullable<string>;
  contact2: Nullable<string>;
  contact2Type: Nullable<string>;
  contact3: Nullable<string>;
  contact3Type: Nullable<string>;
  contact4: Nullable<string>;
  contact4Type: Nullable<string>;
  comment: Nullable<string>;
  isDBAdmin: boolean;
  isSetupToolsUser: boolean;
  roles: Role[];
}