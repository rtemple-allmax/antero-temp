import { Nullable } from "@allmax-angular/shared/types";
import { Document } from "./document.interface";
import { WorkRequest } from "./work-request.interface";

export interface WorkRequestDocument {
  id: number;
  workRequestID: number;
  workRequest: Nullable<WorkRequest>;
  documentID: number;
  document: Nullable<Document>;
}