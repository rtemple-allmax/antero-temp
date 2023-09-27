import { WorkOrder } from "@allmax-angular/antero-web/entities";
import { WorkViewerComponent, WorkViewerStorePropNames } from "@allmax-angular/antero-web/features/feature-work-viewer";
import { DataStores } from "@allmax-angular/antero-web/types";
import { StateManagementService } from "@allmax-angular/shared/features/state-management";
import { Nullable } from "@allmax-angular/shared/types";
import { Injectable, inject } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class ViewersService {
  private state = inject(StateManagementService);
  private workViewer: Nullable<WorkViewerComponent>;

  public vorKViewerVisibility = false;

  public registerWorkViewer(component: Nullable<WorkViewerComponent>) {
    this.workViewer = component;
  }

  public openWorkViewer(record: Nullable<WorkOrder>): void {
    console.log('open work viewer', { record, viewer: this.workViewer });
    if (record && this.workViewer) {
      this.state.getStore(DataStores.VIEWER_WORK)?.setValue(WorkViewerStorePropNames.SELECTED_WORK_ORDER, record);
      this.workViewer.open();
    }
  }

  public close(): void {
    this.workViewer?.close();
  }
}