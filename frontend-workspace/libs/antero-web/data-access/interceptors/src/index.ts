import { HTTP_INTERCEPTORS } from '@angular/common/http'
import { ContentTypeInterceptor } from './content-type/content-type.interceptor';
import { DatabaseInterceptor } from './database/database.interceptor';
import { TokenInterceptor } from './token/token.interceptor';

export const interceptors = [
  { provide: HTTP_INTERCEPTORS, useClass: ContentTypeInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: DatabaseInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
];