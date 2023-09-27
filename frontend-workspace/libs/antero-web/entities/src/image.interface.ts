import { Nullable } from "@allmax-angular/shared/types";

export interface Image {
  id: number;
  fileName: Nullable<string>;
  addedBy: Nullable<string>;
  dateAdded: Nullable<Date>;
}