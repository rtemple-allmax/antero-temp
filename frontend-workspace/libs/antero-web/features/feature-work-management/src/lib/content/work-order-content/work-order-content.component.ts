import { Component, OnInit} from '@angular/core';
import { ContentBaseComponent } from '@allmax-angular/antero-web/bases';
import { Nullable } from '@allmax-angular/shared/types';
import { WorkOrder } from '@allmax-angular/antero-web/entities';
import { WorkStatePropNames } from '../../types/store.schema';
import { DataStores } from '@allmax-angular/antero-web/types';

@Component({
  selector: 'ant-work-order-content',
  templateUrl: './work-order-content.component.html',
  styleUrls: ['./work-order-content.component.scss'],
})
export class WorkOrderContentComponent extends ContentBaseComponent implements OnInit {
  public record: Nullable<WorkOrder>;

  public ngOnInit(): void {
    const sub = this.state.getStore(DataStores.WORK)?.observe(WorkStatePropNames.SELECTED_WORK_ORDERS)?.subscribe(x => {
      if (x.length > 0) {
        this.record = x[0];
      }
    })
    if (sub) {
      this.subs.push(sub);
    }
  }
}
