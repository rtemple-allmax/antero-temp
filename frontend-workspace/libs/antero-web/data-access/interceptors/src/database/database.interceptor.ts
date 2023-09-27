import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorageKeys } from '@allmax-angular/antero-web/types';

@Injectable()
export class DatabaseInterceptor implements HttpInterceptor {
  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const database = localStorage.getItem(LocalStorageKeys.DATABASE);
    const requestToHandle = database ?  this.databaseRequest(request, '999999_1') : request;
    return next.handle(requestToHandle);
  }

  private databaseRequest(req: HttpRequest<any>, dbName: string ): HttpRequest<any> {
    return req.clone({
      headers: req.headers.set(LocalStorageKeys.DATABASE, dbName)
    });
  }
}
