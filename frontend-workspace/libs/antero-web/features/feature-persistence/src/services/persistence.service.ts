import { Inject, Injectable } from "@angular/core";
import { PersistentUIDataSet } from "../types/persistent-ui-data-set";
import { DataFieldUIState } from "../types/data-field-ui-state";
import { Nullable } from '@allmax-angular/shared/types';
import { StorageBase } from "../types/storage.base";

@Injectable({ providedIn: 'root' })
export class PersistenceService extends StorageBase {
  // private key = 'persistent-ui-data-'

  // public sets: PersistentUIDataSet[] = [];

  

  constructor() {
    super(window.localStorage);
  }

  // public registerSet(name: string, schema: DataFieldUIState[]) {
  //   const itemName = `${ this.key }${ name }`;
  //   const stored = localStorage.getItem(itemName);
  //   if (stored && !this.setExists(name)) {
  //     this.sets.push(new PersistentUIDataSet(name, JSON.parse(stored)));
  //   } else {
  //     localStorage.setItem(itemName, JSON.stringify(schema))
  //     if (!this.setExists(name)) {
  //       this.sets.push(new PersistentUIDataSet(name, schema));
  //     }
  //   }
  // }

  // public getSet(name: string): Nullable<PersistentUIDataSet> {
  //   try {
  //     return this.sets.find(x => x.name === name);
  //   } catch (err) {
  //     throw new Error(`There is no persistent ui data set named ${ name }`)
  //   }
  // }
  
  // private setExists(name: string): boolean {
  //   return this.sets.filter(x => x.name === name).length > 0;
  // }
}

// View_Type
// ColorMode

// public observe(name: string): Observable<any> {
//   const found = this.dataPoints.find(x => x.name === name);
//   return found ? found.changes$ : of(null);
// }



// One of the goals of this service is to keep the number of keys in local storage down while
// allowing the service to return the data in an observable way.  So in an effort to meet both these goals
// there should be a single key per feature.   For example there will be one key: 
// PersistentEquipmentUI that will represent all the persistent data for the entire asset management feature.