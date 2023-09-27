export const isValidWebAddress = (value: any): boolean => {
  if (typeof value === 'string') {
    const rx = new RegExp('^(((ht|f)tp(s?))://)?(www.|[a-zA-Z].)[a-zA-Z0-9-.]+.(com|edu|gov|mil|net|co|org|biz|info|name|museum|us|ca|uk|me|eu)(:[0-9]+)*(/($|[a-zA-Z0-9.,;?\'\\+&amp;%$#=~_-]+))*$');
    return rx.test(value);
  }
  return false;
};