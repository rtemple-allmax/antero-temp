import { Nullable } from "@allmax-angular/shared/types";
// import { Warehouse } from "./warehouse.interface";

export interface Area {
  id: number;
  warehouseID: number;
  warehouse: any;
  name: Nullable<string>;
}