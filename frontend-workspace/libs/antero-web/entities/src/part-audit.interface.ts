import { Nullable } from "@allmax-angular/shared/types";

export interface PartAudit {
  id: number;
  dateTimeRecorded: Nullable<Date>;
  eventDateTime: Nullable<Date>;
  eventSource: any;
  partName: Nullable<string>;
  partDescription: Nullable<string>;
  warehouseName: Nullable<string>;
  areaName: Nullable<string>;
  quantityChange: number;
  userName: Nullable<string>;
  description: Nullable<string>;
}