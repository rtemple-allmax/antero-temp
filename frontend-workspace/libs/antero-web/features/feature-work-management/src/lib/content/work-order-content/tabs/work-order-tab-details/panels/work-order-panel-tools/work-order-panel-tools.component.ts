import { Component, AfterViewInit } from '@angular/core';
import { WorkOrderPanelBaseComponent } from '../work-order-panel.base';
import { DataStores, UIStorePropNames } from '@allmax-angular/antero-web/types';
import { combineLatest } from 'rxjs';
import { WorkStatePropNames } from '../../../../../../types/store.schema';
import { MasterDetailViewTypes } from '@allmax-angular/shared/ui/master-detail';

@Component({
  selector: 'ant-work-order-panel-tools',
  templateUrl: './work-order-panel-tools.component.html',
  styleUrls: ['./work-order-panel-tools.component.scss'],
})
export class WorkOrderPanelToolsComponent extends WorkOrderPanelBaseComponent implements AfterViewInit{
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
            this.data = await this.ctrl.getTools(id, [ 'equipment.name' ])
            this.data?.colDef?.findByDataField('equipment.name')?.updateOptions({ cellTemplate: 'cellTemplate' })
          } else {
            this.data = await this.ctrl.getTools(id, [
              'equipment.name',
              'equipment.description',
              'workOrderUnit',
              'estimatedQuantity',
              'actualQuantity'
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
