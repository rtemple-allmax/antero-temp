import { PersistentDataKeys } from '@allmax-angular/antero-web/services/persistence';
import { StoreBase } from '@allmax-angular/antero-web/types';
import { MasterDetailViewTypes } from '@allmax-angular/shared/ui/master-detail';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class UIStoreService extends StoreBase {
  // private readonly masterDetailViewTypeSubject = new BehaviorSubject<MasterDetailViewTypes>(MasterDetailViewTypes.LIST);
  // public readonly masterDetailViewType$ = this.masterDetailViewTypeSubject.asObservable();
  // public set masterDetailViewType(payload: MasterDetailViewTypes) {
  //   this.persistence.set(PersistentDataKeys.MASTER_DETAIL_VIEW_TYPE, payload);
  //   this.masterDetailViewTypeSubject.next(payload);
  // }
  
  // public intialize(debug: boolean): void {
  //   this.prepare(debug, 'UI Store', '#ED7D3A');

  //   const data = this.persistence.get();
  //   if (data) {
  //     this.masterDetailViewType = data.masterDetailViewType;
  //   }

  //   if (this.debug) {
  //     this.subs.push(this.masterDetailViewType$.subscribe(x => this.log('masterDetailViewType', this.getViewTypeString(x))))
  //   }
  // }
  
  // private getViewTypeString(viewType: MasterDetailViewTypes): string {
  //   return viewType === MasterDetailViewTypes.LIST ? 'List' : 'Table';
  // }
}