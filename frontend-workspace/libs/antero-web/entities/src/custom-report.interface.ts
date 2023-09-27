import { Nullable } from "@allmax-angular/shared/types";

export interface CustomReport {
  id: number;
  baseReport: Nullable<string>;
  inUse: boolean;
}