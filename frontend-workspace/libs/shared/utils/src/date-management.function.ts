
const isDateValid = (date: Date): boolean => {
  return date && date.getTime && !isNaN(date.getTime());
};

const getDateFromTimestamp = (timestamp: string): Date | null => {
  if (timestamp === null || timestamp === undefined) {
    return null;
  }
  const date = new Date(timestamp);
  return isDateValid(date) ? date : null;
};

export const getDateTimeString = (date: Date | string): string => {
  if (date instanceof Date) {
    const dateString = date.toLocaleDateString();
    const timeString = date.toLocaleTimeString([], { hour: 'numeric', minute:'2-digit' });
    return `${dateString}, ${timeString}`;
  } else {
    return getDateTimeStringFromTimestamp(date);
  }
};

export const getDateTimeStringFromTimestamp = (timestamp: string): string => {
  if (timestamp === null || timestamp === undefined) {
    return '';
  }
  const date = new Date(timestamp);
  if (date) {
    const dateString = date.toLocaleDateString();
    const timeString = date.toLocaleTimeString([], { hour: 'numeric', minute:'2-digit' });
    return `${dateString}, ${timeString}`;
  } else {
    return '';
  }
};

export const getDateString = (date: Date | string): string => {
  if (date instanceof Date) {
    return date.toLocaleDateString();
  } else if (typeof date === 'string') {
    const d = getDateFromTimestamp(date);
    return !!d && d instanceof Date ? d.toLocaleDateString() : '';
  }
  return '';
};



