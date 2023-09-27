import { Nullable } from "@allmax-angular/shared/types";

export interface PartTransfer {
  id: number;
  dateCreated: Nullable<Date>;
  dateTransferred: Nullable<Date>;
  partName: Nullable<string>;
  partDescription: Nullable<string>;
  quantity: number;
  sourceWarehouse: Nullable<string>;
  sourceArea: Nullable<string>;
  destinationWarehouse: Nullable<string>;
  destinationArea: Nullable<string>;
  units: Nullable<string>;
  unitCost: number;
  userName: Nullable<string>;
  comment: Nullable<string>;
}