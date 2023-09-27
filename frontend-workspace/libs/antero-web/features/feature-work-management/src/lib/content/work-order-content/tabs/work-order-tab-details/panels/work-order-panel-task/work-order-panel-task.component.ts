import { PanelBaseComponent } from '@allmax-angular/antero-web/bases';
import { Task } from '@allmax-angular/antero-web/entities';
import { DataStores } from '@allmax-angular/antero-web/types';
import { Nullable } from '@allmax-angular/shared/types';
import { Component, AfterViewInit } from '@angular/core';
import { WorkStatePropNames } from '../../../../../../types/store.schema';
import { WorkOrderPanelBaseComponent } from '../work-order-panel.base';

@Component({
  selector: 'ant-work-order-panel-task',
  templateUrl: './work-order-panel-task.component.html',
  styleUrls: ['./work-order-panel-task.component.scss'],
})
export class WorkOrderPanelTaskComponent extends WorkOrderPanelBaseComponent implements AfterViewInit {
  public record: Nullable<Task>;

  public ngAfterViewInit(): void {
    const sub = this.state.getStore(DataStores.WORK)?.observe(WorkStatePropNames.SELECTED_WORK_ORDERS).subscribe(x => {
      if (x && x.length > 0) {
        this.record = x[0].task;
      }
    });
    if (sub) {
      this.subs.push(sub);
    }
  }
}
