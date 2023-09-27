export const isValidEmail = (value: any): boolean => {
  const rx = new RegExp(/^([\w.-]+)@([\w-]+)((\.(\w){2,3})+)$/);
  return rx.test(value);
};