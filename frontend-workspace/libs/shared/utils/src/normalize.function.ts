export const normalize = (value: number, min: number, max: number): number => {
  if (max <= min) { throw new Error('Max must exceed min') }
  return (value - min) / (max - min);
};