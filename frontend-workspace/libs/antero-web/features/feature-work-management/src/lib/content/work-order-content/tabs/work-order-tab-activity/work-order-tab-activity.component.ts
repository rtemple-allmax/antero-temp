import { TabBaseComponent } from '@allmax-angular/antero-web/bases';
import { DataStores, UIStorePropNames } from '@allmax-angular/antero-web/types';
import { Nullable, TableData } from '@allmax-angular/shared/types';
import { Component, AfterViewInit, inject } from '@angular/core';
import { combineLatest } from 'rxjs';
import { WorkStatePropNames } from '../../../../types/store.schema';
import { MasterDetailViewTypes } from '@allmax-angular/shared/ui/master-detail';
import { CurrentWorkController } from '@allmax-angular/antero-web/data-access/current-work-controller';

@Component({
  selector: 'ant-work-order-tab-activity',
  templateUrl: './work-order-tab-activity.component.html',
  styleUrls: ['./work-order-tab-activity.component.scss'],
})
export class WorkOrderTabActivityComponent extends TabBaseComponent implements AfterViewInit {
  public data: Nullable<TableData>;
  private ctrl = inject(CurrentWorkController);

  public ngAfterViewInit(): void {
    const workStore = this.state.getStore(DataStores.WORK);
    const uiStore = this.state.getStore(DataStores.UI);
    if (workStore && uiStore) {
      combineLatest([
        workStore.observe(WorkStatePropNames.SELECTED_WORK_ORDERS),
        uiStore.observe(UIStorePropNames.VIEW_TYPE)  
      ]).subscribe(async ([
        workOrders,
        viewType
      ]) => {
        if (workOrders && workOrders.length > 0) {
          const id = workOrders[0].id;
          if (viewType === MasterDetailViewTypes.LIST) {
            this.data = await this.ctrl.getActivity(id, [ 'actionDescription' ])
            this.data?.colDef?.findByDataField('actionDescription')?.updateOptions({ cellTemplate: 'cellTemplate' })
          } else {
            this.data = await this.ctrl.getLabor(id, [
              'actionDescription',
            ])
          }
        }
      });
    }
  }
}
