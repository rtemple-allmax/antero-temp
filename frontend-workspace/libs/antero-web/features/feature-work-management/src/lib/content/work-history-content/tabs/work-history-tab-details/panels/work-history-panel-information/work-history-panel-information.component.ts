import { Component, AfterViewInit } from '@angular/core';
import { WorkHistoryPanelBaseComponent } from '../work-history-panel.base';
import { Nullable } from '@allmax-angular/shared/types';
import { WorkHistory } from '@allmax-angular/antero-web/entities';
import { DataStores } from '@allmax-angular/antero-web/types';
import { WorkStatePropNames } from 'libs/antero-web/features/feature-work-management/src/lib/types/store.schema';

@Component({
  selector: 'ant-work-history-panel-information',
  templateUrl: './work-history-panel-information.component.html',
  styleUrls: ['./work-history-panel-information.component.scss'],
})
export class WorkHistoryPanelInformationComponent extends WorkHistoryPanelBaseComponent implements AfterViewInit {
  public record: Nullable<WorkHistory>;

  public ngAfterViewInit(): void {
    const sub = this.state.getStore(DataStores.WORK)?.observe(WorkStatePropNames.SELECTED_WORK_HISTORY).subscribe(x => this.record = x);
    if (sub) {
      this.subs.push(sub);
    }
  }
}
