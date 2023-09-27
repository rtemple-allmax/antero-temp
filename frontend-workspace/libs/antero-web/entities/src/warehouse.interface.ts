import { Nullable } from "@allmax-angular/shared/types";
// import { Area } from "./area.interface";

export interface Warehouse {
  id: number;
  name: Nullable<string>;
  areas: any[];
}