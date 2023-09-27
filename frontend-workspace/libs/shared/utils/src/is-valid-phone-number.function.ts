export const isValidPhoneNumber = (value: any): boolean => {
  if (typeof value === 'string') {
    const rx = new RegExp(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/);
    return rx.test(value);
  }
  return false;
};