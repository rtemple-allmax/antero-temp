import { Nullable } from "@allmax-angular/shared/types";
import { MemorizedReportGroup } from "./memorized-report-group.interface";

export interface MemorizedReport {
  id: number;
  reportFile: Nullable<string>;
  name: Nullable<string>;
  description: Nullable<string>;
  memorizedReportGroupID: number;
  memorizedReportGroup: Nullable<MemorizedReportGroup>;
  parameterValues: Uint8Array;
}