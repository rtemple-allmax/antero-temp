import { HistoryTimeFrames, TimeFrameTypes } from "@allmax-angular/shared/utils";

export interface TimeFrameParams {
  timeFrameType: TimeFrameTypes;
  historyTimeFrame?: HistoryTimeFrames;
  dateStart?: Date;
  dateEnd?: Date; 
}