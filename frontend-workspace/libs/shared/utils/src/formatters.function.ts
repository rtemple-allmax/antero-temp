export const numberToCurrencyFormatter = (val: number) => {
  if (!val || val === 0) { return ''; }
  const formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
  return formatter.format(val);
}