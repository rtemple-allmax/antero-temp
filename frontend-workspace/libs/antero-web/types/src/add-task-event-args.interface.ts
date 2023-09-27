import { ChecklistItem } from "./check-list-item.interface";

export interface AddTaskEventArgs {
  id: number;
  name: string;
  instructions: string;
  manual: boolean;
  templateCount: number;
  checklist?: ChecklistItem[];
}