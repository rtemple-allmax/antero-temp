import { WorkOrder } from '@allmax-angular/antero-web/entities';
import { Nullable } from '@allmax-angular/shared/types';
import { Component, AfterViewInit } from '@angular/core';
import { CurrentWorkPanelBaseComponent } from '../current-work-panel.base';

@Component({
  selector: 'ant-current-work-admin-panel',
  templateUrl: './current-work-admin-panel.component.html',
  styleUrls: ['./current-work-admin-panel.component.scss'],
})
export class CurrentWorkAdminPanelComponent extends CurrentWorkPanelBaseComponent implements AfterViewInit {
  public record: Nullable<WorkOrder>;

  public ngAfterViewInit(): void {
    this.subs.push(this.workStore.selection$.subscribe(x => {
      if (x && x.length > 0) {
        this.record = x[0];
      }
    }))
  }
}
