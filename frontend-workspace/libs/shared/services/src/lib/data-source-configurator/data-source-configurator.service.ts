import { HttpClient, HttpErrorResponse, HttpParams, HttpResponse } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';

import CustomStore from 'devextreme/data/custom_store';
import DataSource from 'devextreme/data/data_source';

import { LocalStorageKeys } from '@allmax-angular/antero-web/types';
import { DataSourceConfig, Nullable } from '@allmax-angular/shared/types';
import { isNullOrEmpty } from '@allmax-angular/shared/utils';
import { FetchService } from '../fetch/fetch.service';
import ArrayStore from 'devextreme/data/array_store';

@Injectable({ providedIn: 'root' })
export class DataSourceConfiguratorService {
  private possibleLoadOptions = [
    'filter',
    'group',
    'groupSummary',
    'parentIds',
    'requireGroupCount',
    'requireTotalCount',
    'searchExpr',
    'searchOperation',
    'searchValue',
    'select',
    'sort',
    'skip',
    'take',
    'totalSummary',
    'userData'
  ];

  private baseUrl = '';

  public error = new EventEmitter<any>();

  constructor(private http: HttpClient, private fetch: FetchService) { }

  public initialize(baseUrl: string): void {
    this.baseUrl = baseUrl;
    this.fetch.initialize(this.baseUrl);
  }

