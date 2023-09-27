import { Nullable } from "@allmax-angular/shared/types";
import { WorkHistory } from "./work-history.interface";

export interface WorkHistoryDocument {
  id: number;
  workHistoryID: number;
  workHistory: Nullable<WorkHistory>;
  documentID: number;
  document: Nullable<Document>;
}