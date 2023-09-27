import { Component, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { WorkViewerPanelBaseComponent } from '../work-viewer-panel.base';
import { WorkOrder } from '@allmax-angular/antero-web/entities';
import { Nullable } from '@allmax-angular/shared/types';
import { DataStores } from '@allmax-angular/antero-web/types';
import { WorkViewerStorePropNames } from '../../../../work-viewer.schema';

@Component({
  selector: 'ant-work-viewer-panel-admin',
  templateUrl: './work-viewer-panel-admin.component.html',
  styleUrls: ['./work-viewer-panel-admin.component.scss'],
})
export class WorkViewerPanelAdminComponent extends WorkViewerPanelBaseComponent implements AfterViewInit {
  public record: Nullable<WorkOrder>;

  @Output() editAdmin = new EventEmitter();

  public ngAfterViewInit(): void {
    const sub = this.state.getStore(DataStores.VIEWER_WORK)?.observe(WorkViewerStorePropNames.SELECTED_WORK_ORDER).subscribe(x => this.record = x);
    if (sub) { this.subs.push(sub); }
  }

  public editHandler(): void {
    this.editAdmin.emit();
  }
}
