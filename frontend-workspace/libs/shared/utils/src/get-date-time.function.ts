import { DateTime } from "luxon"

export const getDateTime = (src: Date | string | null | undefined): DateTime | null => {
  if (!src) { return null; }
  if (src instanceof Date) {
    return DateTime.fromJSDate(src);
  } else if (typeof src === 'string') {
    return DateTime.fromISO(src);
  } else {
    return null;
  }
}