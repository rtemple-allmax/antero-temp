import { SectionTypes } from "./section-types.enum";

export interface UserPreferences {
  showWorkOrderReviewPrompt: boolean;
  showWorkOrderHistoryPrompt: boolean;
  showProcedureHistoryPrompt: boolean;
  showCompleteOrderPrompt: boolean;
}