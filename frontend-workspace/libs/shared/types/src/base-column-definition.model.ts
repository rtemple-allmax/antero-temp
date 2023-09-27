import { Nullable } from "./nullable.type";

export interface IDataColumnOptions {
  [key: string]: any;
  alignment?: string;
  allowEditing?: boolean;
  allowExporting?: boolean;
  allowFiltering?: boolean;
  allowFixing?: boolean;
  allowGrouping?: boolean;
  allowHeaderFiltering?: boolean;
  allowHiding?: boolean;
  allowReordering?: boolean;
  allowResizing?: boolean;
  allowSearch?: boolean;
  allowSorting?: boolean;
  autoExpandGroup?: boolean;
  buttons?: Array<any>;
  calculateCellValue?: (rowData: any) => any;
  calculateDisplayValue?: ((rowData: any) => any) | string;
  calculateFilterExpression?: (filterValue: any, selectedFilterOperation: string, target: string) => any;
  calculateGroupValue?: ((rowData: any) => any) | string;
  calculateSortValue?: ((rowData: any) => any) | string;
  caption?: string;
  cellTemplate?: string;
  cssClass?: string;
  customizeText?: (cellInfo: any) => string;
  dataField?: string;
  dataType?: string;
  editCellTemplate?: string;
  editorOptions?: any;
  encodeHtml?: boolean;
  falseText?: string;
  filterOperations?: Array<string>;
  filterType?: string;
  filterValue?: any;
  filterValues?: Array<string>;
  fixed?: boolean;
  fixedPosition?: string;
  format?: ((val: any) => string) | string | object;
  formItem?: any;
  groupCellTemplate?: string;
  groupIndex?: Nullable<number>;
  headerCellTemplate?: any;
  headerFilter?: any;
  hidingPriority?: number;
  isBand?: boolean;
  lookup?: any;
  minWidth?: number;
  name?: string;
  ownerBand?: number;
  renderAsync?: boolean;
  selectedFilterOperation?: string;
  setCellValue?: (newData: any, value: any, currentRowData: any) => Promise<void>;
  showEditorAlways?: boolean;
  showInColumnChooser?: boolean;
  showWhenGrouped?: boolean;
  sortIndex?: number;
  sortingMethod?: (value1: any, value2: any) => number;
  sortOrder?: string;
  trueText?: string;
  type?: string;
  validationRules?: Array<any>;
  visible?: boolean;
  visibleIndex?: number;
  width?: number | string;
  icon?: any;
  iconColor?: string;
  text?: string;
  showIcon?: (arg: any) => boolean;
  bgColor?: (arg: any) => string;
  fgColor?: (arg: any) => string;
}

export class Column {
  public type = '';
  public width = '';
}

export class DataColumn {
  [key: string]: any
  public dataField = '';
  public visible = false;
  public visibleIndex = -1;
  public groupIndex = -1;
  public allowSearch = true;
  public allowFiltering = true;
  public allowEditing =  false;
  public showEditorAlways = false;

  constructor(dataField: string,  options: IDataColumnOptions = {}) {
    this.dataField = dataField;
    if (options) {
      const keys = Object.keys(options);
      keys.forEach(key => this[key] = options[key]);
    }
  }

  public updateOptions(options: IDataColumnOptions): void {
    const keys = Object.keys(options);
    keys.forEach(key => this[key] = options[key]);
  }
}

export class BaseColumnDefinition {
  public columns: any[] = [];

  // protected filterOperations: FilterOperations[] = [ 
  //   FilterOperations.STARTS_WITH,
  //   FilterOperations.CONTAINS,
  //   FilterOperations.EQUALS
  //  ];

  // protected selectedFilterOpertaion: FilterOperations = FilterOperations.STARTS_WITH;

  public get first(): Nullable<DataColumn> {
    if (this.columns.length > 0) {
      return this.columns[0];
    }
    return null;
  }

  public get firstVisible(): Nullable<DataColumn> {
    const col = this.columns.find(x => x.visibleIndex === 0);
    return col ? col : null;
  }

  public get last(): Nullable<DataColumn> {
    if (this.columns.length > 0) {
      return this.columns[this.columns.length - 1];
    }
    return null;
  }

  // constructor(filterOperation?: FilterOperations) {
  //   if (isNullOrEmpty(filterOperation)) { return; }
  //   this.selectedFilterOpertaion = filterOperation;
  // }

  public findByDataField(name: string): Nullable<DataColumn> {
    const col = this.columns.find(x => x.dataField === name);
    return col ? col : null;
  }

  // protected generateHeaderFilter(): any {
  //   return {
  //     dataSource: data => {
  //       data.dataSource.postProcess = results => {
  //         for (const item of results) {
  //           item.text = !item.value ? item.text : item.value.name ? item.value.name : item.value;
  //         }
  //         return results;
  //       };
  //     }
  //   };
  // }

  protected setVisibility(visibleColumns: string[]): void {
    visibleColumns.forEach((x, i) => {
      const col = this.columns.find(y => y.dataField === x);
      if (!col) { return; }
      col.visible = true;
      col.allowSearch = col.visible;
      col.visibleIndex = i;
    });
  }

  // protected setFilterOperation(op: FilterOperations): void {
  //   this.columns.forEach(col => {
  //     col.updateOptions({ filterOperations: this.filterOperations, selectedFilterOperation: op });
  //   });
  // }
    
}

export enum FilterOperations {
  STARTS_WITH = 'startswith',
  CONTAINS = 'contains',
  EQUALS = '=',
}

export interface ColumnChangePayload {
  index: number;
  visibility: boolean;
}