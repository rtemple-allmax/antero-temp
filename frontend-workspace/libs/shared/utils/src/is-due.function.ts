import { DateTime } from "luxon";
import { getDateTime } from "./get-date-time.function";
import { isNullOrEmpty } from "./is-null-or-empty.function";

export const isDue = (
  dateScheduled: Date | string | null | undefined,
  daysToComplete: number = 0
): boolean => {
  if (!isNullOrEmpty(dateScheduled) && daysToComplete > 0) {
    const scheduledDate = getDateTime(dateScheduled);
    if (DateTime.isDateTime(scheduledDate)) {
      const dueDate = scheduledDate.plus({ days: daysToComplete });
      if (dueDate) {
        const today = DateTime.local();
        return dueDate < today;
      }
      return false;
    }
    return false;
  }
  return false;
}