import { Nullable } from "@allmax-angular/shared/types";
import { Area } from "./area.interface";
import { Part } from "./part.interface";
import { Warehouse } from "./warehouse.interface";

export interface PartQuantity {
  id: number;
  partID: number;
  part: Nullable<Part>;
  warehouseID: number;
  warehouse: Nullable<Warehouse>;
  areaID: Nullable<number>;
  area: Nullable<Area>;
  currentQuantity: number;
  minimumQuantity: Nullable<number>;
  maximumQuantity: Nullable<number>;
  unitCost: Nullable<number>;
  totalOnOrder: number;
  totalOnWorkOrder: number;
}