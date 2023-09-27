import { Nullable } from "@allmax-angular/shared/types";
import { WorkRequest } from "./work-request.interface";

export interface WorkRequestMisc {
  id: number;
  workRequestID: number;
  workRequest: Nullable<WorkRequest>;
  description: Nullable<string>;
  cost: number;
}