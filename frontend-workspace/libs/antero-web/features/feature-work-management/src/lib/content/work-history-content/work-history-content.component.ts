import { ContentBaseComponent } from '@allmax-angular/antero-web/bases';
import { WorkHistory } from '@allmax-angular/antero-web/entities';
import { DataStores } from '@allmax-angular/antero-web/types';
import { Nullable } from '@allmax-angular/shared/types';
import { Component, OnInit } from '@angular/core';
import { WorkStatePropNames } from '../../types/store.schema';

@Component({
  selector: 'ant-work-history-content',
  templateUrl: './work-history-content.component.html',
  styleUrls: ['./work-history-content.component.scss'],
})
export class WorkHistoryContentComponent extends ContentBaseComponent implements OnInit  {
  public record: Nullable<WorkHistory>;

  public ngOnInit(): void {
    const sub = this.state.getStore(DataStores.WORK)?.observe(WorkStatePropNames.SELECTED_WORK_HISTORY).subscribe(x => this.record = x);
    if (sub) { this.subs.push(sub); }
  }
}
