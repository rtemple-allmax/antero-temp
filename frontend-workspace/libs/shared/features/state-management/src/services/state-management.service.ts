import { Nullable } from '@allmax-angular/shared/types';
import { Injectable } from '@angular/core';
import { DataPoint } from '../types/data-point';
import { DataStore } from '../types/data-store';

@Injectable({ providedIn: 'root' })
export class StateManagementService {
  private stores: DataStore[] = [];
  
  public createStore(name: string, data: DataPoint[], debug: boolean, bgColor: string, fgColor: string = 'white'): Nullable<DataStore> {
    const store = new DataStore(name, data, debug, bgColor, fgColor);
    if (this.stores.filter(x => x.storeName === name).length < 1) {
      this.stores.push(store);
      return store;
    }
    return null;
  }

  public getStore(name: string): Nullable<DataStore> {
    try {
      return this.stores.find(x => x.storeName === name);
    } catch (err) {
      throw new Error(`There is no data store named ${ name }`);
    }
  }
}