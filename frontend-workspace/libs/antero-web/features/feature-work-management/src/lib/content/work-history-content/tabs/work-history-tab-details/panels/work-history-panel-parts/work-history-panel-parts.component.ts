import { Component, AfterViewInit } from '@angular/core';
import { WorkHistoryPanelBaseComponent } from '../work-history-panel.base';
import { DataStores, UIStorePropNames } from '@allmax-angular/antero-web/types';
import { combineLatest } from 'rxjs'
import { WorkStatePropNames } from 'libs/antero-web/features/feature-work-management/src/lib/types/store.schema';
import { MasterDetailViewTypes } from '@allmax-angular/shared/ui/master-detail';

@Component({
  selector: 'ant-work-history-panel-parts',
  templateUrl: './work-history-panel-parts.component.html',
  styleUrls: ['./work-history-panel-parts.component.scss'],
})
export class WorkHistoryPanelPartsComponent extends WorkHistoryPanelBaseComponent implements AfterViewInit {
  public ngAfterViewInit(): void {
    const workStore = this.state.getStore(DataStores.WORK);
    const uiStore = this.state.getStore(DataStores.UI);

    if (workStore && uiStore) {
      combineLatest([
        workStore.observe(WorkStatePropNames.SELECTED_WORK_HISTORY),
        uiStore.observe(UIStorePropNames.VIEW_TYPE)
      ]).subscribe(([
        workHistory,
        viewType
      ]) => {
        if (workHistory) {
          if (viewType === MasterDetailViewTypes.LIST) {
            this.data = this.ctrl.getParts(workHistory.id, [ 'part' ])
            this.data?.colDef?.findByDataField('part')?.updateOptions({ cellTemplate: 'cellTemplate' });
          } else {
            this.data = this.ctrl.getParts(workHistory.id, [
              'part',
              'partDescription',
              'warehouse',
              'area',
              'unit',
              'cost',
              'estimatedQuantity',
              'actualQuantity'
            ]);
          }
        }
      })
    }
  }
}
