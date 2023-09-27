import { AfterViewInit, Component, OnInit } from '@angular/core';
import { WorkViewerPanelBaseComponent } from '../work-viewer-panel.base';
import { DataStores, UIStorePropNames } from '@allmax-angular/antero-web/types';
import { combineLatest } from 'rxjs';
import { WorkViewerStorePropNames } from '../../../../work-viewer.schema';
import { MasterDetailViewTypes } from '@allmax-angular/shared/ui/master-detail';

@Component({
  selector: 'ant-work-viewer-panel-labor',
  templateUrl: './work-viewer-panel-labor.component.html',
  styleUrls: ['./work-viewer-panel-labor.component.scss'],
})
export class WorkViewerPanelLaborComponent extends WorkViewerPanelBaseComponent implements AfterViewInit {
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
        if (workOrder?.id) {
          this.viewType = viewType;
          if (this.viewType === MasterDetailViewTypes.LIST) {
            this.data = await this.ctrl.getLabor(workOrder.id, [ 'laborClass.name' ])
            this.data?.colDef?.findByDataField('laborClass.name')?.updateOptions({ cellTemplate: 'cellTemplate' })
          } else {
            this.data = await this.ctrl.getLabor(workOrder.id, [
              'laborClass.name',
              'laborAccount.name',
              'user.name',
              'laborType.name',
              'estimatedHours',
              'actualHours'
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
