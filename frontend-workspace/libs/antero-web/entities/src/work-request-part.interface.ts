import { Nullable } from "@allmax-angular/shared/types";
import { PartQuantity } from "./part-quantity.interface";
import { WorkRequest } from "./work-request.interface";

export interface WorkRequestPart {
  id: number;
  workRequestID: number;
  workRequest: Nullable<WorkRequest>;
  partQuantityID: number;
  partQuantity: Nullable<PartQuantity>;
  unit: Nullable<string>;
  estimatedQuantity: number;
  actualQuantity: number;
  cost: number;
}