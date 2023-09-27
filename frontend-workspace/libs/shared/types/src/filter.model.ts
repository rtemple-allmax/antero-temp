export class Filter {
  public type = '';
  public values: any[] = [];
  public selectedKeys: any[] = [];
  public keyExpr = '';

  constructor(type: string, values: any[], keyExpr = 'id') {
    this.type = type;
    this.values = values;
    this.keyExpr = keyExpr;
  }
}