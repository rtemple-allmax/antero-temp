import { Nullable } from "@allmax-angular/shared/types";
import { CalendarEvent } from "./calendar-event.interface";
import { User } from "./user.interface";

export interface CalendarEventAttendee {
  id: number;
  calendarEventID: number;
  calendarEvent: Nullable<CalendarEvent>;
  attendeeID: number;
  attendee: Nullable<User>;
  isCreator: boolean;
}