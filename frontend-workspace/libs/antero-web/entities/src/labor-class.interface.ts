import { Nullable } from "@allmax-angular/shared/types";

export interface LaborClass {
  id: number;
  name: Nullable<string>;
  rate: Nullable<number>;
}