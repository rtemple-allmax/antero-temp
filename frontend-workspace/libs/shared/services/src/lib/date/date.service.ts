import { Injectable } from '@angular/core';
import * as luxon from 'luxon';

@Injectable({ providedIn: 'root' })
export class DateService {
  public now(): Date {
    return luxon.DateTime.now().toJSDate();
  }

  public today(): Date {
    return luxon.DateTime.now().set({ hour: 0, minute: 0, second: 0, millisecond: 0 }).toJSDate();
  }

  public beforeToday(length: number): Date {
    return luxon.DateTime.now().set({ hour: 0, minute: 0, second: 0, millisecond: 0 }).minus({ days: length }).toJSDate();
  }

  public afterToday(length: number): Date {
    return luxon.DateTime.now().set({ hour: 0, minute: 0, second: 0, millisecond: 0 }).plus({ days: length }).toJSDate();
  }

  public startOfMonth(): Date {
    return luxon.DateTime.now().set({ hour: 0, minute: 0, second: 0, millisecond: 0 }).startOf('month').toJSDate();
  }

  public endOfMonth(): Date {
    return luxon.DateTime.now().set({ hour: 0, minute: 0, second: 0, millisecond: 0 }).endOf('month').toJSDate();
  }

  public startOfWeek(): Date {
    return luxon.DateTime.now().set({ hour: 0, minute: 0, second: 0, millisecond: 0 }).startOf('week').toJSDate();
  }

  public endOfWeek(): Date {
    return luxon.DateTime.now().set({ hour: 0, minute: 0, second: 0, millisecond: 0 }).endOf('week').toJSDate();
  }
}
