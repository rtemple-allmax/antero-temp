export const insert = (arr: any[], i: number, ...items: any) => {
  return [
    ...arr.slice(0, i),
    ...items,
    ...arr.slice(i)
];
}