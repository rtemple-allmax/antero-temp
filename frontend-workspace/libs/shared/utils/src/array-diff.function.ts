export interface ArrayDiff {
  removed: Array<{ id: number }>;
  added: Array<{ id: number }>;
}

export const arrayDiff = (prev: Array<{ id: number }>, next: Array<{ id: number }>): ArrayDiff => {
  const diff1 = prev.filter(x => !(next.find(y => y.id === x.id)));
  const diff2 = next.filter(x => !(prev.find(y => y.id === x.id)));

  return { removed: diff1, added: diff2 };
}