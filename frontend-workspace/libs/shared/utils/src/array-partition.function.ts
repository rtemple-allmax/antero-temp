export const partitionArray = (arr: any[], validate: (e: any, idx: number, arr: any[]) => boolean): [ any[], any[] ] => {
  const pass: any[] = []
  const fail: any[] = [];
  arr.forEach((e, idx, arr) => (validate(e, idx, arr) ? pass : fail).push(e));
  return [pass, fail];
};