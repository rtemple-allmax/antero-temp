import { Nullable } from "@allmax-angular/shared/types";

export interface Task {
  id: number;
  name: Nullable<string>;
  instructions: Nullable<string>;
  instructionsString?: Nullable<string>;
  manualOnly: boolean;
  checklist: Array<{ label: string, state: boolean }>;
  templateCount: number;
}