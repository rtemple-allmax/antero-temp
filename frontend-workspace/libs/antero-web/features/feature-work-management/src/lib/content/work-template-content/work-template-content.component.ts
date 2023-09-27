import { ContentBaseComponent } from '@allmax-angular/antero-web/bases';
import { WorkTemplate } from '@allmax-angular/antero-web/entities';
import { DataStores } from '@allmax-angular/antero-web/types';
import { Nullable } from '@allmax-angular/shared/types';
import { Component, OnInit } from '@angular/core';
import { WorkStatePropNames } from '../../types/store.schema';

@Component({
  selector: 'ant-work-template-content',
  templateUrl: './work-template-content.component.html',
  styleUrls: ['./work-template-content.component.scss'],
})
export class WorkTemplateContentComponent extends ContentBaseComponent implements OnInit {
  public record: Nullable<WorkTemplate>;

  public ngOnInit(): void {
    const sub = this.state.getStore(DataStores.WORK)?.observe(WorkStatePropNames.SELECTED_WORK_TEMPLATE)?.subscribe(x => this.record = x);
    if (sub) { this.subs.push(sub); }
  }
}
