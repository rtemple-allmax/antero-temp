import { LaborAccount, LaborClass, LaborType } from "@allmax-angular/antero-web/entities";
import { ErrorService } from "@allmax-angular/antero-web/services/error";
import { DataSourceConfiguratorService, FetchService } from "@allmax-angular/shared/services";
import { Nullable } from "@allmax-angular/shared/types";
import { Injectable } from "@angular/core";
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { ApiResponse } from "@allmax-angular/antero-web/types";

enum Endpoints {
  LABOR_CLASS_ALL = '/labor/class/all',
  LABOR_CLASS_GET_ONE = '/labor/class/*',
  LABOR_CLASS_ADD = '/labor/class/add',
  LABOR_CLASS_UPDATE = '/labor/class/update',
  LABOR_CLASS_DELETE = '/labor/class/*/delete',
  LABOR_ACCOUNT_ALL = '/labor/account/all',
  LABOR_ACCOUNT_GET_ONE = '/labor/account/*',
  LABOR_ACCOUNT_ADD = '/labor/account/add',
  LABOR_ACCOUNT_UPDATE = '/labor/account/update',
  LABOR_ACCOUNT_DELETE = '/labor/account/*/delete',
  LABOR_TYPE_ALL = '/labor/type/all',
  LABOR_TYPE_GET_ONE = '/labor/type/*',
  LABOR_TYPE_ADD = '/labor/type/add',
  LABOR_TYPE_UPDATE = '/labor/type/update',
  LABOR_TYPE_DELETE = '/labor/type/*/delete',
}

@Injectable({ providedIn: 'root' })
export class LaborControllerService {
  constructor(
    private datasources: DataSourceConfiguratorService,
    private errors: ErrorService,
    private fetch: FetchService
  ) { }

  //#region Labor Classes
  public async getLaborClasses(): Promise<LaborClass[]> {
    let res: Nullable<HttpResponse<ApiResponse<LaborClass>>>;
    const path = Endpoints.LABOR_CLASS_ALL;
    try {
      res = await this.fetch.get<ApiResponse<LaborClass>>(path);
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err);
      }
    }

    return res?.body?.data || [];
  }

  public async getLaborClass(id: number): Promise<Nullable<LaborClass>> {
    let res: Nullable<HttpResponse<LaborClass>>;
    const path = Endpoints.LABOR_CLASS_GET_ONE.replace('*', id.toString());
    try {
      res = await this.fetch.get<LaborClass>(path);
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err);
      }
    }

    return res?.body;
  }

  public async addLaborClass(name: string, rate: number): Promise<LaborClass> {
    let res: Nullable<HttpResponse<any>>;

    try {
      res = await this.fetch.post<LaborClass, LaborClass>(Endpoints.LABOR_CLASS_ADD, { id: 0, name, rate })
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err);
      }
    }

    return res?.body;
  }

  public async updateLaborClass(record: LaborClass): Promise<LaborClass> {
    let res: Nullable<HttpResponse<any>>;

    try {
      res = await this.fetch.put<LaborClass, LaborClass>(Endpoints.LABOR_CLASS_UPDATE, record)
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err);
      }
    }

    return res?.body;
  }

  public async deleteLaborClass(record: LaborClass): Promise<boolean> {
    let res: Nullable<HttpResponse<any>>;
    const path = Endpoints.LABOR_CLASS_DELETE.replace('*', record.id.toString());

    try {
      res = await this.fetch.delete<any>(path)
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err);
      }
    }

    return !!res;
  }
  //#endregion

  //#region Labor Accounts
  public async getLaborAccounts(): Promise<LaborAccount[]> {
    let res: Nullable<HttpResponse<ApiResponse<LaborAccount>>>;
    const path = Endpoints.LABOR_ACCOUNT_ALL;
    try {
      res = await this.fetch.get<ApiResponse<LaborAccount>>(path);
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err);
      }
    }

    return res?.body?.data || [];
  }

  public async getLaborAccount(id: number): Promise<Nullable<LaborAccount>> {
    let res: Nullable<HttpResponse<LaborAccount>>;
    const path = Endpoints.LABOR_ACCOUNT_GET_ONE.replace('*', id.toString());
    try {
      res = await this.fetch.get<LaborAccount>(path);
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err);
      }
    }

    return res?.body;
  }

  public async addLaborAccount(name: string): Promise<LaborAccount> {
    let res: Nullable<HttpResponse<any>>;

    try {
      res = await this.fetch.post<LaborAccount, LaborAccount>(Endpoints.LABOR_ACCOUNT_ADD, { id: 0, name })
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err);
      }
    }

    return res?.body;
  }

  public async updateLaborAccount(record: LaborAccount): Promise<LaborAccount> {
    let res: Nullable<HttpResponse<any>>;

    try {
      res = await this.fetch.put<LaborAccount, LaborAccount>(Endpoints.LABOR_ACCOUNT_UPDATE, record)
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err);
      }
    }

    return res?.body;
  }

  public async deleteLaborAccount(record: LaborAccount): Promise<boolean> {
    let res: Nullable<HttpResponse<any>>;
    const path = Endpoints.LABOR_ACCOUNT_DELETE.replace('*', record.id.toString());

    try {
      res = await this.fetch.delete<any>(path)
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err);
      }
    }

    return !!res;
  }
  //#endregion

  //#region Labor Types
  public async getLaborTypes(): Promise<LaborType[]> {
    let res: Nullable<HttpResponse<ApiResponse<LaborType>>>;
    const path = Endpoints.LABOR_TYPE_ALL;
    try {
      res = await this.fetch.get<ApiResponse<LaborType>>(path);
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err);
      }
    }

    return res?.body?.data || [];
  }

  public async getLaborType(id: number): Promise<Nullable<LaborType>> {
    let res: Nullable<HttpResponse<LaborType>>;
    const path = Endpoints.LABOR_TYPE_GET_ONE.replace('*', id.toString());
    try {
      res = await this.fetch.get<LaborType>(path);
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err);
      }
    }

    return res?.body;
  }

  public async addLaborType(name: string, multiplier: number): Promise<LaborType> {
    let res: Nullable<HttpResponse<any>>;

    try {
      res = await this.fetch.post<LaborType, LaborType>(Endpoints.LABOR_TYPE_ADD, { id: 0, name, multiplier })
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err);
      }
    }

    return res?.body;
  }

  public async updateLaborType(record: LaborType): Promise<LaborType> {
    let res: Nullable<HttpResponse<any>>;

    try {
      res = await this.fetch.put<LaborType, LaborType>(Endpoints.LABOR_TYPE_UPDATE, record)
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err);
      }
    }

    return res?.body;
  }

  public async deleteLaborType(record: LaborType): Promise<boolean> {
    let res: Nullable<HttpResponse<any>>;
    const path = Endpoints.LABOR_TYPE_DELETE.replace('*', record.id.toString());

    try {
      res = await this.fetch.delete<any>(path)
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err);
      }
    }

    return !!res;
  }
  //#endregion
}