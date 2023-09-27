import { Nullable } from "@allmax-angular/shared/types";
import { User } from "./user.interface";

export interface Note {
  id: number;
  userID: number;
  user: Nullable<User>;
  noteDate: Nullable<Date> ;
  noteText: Nullable<string>;
}