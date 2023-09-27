import { ErrorService } from '@allmax-angular/antero-web/services/error';
import { AuthResponse, LocalStorageKeys, SeatTypes, UserCredentials } from '@allmax-angular/antero-web/types';
import { FetchService } from '@allmax-angular/shared/services';
import { Account, Nullable } from '@allmax-angular/shared/types';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

enum Endpoints {
  LOGIN = '/account/login',
  HEARTBEAT = '/account/heartbeat',
}



@Injectable({ providedIn: 'root' })
export class AccountControllerService {
  constructor(private fetch: FetchService, private errors: ErrorService) { }
  
  public async login(username: string, password: string): Promise<AuthResponse | null> {
    const deviceID = localStorage.getItem(LocalStorageKeys.DEVICE_ID) 
    
    const credentials: UserCredentials = {
      username,
      password,
      type: SeatTypes.WEB,
      deviceID
    };

    let res: HttpResponse<any> | undefined;
    
    try {
      res = await this.fetch.post<UserCredentials, any>('/account/login', credentials);
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err, 'Login Error');
      }
    }
    
    return res?.body;
  }

  public async heartbeat(): Promise<Nullable<AuthResponse>> {
    let res: Nullable<HttpResponse<AuthResponse>>;

    try {
      res = await this.fetch.get<AuthResponse>(Endpoints.HEARTBEAT)
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err);
      }
    }

    return res?.body;
  }
}