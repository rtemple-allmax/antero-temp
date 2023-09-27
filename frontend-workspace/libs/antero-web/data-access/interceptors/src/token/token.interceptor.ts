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
export class TokenInterceptor implements HttpInterceptor {
  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem(LocalStorageKeys.TOKEN);
    const requestToHandle = token ?  this.authenticatedRequest(request, token) : request;
    return next.handle(requestToHandle);
  }

  private authenticatedRequest(req: HttpRequest<any>, token: string ): HttpRequest<any> {
    return req.clone({
      headers: req.headers.set('Authorization', `Bearer ${ token }`)
    });
  }
}
