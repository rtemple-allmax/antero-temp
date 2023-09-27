export enum MyDataFieldTypes {
  VALUE,
  OBJECT,
  DATE,
  DATETIME,
  CURRENCY
}

export interface MyDataField {
  label: string;
  propName: string;
  type: MyDataFieldTypes;
  formatted: boolean;
  order: number;
  displayExpr?: string;
}