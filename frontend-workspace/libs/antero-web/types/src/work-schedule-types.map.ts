import { WorkScheduleTypes } from "./work-schedule-types.enum";

export const workScheduleTypesToLabelsMap: Map<WorkScheduleTypes, string> = new Map<WorkScheduleTypes, string>([
  [WorkScheduleTypes.CALENDAR, 'Calendar'],
  [WorkScheduleTypes.IN_SERVICE_AND_INSTRUMENT, 'Days In Service / Instrument'],
  [WorkScheduleTypes.OUT_OF_SERVICE, 'Out Of Service']
]);