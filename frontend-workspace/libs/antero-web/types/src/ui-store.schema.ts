import { DataPoint } from "@allmax-angular/shared/features/state-management";
import { MasterDetailViewTypes } from "@allmax-angular/shared/ui/master-detail";

export enum UIStorePropNames {
  VIEW_TYPE = 'viewType',
  SIDEBAR_COLLAPSED = 'sidebarCollapsed'
} 

export const uiStoreSchema = [
  new DataPoint<MasterDetailViewTypes>(UIStorePropNames.VIEW_TYPE, MasterDetailViewTypes.LIST),
  new DataPoint<boolean>(UIStorePropNames.SIDEBAR_COLLAPSED, false)
];