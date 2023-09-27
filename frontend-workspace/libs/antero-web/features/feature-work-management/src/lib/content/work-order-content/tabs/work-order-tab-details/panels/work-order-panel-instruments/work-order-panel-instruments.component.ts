import { Component, AfterViewInit } from '@angular/core';
import { WorkOrderPanelBaseComponent } from '../work-order-panel.base';
import { Nullable } from '@allmax-angular/shared/types';
import { WorkOrder } from '@allmax-angular/antero-web/entities';
import { DataStores, UIStorePropNames } from '@allmax-angular/antero-web/types';
import { WorkStatePropNames } from 'libs/antero-web/features/feature-work-management/src/lib/types/store.schema';
import { combineLatest } from 'rxjs';
import { MasterDetailViewTypes } from '@allmax-angular/shared/ui/master-detail';

@Component({
  selector: 'ant-work-order-panel-instruments',
  templateUrl: './work-order-panel-instruments.component.html',
  styleUrls: ['./work-order-panel-instruments.component.scss'],
})
export class WorkOrderPanelInstrumentsComponent extends WorkOrderPanelBaseComponent implements AfterViewInit {
  public record: Nullable<WorkOrder>;


  public ngAfterViewInit(): void {
    const workStore = this.state.getStore(DataStores.WORK);
    const uiStore = this.state.getStore(DataStores.UI);

    if (workStore && uiStore) {
      const sub = combineLatest([
        workStore.observe(WorkStatePropNames.SELECTED_WORK_ORDERS),
        uiStore.observe(UIStorePropNames.VIEW_TYPE)
      ]).subscribe(([
        workOrders,
        viewType
      ]) => {
        if (workOrders && workOrders.length > 0) {
          this.record = workOrders[0];
          this.viewType = viewType;
          this.getData();
        }
      })
      if (sub) {
        this.subs.push(sub);
      }
    }
  }

  public getData(): void {
    if (this.record) {
      if (this.viewType === MasterDetailViewTypes.LIST) {
        this.data = this.ctrl.getInstruments(this.record.id, [ 'instrument.name' ])
        this.data?.colDef?.findByDataField('instrument.name')?.updateOptions({ cellTemplate: 'cellTemplate' })
      } else {
        this.data = this.ctrl.getInstruments(this.record.id, [
          'instrument.name',
          'instrument.units',
          'instrument.reading'
        ])
      }
    }
  }
}
