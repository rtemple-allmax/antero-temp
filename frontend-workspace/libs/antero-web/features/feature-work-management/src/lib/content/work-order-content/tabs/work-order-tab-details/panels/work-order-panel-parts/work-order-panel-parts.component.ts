import { DataStores, UIStorePropNames } from '@allmax-angular/antero-web/types';
import { MasterDetailViewTypes } from '@allmax-angular/shared/ui/master-detail';
import { AfterViewInit, Component } from '@angular/core';
import { combineLatest } from 'rxjs';
import { WorkOrderPanelBaseComponent } from '../work-order-panel.base';
import { WorkStatePropNames } from '../../../../../../types/store.schema';

@Component({
  selector: 'ant-work-order-panel-parts',
  templateUrl: './work-order-panel-parts.component.html',
  styleUrls: ['./work-order-panel-parts.component.scss'],
})
export class WorkOrderPanelPartsComponent extends WorkOrderPanelBaseComponent implements AfterViewInit {
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
            this.data = await this.ctrl.getParts(id, [ 'partQuantity.part.name' ])
            this.data?.colDef?.findByDataField('partQuantity.part.name')?.updateOptions({ cellTemplate: 'cellTemplate' })
          } else {
            this.data = await this.ctrl.getParts(id, [
              'partQuantity.part.name',
              'partQuantity.part.description',
              'partQuantity.warehouse.name',
              'partQuantity.area.name',
              'unit',
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
