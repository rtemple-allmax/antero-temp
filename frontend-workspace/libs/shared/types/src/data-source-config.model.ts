// import { AmxDateRange } from './date-range.model';

import { HistoryTimeFrames, TimeFrameTypes } from "@allmax-angular/shared/utils";
import { Nullable } from "./nullable.type";

export interface ExcludeExpression {
  excludedType: string;
  excludedIDs: number[];
}

export interface IncludeExpression {
  navigationProperties: string[];
}

export interface SortExpression {
  selector: string;
  desc?: boolean;
}

export interface DataSourceConfig {
  customQueryParams?: any;
  deleteUrl?: string;
  excludeData?: ExcludeExpression;
  filter?: any;
  getUrl: string;
  getOneUrl?: string;
  group?: any;
  includeData?: IncludeExpression;
  loadMode?: string;
  key: string;
  expand?: string[];
  map?: (item: any) => any;
  onChangedHandler?: () => void;
  onInsertedHandler?: (values: any, key: string) => void;
  onInsertingHandler?: (values: any) => void;
  onLoadedHandler?: (result: any[]) => void;
  onLoadErrorHandler?: (err: Error) => void;
  onLoadingChangedHandler?: (isLoading: boolean) => void;
  onLoadingHandler?: (loadOptions: any) => void;
  onModifiedHandler?: () => void;
  onModifyingHandler?: () => void;
  onPushHandler?: (changes: any[]) => void;
  onRemovedHandler?: (key: string) => void;
  onRemovingHandler?: (key: string) => void;
  onUpdatedHandler?: (key: string, values: any) => void;
  onUpdatingHandler?: (key: string, values: any) => void;
  errorHandler?: (err: any) => void;
  pageSize?: number;
  paginate?: boolean;
  postProccessHandler?: (data: any[]) => any[];
  postUrl?: string;
  pushAggregationTimeout?: number;
  requireTotalCount?: boolean;
  reshapeOnPush?: boolean;
  searchExpr?: string | string[];
  searchOperation?: string;
  searchValue?: any;
  select?: any;
  sort?: SortExpression[];
  totalCount?: (loadOptions: any) => Promise<number>;
  updateUrl?: string;
  includeRetired?: boolean;
  dateStart?: Nullable<Date>;
  dateEnd?: Nullable<Date>;
  timeFrame?: TimeFrameTypes;
  historyTimeFrame?: HistoryTimeFrames;
  // dateRange?: AmxDateRange;
  workFilter?: any;
  procedureFilter?: any;
  take?: any;
}