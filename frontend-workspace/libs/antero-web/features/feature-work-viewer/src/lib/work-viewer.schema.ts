import { WorkHistory, WorkOrder } from "@allmax-angular/antero-web/entities";
import { DataPoint } from "@allmax-angular/shared/features/state-management";

export enum WorkViewerStorePropNames {
  REFRESH = 'refresh',
  SELECTED_WORK_ORDER = 'Selected Work Order',
  SELECTED_WORK_HISTORY = 'Selected Work History'
}

export const workViewerStoreSchema: DataPoint[] = [
  new DataPoint<WorkOrder>(WorkViewerStorePropNames.SELECTED_WORK_ORDER),
  new DataPoint<WorkHistory>(WorkViewerStorePropNames.SELECTED_WORK_HISTORY),
  new DataPoint<boolean>(WorkViewerStorePropNames.REFRESH, false)
]

