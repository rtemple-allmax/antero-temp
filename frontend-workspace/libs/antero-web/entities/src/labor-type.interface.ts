import { Nullable } from "@allmax-angular/shared/types";

export interface LaborType {
  id: number;
  name: Nullable<string>;
  multiplier: number;
}