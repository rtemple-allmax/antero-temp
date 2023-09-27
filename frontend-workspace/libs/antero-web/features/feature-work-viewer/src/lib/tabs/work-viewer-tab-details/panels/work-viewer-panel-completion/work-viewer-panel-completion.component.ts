import { AfterViewInit, Component, OnInit } from '@angular/core';
import { WorkViewerPanelBaseComponent } from '../work-viewer-panel.base';
import { WorkOrder } from '@allmax-angular/antero-web/entities';
import { Nullable } from '@allmax-angular/shared/types';
import { DataStores } from '@allmax-angular/antero-web/types';
import { WorkViewerStorePropNames } from '../../../../work-viewer.schema';

@Component({
  selector: 'ant-work-viewer-panel-completion',
  templateUrl: './work-viewer-panel-completion.component.html',
  styleUrls: ['./work-viewer-panel-completion.component.scss'],
})
export class WorkViewerPanelCompletionComponent extends WorkViewerPanelBaseComponent implements AfterViewInit {
  public record: Nullable<WorkOrder>;

  public ngAfterViewInit(): void {
    const sub = this.state.getStore(DataStores.WORK)?.observe(WorkViewerStorePropNames.SELECTED_WORK_ORDER).subscribe(x => this.record = x);
    if (sub) { this.subs.push(sub); }
  }
}
