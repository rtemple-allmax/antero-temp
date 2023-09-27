import { Task } from '@allmax-angular/antero-web/entities';
import { Nullable } from '@allmax-angular/shared/types';
import { Component, AfterViewInit, inject } from '@angular/core';
import { CurrentWorkPanelBaseComponent } from '../current-work-panel.base';
import { TaskControllerService } from '@allmax-angular/antero-web/data-access/task-controller';
import { ChecklistItem } from '@allmax-angular/antero-web/types';

@Component({
  selector: 'ant-current-work-task-panel',
  templateUrl: './current-work-task-panel.component.html',
  styleUrls: ['./current-work-task-panel.component.scss'],
})
export class CurrentWorkTaskPanelComponent extends CurrentWorkPanelBaseComponent implements AfterViewInit {
  public record: Nullable<Task>;
  public checklist: ChecklistItem[] = [];
  public taskCtrl = inject(TaskControllerService);

  public ngAfterViewInit(): void {
    this.subs.push(this.workStore.selection$.subscribe(async (x) => {
      if (x && x.length > 0) {
        if (x[0].taskID) {
          this.record = await this.taskCtrl.getByID(x[0].taskID);
        }
        if (x[0].checklist) {
          this.checklist = x[0].checklist;
        }
      }
    }))
  }
}
