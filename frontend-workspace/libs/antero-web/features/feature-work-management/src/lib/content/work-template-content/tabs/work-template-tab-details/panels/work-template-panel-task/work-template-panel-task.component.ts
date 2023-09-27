import { Component, AfterViewInit, inject } from '@angular/core';
import { WorkTemplatePanelBaseComponent } from '../work-template-panel.base';
import { Nullable } from '@allmax-angular/shared/types';
import { Task } from '@allmax-angular/antero-web/entities';
import { DataStores } from '@allmax-angular/antero-web/types';
import { WorkStatePropNames } from 'libs/antero-web/features/feature-work-management/src/lib/types/store.schema';
import { TaskControllerService } from '@allmax-angular/antero-web/data-access/task-controller';

@Component({
  selector: 'ant-work-template-panel-task',
  templateUrl: './work-template-panel-task.component.html',
  styleUrls: ['./work-template-panel-task.component.scss'],
})
export class WorkTemplatePanelTaskComponent extends WorkTemplatePanelBaseComponent implements AfterViewInit {
  public record: Nullable<Task>;
  private taskCtrl = inject(TaskControllerService)

  public ngAfterViewInit(): void {
    const sub = this.state.getStore(DataStores.WORK)?.observe(WorkStatePropNames.SELECTED_WORK_TEMPLATE).subscribe(async (x) => {
      if (x && x.taskID) {
        this.record = await this.taskCtrl.getByID(x.taskID);
      }
    })
    if (sub) { this.subs.push(sub); }
  }
}
