import { CrudFunctions } from "./crud.enum";
import { Nullable } from "./nullable.type";

export interface NamedItem {
  name: string;
}

export class ValidationData<T> {
  public original: Nullable<NamedItem>;
  public newValue: Nullable<T>;
  public crud: CrudFunctions = CrudFunctions.READ;
  public query: Nullable<ValidationQueryData>;

  constructor(original: Nullable<NamedItem>, newValue: any, crud: CrudFunctions, query: ValidationQueryData) {
    this.original = original;
    this.newValue = newValue;
    this.crud = crud;
    this.query = query;
  }
}

export interface ValidationQueryData {
  model: string;
  columns: string[],
  values: any[];
}