  public create(config: DataSourceConfig): DataSource {
    const token = localStorage.getItem(LocalStorageKeys.TOKEN) || '';
    const db = localStorage.getItem(LocalStorageKeys.DATABASE) || '999999_2';

    const getPath = `${ this.baseUrl }${ config.getUrl }`;

    const storeOptions: any = {};
    const dsOptions: any = {};

    storeOptions.errorHandler = (err: any) => {
      if (config.errorHandler) {
        config.errorHandler(err);
      }
    };

    if (!isNullOrEmpty(config.customQueryParams)) {
      dsOptions.customQueryParams = config.customQueryParams;
    }

    if (!isNullOrEmpty(config.loadMode)) {
      storeOptions.loadMode = config.loadMode;
    }

    if (!isNullOrEmpty(config.deleteUrl)) {
      storeOptions.remove = async (key: any) => {
        const path = `${ this.baseUrl }${ this.buildUrl(config.deleteUrl, key) }`;
        let res: Nullable<HttpResponse<any>> = null;

        try {
          res = await this.http.delete<any>(path).toPromise();
        } catch (err) {
          if (config.errorHandler) {
            config.errorHandler(err);
          }
        }
        return res;
      };
    }

    if (!isNullOrEmpty(config.filter)) {
      dsOptions.filter = config.filter;
    }

    storeOptions.load = async (loadOptions: any) => {
      const path = `${this.baseUrl}${ config.getUrl }`;
      let hparams = new HttpParams();

      // if (!isNullOrEmpty(loadOptions.searchOperation)) {
      //   loadOptions?.filter?.forEach((x: any) => {
      //     if (Array.isArray(x) && x.length > 1) {
      //       x[1] = loadOptions.searchOperation;    
      //     }
      //   });
      // }

      for (const opt of this.possibleLoadOptions) {
        if (opt in loadOptions && !isNullOrEmpty(loadOptions[opt])) {
          hparams = hparams.append(opt, JSON.stringify(loadOptions[opt]));
        }
      }

      if (config.includeData) {
        hparams = hparams.append('includeData',  config.includeData.navigationProperties.join(','));
      }

      if (config.expand) {
        hparams = hparams.append('expand',  config.expand.join(','));
      }

      if (config.excludeData) {
        hparams = hparams.append('excludedType', config.excludeData.excludedType);
        hparams = hparams.append('excludedIDs', config.excludeData.excludedIDs.join(','));
      }

      if (config.timeFrame) {
        hparams = hparams.append('timeFrame', config.timeFrame);
      }

      if (config.historyTimeFrame) {
        hparams = hparams.append('historyTimeFrame', config.historyTimeFrame);
      }

      if (config.dateStart) {
        hparams = hparams.append('dateStart', config.dateStart.toJSON());
      }

      if (config.dateEnd) {
        hparams = hparams.append('dateEnd', config.dateEnd.toJSON());
      }

      if (config.sort) {
        if (hparams.has('sort')) {
          hparams = hparams.set('sort', JSON.stringify(config.sort));
        } else {
          hparams = hparams.append('sort', JSON.stringify(config.sort));
        }
      }

      if (config.includeRetired) {
        hparams = hparams.append('includeRetired', JSON.stringify(config.includeRetired));
      }

      if (config.workFilter) {
        hparams = hparams.append('allWork', JSON.stringify(config.workFilter.allWork));
        hparams = hparams.append('myMaintenanceGroups', JSON.stringify(config.workFilter.myMaintenanceGroups));
      }

      if (config.procedureFilter) {
        hparams = hparams.append('allProcedures', JSON.stringify(config.procedureFilter.allProcedures));
      }

      if (!isNullOrEmpty(config.take)) {
        if (hparams.has('take')) {
          hparams = hparams.set('take', JSON.stringify(config.take));
        } else {
          hparams = hparams.append('take', JSON.stringify(config.take));
        }
      }

      hparams = hparams.set('requireTotalCount', true);

      let res: any = null;

      try {
        res = await this.http.get(path, { params: hparams }).toPromise();
      } catch (err: any) {
        if (config.errorHandler) {
          config.errorHandler(err);
        }
      }

      // console.log('load res', res)

      return res;
    };
    
    if (!isNullOrEmpty(config.getOneUrl)) {
      storeOptions.byKey = async (key: any) => {
        // TODO: is isNaN safe to use here?. This assumes that the key will always be an id (numeric).
        if (isNullOrEmpty(key) || isNaN(key)) { return null; }
        let hparams = new HttpParams();

        if (config.includeData) {
          hparams = hparams.append('includeData',  config.includeData.navigationProperties.join(','));
        }

        const path = `${ this.baseUrl }${ this.buildUrl(config.getOneUrl, key) }`;
        let res: any = null;

        try {
          res = await this.http.get(path, { params: hparams }).toPromise();
        } catch (err) {
          if (config.errorHandler) {
            config.errorHandler(err);
          }
        }

        return res;
      };
    }

    if (!isNullOrEmpty(config.group)) {
      dsOptions.group = config.group;
    }

    storeOptions.key = config.key;

    if (!isNullOrEmpty(config.map)) {
      dsOptions.map = config.map;
    }

    if (!isNullOrEmpty(config.onChangedHandler)) {
      dsOptions.onChanged = config.onChangedHandler;
    }

    if (!isNullOrEmpty(config.onInsertedHandler)) {
      storeOptions.onInserted = config.onInsertedHandler;
    }

    if (!isNullOrEmpty(config.onInsertingHandler)) {
      storeOptions.onInserting = config.onInsertingHandler;
    }

    if (!isNullOrEmpty(config.onLoadedHandler)) {
      storeOptions.onLoaded = config.onLoadedHandler;
    }

    if (!isNullOrEmpty(config.onLoadErrorHandler)) {
      dsOptions.onLoadError = config.onLoadErrorHandler;
    }

    if (!isNullOrEmpty(config.onLoadingChangedHandler)) {
      dsOptions.onLoadingChanged = config.onLoadingChangedHandler;
    }

    if (!isNullOrEmpty(config.onLoadingHandler)) {
      storeOptions.onLoading = config.onLoadingHandler;
    }

    if (!isNullOrEmpty(config.onModifiedHandler)) {
      storeOptions.onModified = config.onModifiedHandler;
    }

    if (!isNullOrEmpty(config.onModifyingHandler)) {
      storeOptions.onModifying = config.onModifyingHandler;
    }

    if (!isNullOrEmpty(config.onPushHandler)) {
      storeOptions.onPush = config.onPushHandler;
    }

    if (!isNullOrEmpty(config.onRemovedHandler)) {
      storeOptions.onRemoved = config.onRemovedHandler;
    }

    if (!isNullOrEmpty(config.onRemovingHandler)) {
      storeOptions.onRemoving = config.onRemovingHandler;
    }

    if (!isNullOrEmpty(config.onUpdatedHandler)) {
      storeOptions.onUpdated = config.onUpdatedHandler;
    }

    if (!isNullOrEmpty(config.onUpdatingHandler)) {
      storeOptions.onUpdating = config.onUpdatingHandler;
    }

    if (!isNullOrEmpty(config.pageSize)) {
      dsOptions.pageSize = config.pageSize;
    }

    if (!isNullOrEmpty(config.paginate)) {
      dsOptions.paginate = config.paginate;
    }

    if (!isNullOrEmpty(config.postProccessHandler)) {
      dsOptions.postProcess = config.postProccessHandler;
    }

    if (!isNullOrEmpty(config.postUrl)) {
      storeOptions.insert = async (values: any) => {
        let hparams = new HttpParams();

        if (config.includeData) {
          hparams = hparams.append('includeData',  config.includeData.navigationProperties.join(','));
        }

        const path = `${this.baseUrl}${ config.postUrl }`;
        let res: any = null;

        try {
          res = await this.http.post(path, values, { params: hparams }).toPromise();
        } catch (err) {
          if (config.errorHandler) {
            config.errorHandler(err);
          }
        }

        return res;
      };
    }

    if (!isNullOrEmpty(config.pushAggregationTimeout)) {
      dsOptions.pushAggregationTimeout = config.pushAggregationTimeout;
    }

    if (!isNullOrEmpty(config.requireTotalCount)) {
      dsOptions.requireTotalCount = config.requireTotalCount;
    }

    if (!isNullOrEmpty(config.reshapeOnPush)) {
      dsOptions.reshapeOnPush = config.reshapeOnPush;
    }
    if (!isNullOrEmpty(config.searchExpr)) {
      dsOptions.searchExpr = config.searchExpr;
    }

    if (!isNullOrEmpty(config.searchOperation)) {
      dsOptions.searchOperation = config.searchOperation;
    }

    if (!isNullOrEmpty(config.searchValue)) {
      dsOptions.searchValue = config.searchValue;
    }

    if (!isNullOrEmpty(config.select)) {
      dsOptions.select = config.select;
    }

    if (!isNullOrEmpty(config.sort)) {
      dsOptions.sort = config.sort;
    }

    if (!isNullOrEmpty(config.totalCount)) {
      storeOptions.totalCount = config.totalCount;
    }

    if (!isNullOrEmpty(config.updateUrl)) {
      storeOptions.update = async (key: any, values: any) => {
        let hparams = new HttpParams();

        if (config.includeData) {
          hparams = hparams.append('includeData',  config.includeData.navigationProperties.join(','));
        }

        let path = '';

        if (config.updateUrl?.includes('*')) {
          path = `${ this.baseUrl }${ this.buildUrl(config.updateUrl, key) }`;
        } else {
          path = `${ this.baseUrl }${config.updateUrl}`
          values.id = key;
        }

        let res: any = null;

        try {
          res = await this.http.put(path, values, { params: hparams }).toPromise();
        } catch (err) {
          if (config.errorHandler) {
            config.errorHandler(err);
          }
        }

        return res;
      };
    }

    storeOptions.onBeforeSend = (r: any, s: any) => {
      s.headers = {
        Authorization: `Bearer ${ token }`,
        database: db,
        ['Content-Type']: 'application/json'
      };
    };

    dsOptions.store = new CustomStore(storeOptions);
    const ds = new DataSource(dsOptions);
    return ds;
  }

  public createFromArray(array: any[], key?: string): DataSource {
    if (key) {
      return new DataSource({
        store: new ArrayStore({
          key,
          data: array
        })
      });
    } else {
      return new DataSource(array);
    }
  }
  
  public buildUrl(url: Nullable<string>, id: number): string {
    if (url) {
      return url.replace('*', id.toString());
    } else {
      return '';
    }
  }
}
