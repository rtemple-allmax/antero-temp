import { Component, AfterViewInit } from '@angular/core';
import { WorkOrderPanelBaseComponent } from '../work-order-panel.base';
import { DataStores, UIStorePropNames } from '@allmax-angular/antero-web/types';
import { combineLatest } from 'rxjs';
import { WorkStatePropNames } from '../../../../../../types/store.schema';
import { MasterDetailViewTypes } from '@allmax-angular/shared/ui/master-detail';

@Component({
  selector: 'ant-work-order-panel-contractors',
  templateUrl: './work-order-panel-contractors.component.html',
  styleUrls: ['./work-order-panel-contractors.component.scss'],
})
export class WorkOrderPanelContractorsComponent extends WorkOrderPanelBaseComponent implements AfterViewInit {
  public ngAfterViewInit(): void {
    const workStore = this.state.getStore(DataStores.WORK);
    const uiStore = this.state.getStore(DataStores.UI);
    if (workStore && uiStore) {
      const sub = combineLatest([
        workStore.observe(WorkStatePropNames.SELECTED_WORK_ORDERS),
        uiStore.observe(UIStorePropNames.VIEW_TYPE)
      ]).subscribe(async ([
        workOrders,
        viewType
      ]) => {
        if (workOrders && workOrders.length > 0) {
          const id = workOrders[0].id;
          if (viewType === MasterDetailViewTypes.LIST) {
            this.data = await this.ctrl.getContractors(id, [ 'supplier.name' ])
            this.data?.colDef?.findByDataField('supplier.name')?.updateOptions({ cellTemplate: 'cellTemplate' })
          } else {
            this.data = await this.ctrl.getContractors(id, [
              'supplier.name',
              'invoice',
              'partCost',
              'laborCost',
              'taxCost',
              'miscCost'
            ])
          }
        }
      });
      if (sub) {
        this.subs.push(sub);
      }
    }
  }
}
