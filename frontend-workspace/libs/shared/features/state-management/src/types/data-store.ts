import { unsubscribe } from '@allmax-angular/shared/utils';
import { Subscription, Observable, of } from 'rxjs';
import { DataPoint } from './data-point';
import { Nullable } from '@allmax-angular/shared/types';

export class DataStore {
  private debug = false;
  private subs: Subscription[] = [];
  private dataPoints: DataPoint[] = [];
  private fgColor = 'white';
  private bgColor = 'black';
  private padding = '3px'
  private fontSize = '14px';
  private linkedToStorage = false;

  public storeName = '';

  private storage: Nullable<Storage>;

  constructor(name: string, data: DataPoint[], debug: boolean, bgColor: string, fgColor: string = 'white') {
    this.storeName = name;
    this.dataPoints = data;
    this.debug = debug;
    this.bgColor = bgColor;
    this.fgColor = fgColor;
    if (this.debug) {
      for (const point of this.dataPoints) {
        this.subs.push(point.changes$.subscribe(x => this.log(point.name, x)));
      }
    }
  }

  public linkToStorage(storage: Storage): void {
    this.linkedToStorage = true;
    this.storage = storage;
    for (const point of this.dataPoints) {
      const name = point.name;
      const inStorage = this.storage.getItem(name);
      if (!inStorage) {
        this.storage.setItem(name, JSON.stringify(point.value))
      } else {
        point.set(JSON.parse(inStorage));
      }
    }
  }

  public finalize(): void {
    unsubscribe(this.subs);
  }

  public observe(name: string): Observable<any> {
    const found = this.dataPoints.find(x => x.name === name);
    return found ? found.changes$ : of(null);
  }

  public setValue(name: string, val: any): void {
    const found = this.dataPoints.find(x => x.name === name);
    if (found) {
      found.set(val);
      if (this.linkedToStorage) {
        this.storage?.setItem(name, JSON.stringify(val));
      }
    }
  }
  
  private log(msg: string, data?: any): void {
    console.log(`%c${ this.storeName }::${ msg }`, `color: ${ this.fgColor}; background-color: ${ this.bgColor }; padding: ${ this.padding }; font-size: ${ this.fontSize }`, data);
  }
}