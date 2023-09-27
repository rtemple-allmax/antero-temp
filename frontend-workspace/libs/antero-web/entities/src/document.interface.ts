import { Nullable } from "@allmax-angular/shared/types";

export interface Document {
  id: number;
  name: Nullable<string>;
  extension: Nullable<string>;
  fileType: Nullable<string>;
  modifiedBy: Nullable<string>;
  dateModified: Nullable<Date>;
  fileName: Nullable<string>;
}