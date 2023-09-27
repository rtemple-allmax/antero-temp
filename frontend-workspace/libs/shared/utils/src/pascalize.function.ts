export const pascalize = (value: string): string => {
  let result = '';
  if (value.includes('.')) {
    const split = value.split('.')
    const segments: string[] = [];
    for (let i = 0; i < split.length; i++) {
      segments[i] = split[i].charAt(0).toUpperCase() + split[i].slice(1)
    }
    result = segments.join('.');
  } else if (value === 'id') {
    result = value.toUpperCase();
  } else {
    result = value.charAt(0).toUpperCase() + value.slice(1);
  }

  return result;
}