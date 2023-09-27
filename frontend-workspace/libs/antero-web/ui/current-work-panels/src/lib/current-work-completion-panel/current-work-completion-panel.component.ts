import { WorkOrder } from '@allmax-angular/antero-web/entities';
import { Nullable } from '@allmax-angular/shared/types';
import { Component, AfterViewInit } from '@angular/core';
import { CurrentWorkPanelBaseComponent } from '../current-work-panel.base';

@Component({
  selector: 'ant-current-work-completion-panel',
  templateUrl: './current-work-completion-panel.component.html',
  styleUrls: ['./current-work-completion-panel.component.scss'],
})
export class CurrentWorkCompletionPanelComponent extends CurrentWorkPanelBaseComponent implements AfterViewInit {
  public record: Nullable<WorkOrder>;

  public ngAfterViewInit(): void {
    this.subs.push(this.workStore.selection$.subscribe(x => {
      if (x && x.length > 0) {
        this.record = x[0];
      }
    }))
  }
}
