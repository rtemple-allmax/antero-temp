import DataSource from "devextreme/data/data_source";
import { BaseColumnDefinition } from "./base-column-definition.model";
import { Nullable } from "./nullable.type";

export interface TableData {
  data: Nullable<DataSource>;
  colDef: BaseColumnDefinition;
}