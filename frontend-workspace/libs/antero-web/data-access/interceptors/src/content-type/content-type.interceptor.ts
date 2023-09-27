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
export class ContentTypeInterceptor implements HttpInterceptor {
  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const upload = localStorage.getItem(LocalStorageKeys.UPLOADING);
    const requestToHandle = upload ?  this.uploadRequest(request) : this.normalRequest(request);
    return next.handle(requestToHandle);
  }

  private uploadRequest(req: HttpRequest<any>): HttpRequest<any> {
    return req.clone({
      headers: req.headers.set('enctype', 'multipart/form-data')
    });
  }

  private normalRequest(req: HttpRequest<any>): HttpRequest<any> {
    return req.clone({
      headers: req.headers.set('Content-Type', 'application/json')
    });
  }
}
