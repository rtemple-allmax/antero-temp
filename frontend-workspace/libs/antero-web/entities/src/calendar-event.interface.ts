import { Nullable } from "@allmax-angular/shared/types";
import { CalendarEventAttendee } from "./calendar-event-attendee.interface";

export interface CalendarEvent {
  id: number;
  subject: Nullable<string>;
  startDate: Nullable<Date>;
  endDate: Nullable<Date>;
  allDayEvent: boolean;
  privateEvent: boolean;
  description: Nullable<string>;
  attendees: CalendarEventAttendee[];
}