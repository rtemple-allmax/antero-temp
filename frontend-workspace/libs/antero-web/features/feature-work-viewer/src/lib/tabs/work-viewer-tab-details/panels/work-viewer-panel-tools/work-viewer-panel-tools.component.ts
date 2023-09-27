import { AfterViewInit, Component, OnInit } from '@angular/core';
import { WorkViewerPanelBaseComponent } from '../work-viewer-panel.base';
import { DataStores, UIStorePropNames } from '@allmax-angular/antero-web/types';
import { combineLatest } from 'rxjs';
import { WorkViewerStorePropNames } from '../../../../work-viewer.schema';
import { MasterDetailViewTypes } from '@allmax-angular/shared/ui/master-detail';

@Component({
  selector: 'ant-work-viewer-panel-tools',
  templateUrl: './work-viewer-panel-tools.component.html',
  styleUrls: ['./work-viewer-panel-tools.component.scss'],
})
export class WorkViewerPanelToolsComponent extends WorkViewerPanelBaseComponent implements AfterViewInit {
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
          this.viewType = viewType;
          if (this.viewType === MasterDetailViewTypes.LIST) {
            this.data = await this.ctrl.getTools(workOrder.id, [ 'equipment.name' ])
            this.data?.colDef?.findByDataField('equipment.name')?.updateOptions({ cellTemplate: 'cellTemplate' })
          } else {
            this.data = await this.ctrl.getTools(workOrder.id, [
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
