import { AfterViewInit, Component, Output, EventEmitter, ViewChild } from '@angular/core';
import { WorkViewerPanelBaseComponent } from '../work-viewer-panel.base';
import { Task } from '@allmax-angular/antero-web/entities';
import { LabeledState, Nullable } from '@allmax-angular/shared/types';
import { DataStores } from '@allmax-angular/antero-web/types';
import { WorkViewerStorePropNames } from '../../../../work-viewer.schema';
import { ProgressBarComponent } from '@allmax-angular/shared/ui/progress-bar';

@Component({
  selector: 'ant-work-viewer-panel-task',
  templateUrl: './work-viewer-panel-task.component.html',
  styleUrls: ['./work-viewer-panel-task.component.scss'],
})
export class WorkViewerPanelTaskComponent extends WorkViewerPanelBaseComponent implements AfterViewInit {
  @ViewChild(ProgressBarComponent) public progress: Nullable<ProgressBarComponent>;
  @Output() public editInstructions = new EventEmitter();

  public record: Nullable<Task>;

  public checklist = [
    { id: 0, label: 'Change oil and filter', order: 0, state: false },
    { id: 1, label: 'Rotate tires, checking pressure', order: 1, state: false },
    { id: 2, label: 'Top off all fluids', order: 2, state: false },
    { id: 3, label: 'Check all belts', order: 3, state: false },
    { id: 4, label: 'Check all belts for wear and tear', order: 4, state: false }
  ];

  public updatedChecklist = this.checklist;
  
  public get completedCount(): number {
    return this.updatedChecklist.filter(x => x.state).length
  }
  
  public ngAfterViewInit(): void {
    const sub = this.state.getStore(DataStores.VIEWER_WORK)?.observe(WorkViewerStorePropNames.SELECTED_WORK_ORDER).subscribe(x => {
      if (x?.task) {
        this.record = x.task;
      }
    });
    if (sub) { this.subs.push(sub); }
  }

  public editHandler(): void {
    this.editInstructions.emit();
  }
  
  public checklistChangedHandler(checklist: LabeledState[]): void {
    this.updatedChecklist = checklist;
  }
}
