import { Component, AfterViewInit } from '@angular/core';
import { WorkHistoryPanelBaseComponent } from '../work-history-panel.base';
import { DataStores, UIStorePropNames } from '@allmax-angular/antero-web/types';
import { combineLatest } from 'rxjs';
import { MasterDetailViewTypes } from '@allmax-angular/shared/ui/master-detail';
import { WorkStatePropNames } from '../../../../../../types/store.schema';

@Component({
  selector: 'ant-work-history-panel-labor',
  templateUrl: './work-history-panel-labor.component.html',
  styleUrls: ['./work-history-panel-labor.component.scss'],
})
export class WorkHistoryPanelLaborComponent extends WorkHistoryPanelBaseComponent implements AfterViewInit {
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
            this.data = this.ctrl.getLabor(workHistory.id, [ 'laborClass' ]);
            this.data?.colDef?.findByDataField('laborClass')?.updateOptions({ cellTemplate: 'cellTemplate' })
          } else {
            this.data = this.ctrl.getLabor(workHistory.id, [
              'laborClass',
              'rate',
              'laborAccount',
              'user',
              'laborType',
              'multiplier',
              'estimatedHours',
              'actualHours'
            ]);
          }
        }
      });
    }
  }
}
