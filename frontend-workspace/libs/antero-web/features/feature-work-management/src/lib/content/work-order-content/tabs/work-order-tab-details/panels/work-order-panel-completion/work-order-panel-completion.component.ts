import { WorkOrder } from '@allmax-angular/antero-web/entities';
import { DataStores } from '@allmax-angular/antero-web/types';
import { Nullable } from '@allmax-angular/shared/types';
import { Component, AfterViewInit } from '@angular/core';
import { WorkStatePropNames } from '../../../../../../types/store.schema';
import { WorkOrderPanelBaseComponent } from '../work-order-panel.base';

@Component({
  selector: 'ant-work-order-panel-completion',
  templateUrl: './work-order-panel-completion.component.html',
  styleUrls: ['./work-order-panel-completion.component.scss'],
})
export class WorkOrderPanelCompletionComponent extends WorkOrderPanelBaseComponent implements AfterViewInit {
  public record: Nullable<WorkOrder>;

  public ngAfterViewInit(): void {
    const sub = this.state.getStore(DataStores.WORK)?.observe(WorkStatePropNames.SELECTED_WORK_ORDERS).subscribe(x => {
      if (x && x.length > 0) {
        this.record = x[0];
      }
    });
    if (sub) {
      this.subs.push(sub);
    }
  }
}
