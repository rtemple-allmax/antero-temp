import { AfterViewInit, Component, OnInit } from '@angular/core';
import { WorkViewerPanelBaseComponent } from '../work-viewer-panel.base';
import { DataStores, UIStorePropNames } from '@allmax-angular/antero-web/types';
import { combineLatest } from 'rxjs';
import { WorkViewerStorePropNames } from '../../../../work-viewer.schema';
import { MasterDetailViewTypes } from '@allmax-angular/shared/ui/master-detail';

@Component({
  selector: 'ant-work-viewer-panel-misc',
  templateUrl: './work-viewer-panel-misc.component.html',
  styleUrls: ['./work-viewer-panel-misc.component.scss'],
})
export class WorkViewerPanelMiscComponent extends WorkViewerPanelBaseComponent implements AfterViewInit {
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
            this.data = await this.ctrl.getMisc(workOrder.id, [ 'description' ])
            this.data?.colDef?.findByDataField('description')?.updateOptions({ cellTemplate: 'cellTemplate' })
          } else {
            this.data = await this.ctrl.getMisc(workOrder.id, [
              'description',
              'cost'
            ])
          }
        }
      });
      if (sub) { this.subs.push(sub); }
    }
  }
}
