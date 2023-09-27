import { unsubscribe } from '@allmax-angular/shared/utils';
import { Location } from '@angular/common';
import { EventEmitter, Injectable } from '@angular/core';
import { Event, NavigationCancel, NavigationEnd, NavigationError, NavigationExtras, NavigationStart, Router, UrlTree } from '@angular/router';
import { Subscription } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class NavigationService {
  private subs: Subscription[] = [];

  public navigationEnded: EventEmitter<Event> = new EventEmitter<Event>();

  constructor(private router: Router, private browser: Location) { }

  public initialize(): void {
    this.handleRouterEvents();
  }
  public finalize(): void {
    unsubscribe(this.subs);
  }
  
  public async navigate(segments: any[], extras: NavigationExtras = {}): Promise<boolean> {
    return (await this.router.navigate(segments, extras));
  }

  public async navigateByURL(url: string | UrlTree, extras: NavigationExtras = {}): Promise<boolean> {
    return (await this.router.navigateByUrl(url, extras));
  }

  public goBack(): void {
    this.browser.back();
  }

  public handleRouterEvents(): void {
    const routerEventSub = this.router.events.subscribe((e: Event) => {
      
      switch (true) {
        case e instanceof NavigationCancel:
          this.log('cancel', e);
          this.navigationEnded.emit(e);
          break;
        case e instanceof NavigationEnd:
          this.log('end', e);
          this.navigationEnded.emit(e);
          break;
        case e instanceof NavigationError:
          this.logError('Navigation Action Error', e);
          this.navigationEnded.emit(e);          
          break;
        case e instanceof NavigationStart:
          this.log('start', e);          
          break;
      }
    });
    this.subs.push(routerEventSub);
  }

  

  private log(msg: string, data?: any): void {
    console.log(`%cnav::${ msg }`, "color: black; background-color: violet; padding: 3px; font-size: 14px", data);
  }

  private logError(msg: string, data?: any): void {
    console.log(`%c${ msg }`, "color: white; background-color: red; padding: 3px; font-size: 18px", data);
  }
}
