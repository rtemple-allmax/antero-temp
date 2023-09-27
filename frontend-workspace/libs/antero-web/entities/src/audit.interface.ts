// import { AuditActionTypes, SectionTypes } from "@allmax-angular/antero-web/types";
import { Nullable } from "@allmax-angular/shared/types";

export interface Audit {
  id: number;
  dateTime: Nullable<Date>;
  userName: Nullable<string>;
  appName: Nullable<string>;
  deviceID: Nullable<string>;
  anteroSection: any;
  actionType: any;
  actionDescription: Nullable<string>;
  primaryValue: Nullable<string>;
  primaryValueExt: Nullable<string>;
  secondaryValue: Nullable<string>;
  secondaryValueExt: Nullable<string>;
}