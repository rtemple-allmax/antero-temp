// import { WorkRequestStatuses } from "@allmax-angular/antero-web/types";
import { Nullable } from "@allmax-angular/shared/types";

export interface WorkRequest {
  id: number;
  dateSubmitted: Nullable<Date>;
  lastUpdated: Nullable<Date>;
  status: any;
  submitterName: Nullable<string>;
  aDUserName: Nullable<string>;
  itemToRepair: Nullable<string>;
  equipmentID: number;
  itemLocation: Nullable<string>;
  statusInfo: Nullable<string>;
  submitterPhone: Nullable<string>;
  submitterEmail: Nullable<string>;
  issue: Nullable<string>;
  workOrderID: number;
}