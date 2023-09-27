import { unsubscribe } from '@allmax-angular/shared/utils';
import { Subscription } from 'rxjs';
import { PersistenceService } from '@allmax-angular/antero-web/services/persistence';
import { Injectable } from '@angular/core';
import { DataPoint } from '@allmax-angular/shared/features/state-management';

@Injectable({ providedIn: 'root' })
export class StoreBase {
  protected debug = false;
  protected subs: Subscription[] = [];

  protected storeName = '';
  protected fgColor = 'white';
  protected bgColor = 'black';
  protected padding = '3px'
  protected fontSize = '14px';

  constructor(protected persistence: PersistenceService) { }

  public prepare(debug: boolean, storeName: string, bgColor: string, fgColor: string = 'white'): void {
    this.debug = debug;
    this.storeName = storeName;
    this.bgColor = bgColor;
    this.fgColor = fgColor;
    for (const key in this) {
      if (this[key] instanceof DataPoint) {
        this.subs.push((Reflect.get(this, key) as DataPoint).changes$.subscribe(x => this.log(key, x)));
      }
    }
  } 

  protected log(msg: string, data?: any): void {
    console.log(`%c${ this.storeName }::${ msg }`, `color: ${ this.fgColor}; background-color: ${ this.bgColor }; padding: ${ this.padding }; font-size: ${ this.fontSize }`, data);
  }

  public finalize(): void {
    unsubscribe(this.subs);
  }
}