import { User } from "@allmax-angular/antero-web/entities";
import { ErrorService } from "@allmax-angular/antero-web/services/error";
import { ApiResponse, UserPreferences } from "@allmax-angular/antero-web/types";
import { FetchService } from "@allmax-angular/shared/services";
import { Nullable } from "@allmax-angular/shared/types";
import { HttpErrorResponse, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";

enum Endpoints {
  GET_USERS = '/user/all',
  REGISTER_USER = '/user/register',
  RESET_PASSWORD = '/user/password/reset',
  UPDATE_PASSWORD = '/user/password/update',
  GET_PREFERENCES = '/user/preferences',
  UPDATE_PREFERENCES = '/user/preferences/update',
}

@Injectable({ providedIn: 'root' })
export class UserController {
  constructor(private fetch: FetchService, private errors: ErrorService) { }

  public async getAllUsers(): Promise<User[]> {
    let res: Nullable<HttpResponse<ApiResponse<User>>>;

    try {
      res = await this.fetch.get<ApiResponse<User>>(Endpoints.GET_USERS);
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err);
      }
    }

    return res?.body?.data || [];
  }

  public async registerUser(query: string): Promise<any> {
    let res: Nullable<HttpResponse<any>>;
    const path = `${ Endpoints.REGISTER_USER }${ query }`

    try {
      res = await this.fetch.post<any, any>(path, null)
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err);
      }
    }

    return res?.body;
  }

  public async resetPasswordRequest(email: string, sendEmail: boolean): Promise<any> {
    let res: Nullable<HttpResponse<any>>;

    const body = { email, sendEmail }
    
    try {
      res = await this.fetch.post<any, any>(Endpoints.RESET_PASSWORD, { email, sendEmail });
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err);
      }
    }

    return res?.body;
  }

  public async updatePassword(args: { email: string, password: string, token: string }): Promise<any> {
    let res: Nullable<HttpResponse<any>>;

    try {
      res = await this.fetch.post<any, any>(Endpoints.UPDATE_PASSWORD, args);
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err);
      }
    }

    return res?.body
  }

  public async getUserPreferences(): Promise<Nullable<UserPreferences>> {
    let res: Nullable<HttpResponse<any>>;

    try {
      res = await this.fetch.get<UserPreferences>(Endpoints.GET_PREFERENCES);
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err);
      }
    }

    return res?.body;
  }

  public async updatePreferences(record: UserPreferences): Promise<Nullable<UserPreferences>> {
    let res: Nullable<HttpResponse<any>>;

    try {
      res = await this.fetch.put<UserPreferences, any>(Endpoints.UPDATE_PREFERENCES, record);
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err);
      }
    }

    return res?.body;
  }
}