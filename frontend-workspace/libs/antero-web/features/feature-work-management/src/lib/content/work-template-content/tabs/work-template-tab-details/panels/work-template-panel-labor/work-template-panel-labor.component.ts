import { Component, AfterViewInit } from '@angular/core';
import { WorkTemplatePanelBaseComponent } from '../work-template-panel.base';
import { combineLatest } from 'rxjs';
import { DataStores, UIStorePropNames } from '@allmax-angular/antero-web/types';
import { WorkStatePropNames } from '../../../../../../types/store.schema';
import { MasterDetailViewTypes } from '@allmax-angular/shared/ui/master-detail';

@Component({
  selector: 'ant-work-template-panel-labor',
  templateUrl: './work-template-panel-labor.component.html',
  styleUrls: ['./work-template-panel-labor.component.scss'],
})
export class WorkTemplatePanelLaborComponent extends WorkTemplatePanelBaseComponent implements AfterViewInit {
  public ngAfterViewInit(): void {
    const workStore = this.state.getStore(DataStores.WORK);
    const uiStore = this.state.getStore(DataStores.UI);
    if (workStore && uiStore) {
      combineLatest([
        workStore.observe(WorkStatePropNames.SELECTED_WORK_TEMPLATE),
        uiStore.observe(UIStorePropNames.VIEW_TYPE)
      ]).subscribe(([
        workTemplate,
        viewType
      ]) => {
        this.viewType = viewType;
        if (workTemplate) {
          if (this.viewType === MasterDetailViewTypes.LIST) {
            this.data = this.ctrl.getLabor(workTemplate.id, [ 'laborClass.name' ]);
            this.data?.colDef?.findByDataField('laborClass.name')?.updateOptions({ cellTemplate: 'cellTemplate' });
          } else {
            this.data = this.ctrl.getLabor(workTemplate.id, [
              'laborClass.name',
              'laborAccount.name',
              'laborType.name',
              'estimatedHours'
            ]);
          }
        }
      });
    }
  }
}
