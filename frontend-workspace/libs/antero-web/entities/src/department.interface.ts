import { Nullable } from "@allmax-angular/shared/types";

export interface Department {
  id: number;
  name: Nullable<string>;
  selected: boolean;
}