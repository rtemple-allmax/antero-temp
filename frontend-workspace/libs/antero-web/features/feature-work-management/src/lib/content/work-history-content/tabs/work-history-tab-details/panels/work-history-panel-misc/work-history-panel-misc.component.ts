import { Component, AfterViewInit } from '@angular/core';
import { WorkHistoryPanelBaseComponent } from '../work-history-panel.base';
import { DataStores, UIStorePropNames } from '@allmax-angular/antero-web/types';
import { combineLatest } from 'rxjs';
import { WorkStatePropNames } from '../../../../../../types/store.schema';
import { MasterDetailViewTypes } from '@allmax-angular/shared/ui/master-detail';

@Component({
  selector: 'ant-work-history-panel-misc',
  templateUrl: './work-history-panel-misc.component.html',
  styleUrls: ['./work-history-panel-misc.component.scss'],
})
export class WorkHistoryPanelMiscComponent extends WorkHistoryPanelBaseComponent implements AfterViewInit {
  public ngAfterViewInit(): void {
    const workStore = this.state.getStore(DataStores.WORK);
    const uiStore = this.state.getStore(DataStores.UI);

    if (workStore && uiStore) {
      const sub = combineLatest([
        workStore.observe(WorkStatePropNames.SELECTED_WORK_HISTORY),
        uiStore.observe(UIStorePropNames.VIEW_TYPE)
      ]).subscribe(([
        workHistory,
        viewType
      ]) => {
        if (workHistory) {
          if (viewType === MasterDetailViewTypes.LIST) {
            this.data = this.ctrl.getMisc(workHistory.id, [ 'description' ]);
            this.data?.colDef?.findByDataField('description')?.updateOptions({ cellTemplate: 'cellTemplate' })
          } else {
            this.data = this.ctrl.getMisc(workHistory.id, [ 'description', 'cost' ]);
          }
        }
      });
      if (sub) {
        this.subs.push(sub);
      }
    }
  }
}
