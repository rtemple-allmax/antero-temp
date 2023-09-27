import { MyDataFieldTypes, Nullable } from "@allmax-angular/shared/types";
import { MasterDetailViewTypes } from "@allmax-angular/shared/ui/master-detail";
import { NotificationsService } from "@allmax-angular/shared/ui/notifications";
import { EventEmitter, Injectable } from "@angular/core";

export interface PersistentData {
  [key: string]: any;
  masterDetailViewType: MasterDetailViewTypes;
  darkMode: number;
  equipmentPrimaryDetailsTutorial: number;
  equipmentPurchasingDetailsTutorial: number;
  equipmentCustomDetailsTutorial: number;
  equipmentMyData: any;
  equipmentPanelsOrder: string[];
  equipmentPanelsCollapsible: any[];
  equipmentMyDataOrder: any[];
}

export enum PersistentDataKeys {
  NONE = 'none',
  MASTER_DETAIL_VIEW_TYPE = 'masterDetailViewType',
  DARK_MODE = 'darkMode',
  EQUIPMENT_PRIMARY_DETAILS_TUTORIAL = 'equipmentPrimaryDetailsTutorial',
  EQUIPMENT_PURCHASING_DETAILS_TUTORIAL = 'equipmentPurchasingDetailsTutorial',
  EQUIPMENT_CUSTOM_DETAILS_TUTORIAL = 'equipmentCustomDetailsTutorial',
  EQUIPMENT_MY_DATA = 'equipmentMyData',
  EQUIPMENT_PANELS_ORDER = 'equipmentPanelsOrder',
  EQUIPMENT_PANELS_COLLAPSIBLE = 'equipmentPanelsCollapsible',
  EQUIPMENT_MY_DATA_ORDER = 'equipmentMyDataOrder'
}

@Injectable({ providedIn: 'root' })
export class PersistenceService {

  private key = 'persistent-data'

  public changed = new EventEmitter<any>();

  constructor(private notifications: NotificationsService) { }
  
  public initialize(): void {
    const result = this.get();
    if (!result) {
      const data: PersistentData = {
        masterDetailViewType: MasterDetailViewTypes.LIST,
        darkMode: 0,
        equipmentPrimaryDetailsTutorial: 1,
        equipmentPurchasingDetailsTutorial: 1,
        equipmentCustomDetailsTutorial: 1,
        equipmentMyData: [],
        equipmentMyDataOrder: [],
        equipmentPanelsOrder: [],
        equipmentPanelsCollapsible: [
          { name: 'My Data', collapsed: true },
          { name: 'Primary Details', collapsed: false },
          { name: 'Purchasing', collapsed: false },
          { name: 'Parts', collapsed: false },
          { name: 'Instruments', collapsed: false },
          { name: 'Documents', collapsed: false },
          { name: 'Custom Fields', collapsed: false },
        ]
      };
      localStorage.setItem(this.key, JSON.stringify(data));
    } else {
      if (PersistentDataKeys.DARK_MODE in result === false) {
        result.darkMode = 0;
      }
      if (PersistentDataKeys.EQUIPMENT_CUSTOM_DETAILS_TUTORIAL in result === false) {
        result.equipmentCustomDetailsTutorial = 1;
      }
      if (PersistentDataKeys.EQUIPMENT_MY_DATA in result === false) {
        result.equipmentMyData = [];
      }
      if (PersistentDataKeys.EQUIPMENT_MY_DATA_ORDER in result === false) {
        result.equipmentMyDataOrder = [];
      }
      if (PersistentDataKeys.EQUIPMENT_PANELS_COLLAPSIBLE in result === false) {
        result.equipmentPanelsCollapsible = [
          { name: 'My Data', collapsed: true },
          { name: 'Primary Details', collapsed: false },
          { name: 'Purchasing', collapsed: false },
          { name: 'Parts', collapsed: false },
          { name: 'Instruments', collapsed: false },
          { name: 'Documents', collapsed: false },
          { name: 'Custom Fields', collapsed: false },
        ]
      }
      if (PersistentDataKeys.EQUIPMENT_PANELS_ORDER in result === false) {
        result.equipmentPanelsOrder = [];
      }
      if (PersistentDataKeys.EQUIPMENT_PRIMARY_DETAILS_TUTORIAL in result === false) {
        result.equipmentPrimaryDetailsTutorial = 1;
      }
      if (PersistentDataKeys.EQUIPMENT_PURCHASING_DETAILS_TUTORIAL in result === false) {
        result.equipmentPurchasingDetailsTutorial = 1;
      }
      if (PersistentDataKeys.MASTER_DETAIL_VIEW_TYPE in result === false) {
        result.masterDetailViewType = MasterDetailViewTypes.LIST;
      }
    } 
  }

  public get(): Nullable<PersistentData> {
    const result = localStorage.getItem(this.key);
    return result ? JSON.parse(result) : null
  }
  
  public set(propName: PersistentDataKeys, val: any): void {
    const data = this.get();
    if (data) {
      const changed = { ...data };
      changed[propName] = val;
      localStorage.setItem(this.key, JSON.stringify(changed));
      this.changed.emit();
    }
  }

  public addToMyData(label: string, propName: string, type: MyDataFieldTypes, formatted: boolean, displayExpr?: string): void {
    const data = this.get();
    if (data) {
      const myData = [ ...data[PersistentDataKeys.EQUIPMENT_MY_DATA] ];
      if (myData) {
        if (myData.find(x => x.label.toLowerCase() === label.toLowerCase()) === undefined) {
          myData.push({ label, propName, type, formatted, order: myData.length, displayExpr });
          this.set(PersistentDataKeys.EQUIPMENT_MY_DATA, myData);
          this.notifications.notify(`${ label } has been added to My Data.`);
        }
        
      }
    }
  }

  public removeFromMyData(label: string): void {
    const data = this.get();
    if (data) {
      const myData = [ ...data[ PersistentDataKeys.EQUIPMENT_MY_DATA ] ];
      if (myData) {
        if (myData.length <= 1) {
          this.set(PersistentDataKeys.EQUIPMENT_MY_DATA, []);
          this.notifications.notify(`${ label } has been removed from My Data.`);
        } else {
          const foundIndex = myData.findIndex(x => x.label.toLowerCase() === label.toLowerCase());
          if (foundIndex > -1) {
            myData.splice(foundIndex, 1);
            myData.forEach((x, i) => x.order = i);
            this.set(PersistentDataKeys.EQUIPMENT_MY_DATA, myData);
            this.notifications.notify(`${ label } has been removed from My Data.`);
          }
        }
      }
    }
  }

  public setEquipmentPanelCollapsibleState(name: string, state: boolean): void {
    const data = { ...this.get() };
    if (data?.equipmentPanelsCollapsible) {
      const panelsState = [ ...data.equipmentPanelsCollapsible ];
      if (panelsState) {
        const index = panelsState.findIndex(x => x.name === name);
        if (index >= 0) {
          panelsState[index].collapsed = state;
          this.set(PersistentDataKeys.EQUIPMENT_PANELS_COLLAPSIBLE, panelsState)
        } 
      }
    }
  }
}