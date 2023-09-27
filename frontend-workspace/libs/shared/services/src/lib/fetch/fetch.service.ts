import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { LocalStorageKeys } from '@allmax-angular/antero-web/types';
import { Nullable } from '@allmax-angular/shared/types';
import { firstValueFrom } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FetchService {
  private baseUrl = '';

  constructor(private http: HttpClient) { }

  public initialize(baseUrl: string): void {
    this.baseUrl = baseUrl;
  }

  public preUpload(): void {
    localStorage.setItem(LocalStorageKeys.UPLOADING, '0');
  }

  public postUpload(): void {
    localStorage.removeItem(LocalStorageKeys.UPLOADING);
  }

  public get<T>(path: string, params?: HttpParams): Promise<HttpResponse<T> | undefined> {
    return firstValueFrom(this.http.get<T>(
      `${this.baseUrl}${path}`,
      { observe: 'response', params }
    ));
  }

  public async getAsBlob(path: string): Promise<Nullable<Blob>> {
    const url = `${this.baseUrl}${path}`;
    let res: Nullable<HttpResponse<any>>;

    try {
      res = await firstValueFrom(this.http.get(url, { responseType: 'blob' as 'json', observe: 'response' }));
    } catch (err) {
      console.log('fetch as blob err', err)
    }

    if (res?.body) {
      return new Blob([res.body as any], { type: (res.body as any).type });
    } 

    return null;
  }
  
  public post<T1, T2>(path: string, body: T1): Promise<HttpResponse<T2> | undefined> {
    return firstValueFrom(this.http.post<T2>(
      `${this.baseUrl}${path}`,
      body,
      { observe: 'response' }
    ));
  }

  public put<T1, T2>(path: string, body: T1): Promise<HttpResponse<T2> | undefined> {
    return firstValueFrom(this.http.put<T2>(
      `${this.baseUrl}${path}`,
      body,
      { observe: 'response' }
    ));
  }

  public delete<T>(path: string): Promise<HttpResponse<T> | undefined> {
    return firstValueFrom(this.http.delete<T>(
      `${this.baseUrl}${path}`,
      { observe: 'response' }
    ));
  }

  // public logBaseUrl(): void {
  //   console.log('FETCH_SERVICE_BASE_URL', this.baseUrl);
  // }
}
