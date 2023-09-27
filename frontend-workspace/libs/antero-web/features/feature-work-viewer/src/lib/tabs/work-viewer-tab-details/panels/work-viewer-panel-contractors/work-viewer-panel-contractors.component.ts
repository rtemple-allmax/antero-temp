import { AfterViewInit, Component, OnInit } from '@angular/core';
import { WorkViewerPanelBaseComponent } from '../work-viewer-panel.base';
import { DataStores, UIStorePropNames } from '@allmax-angular/antero-web/types';
import { WorkViewerStorePropNames } from '../../../../work-viewer.schema';
import { combineLatest } from 'rxjs';
import { MasterDetailViewTypes } from '@allmax-angular/shared/ui/master-detail';

@Component({
  selector: 'ant-work-viewer-panel-contractors',
  templateUrl: './work-viewer-panel-contractors.component.html',
  styleUrls: ['./work-viewer-panel-contractors.component.scss'],
})
export class WorkViewerPanelContractorsComponent extends WorkViewerPanelBaseComponent implements AfterViewInit {
  public ngAfterViewInit(): void {
    const workViewerStore = this.state.getStore(DataStores.VIEWER_WORK);
    const uiStore = this.state.getStore(DataStores.UI);
    if (workViewerStore && uiStore) {
      const sub = combineLatest([
        workViewerStore.observe(WorkViewerStorePropNames.SELECTED_WORK_ORDER),
        uiStore.observe(UIStorePropNames.VIEW_TYPE)
      ]).subscribe(async ([
        workOrder,
        viewType
      ]) => {
        if (workOrder) {
          if (viewType === MasterDetailViewTypes.LIST) {
            this.data = await this.ctrl.getContractors(workOrder.id, [ 'supplier.name' ])
            this.data?.colDef?.findByDataField('supplier.name')?.updateOptions({ cellTemplate: 'cellTemplate' })
          } else {
            this.data = await this.ctrl.getContractors(workOrder.id, [
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
