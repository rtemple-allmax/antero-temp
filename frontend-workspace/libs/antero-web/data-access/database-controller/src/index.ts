import { ErrorService } from "@allmax-angular/antero-web/services/error";
import { FetchService } from "@allmax-angular/shared/services";
import { CrudFunctions, DatabaseInfo, Nullable, ValidationData } from "@allmax-angular/shared/types";
import { generateQueryStringFromObject, isNullOrEmpty } from "@allmax-angular/shared/utils";
import { HttpErrorResponse, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";

enum Endpoints {
  GET_ALL = '/database/list'
}

export interface AccountDatabases {
  [key: string]: any;
  accountNumber: number;
  accountName: string;
  availableSeats: number;
  dbs: DatabaseInfo[];
}

@Injectable({ providedIn: 'root' })
export class DatabaseController {
  constructor(private fetch: FetchService, private errors: ErrorService)  { }

  public async getDatabases(): Promise<any> {
    let res: Nullable<HttpResponse<any>>;

    try {
      res = await this.fetch.get<any>(Endpoints.GET_ALL);
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err);
      }
    }

    const accounts: AccountDatabases[] = [];
    
    if (res?.body) {
      const keys = Object.keys(res?.body);

      if (keys && keys.length > 0) {
        for(const key of keys) {
          accounts.push({
            accountNumber: parseInt(key),
            accountName: res?.body[key].accountName,
            availableSeats: res?.body[key].availableSeats,
            dbs: res?.body[key].dbList
          })
        }
      }
    }
    return accounts;
  }

  public async nameExists(data: ValidationData<string>): Promise<boolean> {
    if (isNullOrEmpty(data.newValue) || (data.crud === CrudFunctions.UPDATE && data.newValue?.toLowerCase().trim() === data.original?.name.toLowerCase().trim())) { return true; } // is valid
    
    let res: Nullable<HttpResponse<boolean>>;
    
    const endpoint = '/database/exists';
    const query: string = generateQueryStringFromObject(data.query);
    const path = `${endpoint}${query}`;

    try {
      res = await this.fetch.post<string, boolean>(path, JSON.stringify(data.query));
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err);
      }
    }
    return res ? !(res.body) : true; // not valid : valid
  }

  public associationExists = async (data: ValidationData<string>): Promise<boolean> => {
    if (isNullOrEmpty(data.newValue) || (data.crud === CrudFunctions.UPDATE && data.newValue?.toLowerCase().trim() === data.original?.name.toLowerCase().trim())) { return true; } // is valid
    
    let res: Nullable<HttpResponse<boolean>>;
    
    const endpoint = '/database/exists';
    const query: string = generateQueryStringFromObject(data.query);
    const path = `${endpoint}${query}`;

    try {
      res = await this.fetch.post<string, boolean>(path, JSON.stringify(data.query));
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err);
      }
    }
    return res ? !(res.body) : true; // not valid : valid
  }
}