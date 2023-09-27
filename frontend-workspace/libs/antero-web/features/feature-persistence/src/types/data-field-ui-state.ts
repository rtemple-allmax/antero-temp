export enum DataFieldTypes {
  VALUE,
  OBJECT,
  DATE,
  DATETIME,
  CURRENCY,
  FORMATTED
}

export class DataFieldUIState {
  [key: string]: any;
  public propName = '';
  public visible = 1;
  public favorite = 0;
  public orderInSource = -1;
  public orderInFavorites = -1;
  public label = '';
  public type =  DataFieldTypes.VALUE;
  public displayExpr?: string;

  constructor(propName: string, type: DataFieldTypes, label: string, displayExpr?: string) {
    this.label = label;
    this.propName = propName;
    this.type = type;
    this.displayExpr = displayExpr;
  }
}
