import { Component, AfterViewInit } from '@angular/core';
import { WorkTemplatePanelBaseComponent } from '../work-template-panel.base';
import { DataStores, UIStorePropNames } from '@allmax-angular/antero-web/types';
import { combineLatest } from 'rxjs';
import { WorkStatePropNames } from '../../../../../../types/store.schema';
import { MasterDetailViewTypes } from '@allmax-angular/shared/ui/master-detail';
import { WorkOrder } from '@allmax-angular/antero-web/entities';

@Component({
  selector: 'ant-work-template-panel-work-orders',
  templateUrl: './work-template-panel-work-orders.component.html',
  styleUrls: ['./work-template-panel-work-orders.component.scss'],
})
export class WorkTemplatePanelWorkOrdersComponent extends WorkTemplatePanelBaseComponent implements AfterViewInit {
  public records: WorkOrder[] = [];

  public ngAfterViewInit(): void {
    const workStore = this.state.getStore(DataStores.WORK);
    const uiStore = this.state.getStore(DataStores.UI);
    if (workStore && uiStore) {
      const sub = combineLatest([
        workStore.observe(WorkStatePropNames.SELECTED_WORK_TEMPLATE),
        uiStore.observe(UIStorePropNames.VIEW_TYPE)
      ]).subscribe(async ([
        workTemplate,
        viewType
      ]) => {
        this.viewType = viewType;
        if (workTemplate) {
          if (this.viewType === MasterDetailViewTypes.LIST) {
            this.records = (await this.ctrl.getWorkOrders(workTemplate.id)).open_wos;
            // this.data?.colDef?.findByDataField('equipment.name')?.updateOptions({ cellTemplate: 'cellTemplate' });
          } else {
            // this.data = this.ctrl.getWorkOrders(workTemplate.id, [
            //   'workOrderNumber',
            //   'dateScheduled',
            //   'workStatus.name'
            // ]);
          }
        }
      });
      if (sub) { this.subs.push(sub); }
    }
  }
}
