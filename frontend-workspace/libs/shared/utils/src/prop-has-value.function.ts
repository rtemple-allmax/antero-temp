import { isNullOrEmpty } from "./is-null-or-empty.function";

export const propHasValue = (parent: any, propName: string, allowZero: boolean = true): boolean => {
  return parent ? !isNullOrEmpty(parent[propName], allowZero) : false;
}