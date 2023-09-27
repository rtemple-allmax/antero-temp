import { Component, AfterViewInit } from '@angular/core';
import { WorkTemplatePanelBaseComponent } from '../work-template-panel.base';
import { DataStores, UIStorePropNames } from '@allmax-angular/antero-web/types';
import { combineLatest } from 'rxjs';
import { WorkStatePropNames } from '../../../../../../types/store.schema';
import { MasterDetailViewTypes } from '@allmax-angular/shared/ui/master-detail';

@Component({
  selector: 'ant-work-template-panel-tools',
  templateUrl: './work-template-panel-tools.component.html',
  styleUrls: ['./work-template-panel-tools.component.scss'],
})
export class WorkTemplatePanelToolsComponent extends WorkTemplatePanelBaseComponent implements AfterViewInit {
  public ngAfterViewInit(): void {
    const workStore = this.state.getStore(DataStores.WORK);
    const uiStore = this.state.getStore(DataStores.UI);
    if (workStore && uiStore) {
      const sub = combineLatest([
        workStore.observe(WorkStatePropNames.SELECTED_WORK_TEMPLATE),
        uiStore.observe(UIStorePropNames.VIEW_TYPE)
      ]).subscribe(([
        workTemplate,
        viewType
      ]) => {
        this.viewType = viewType;
        if (workTemplate) {
          if (this.viewType === MasterDetailViewTypes.LIST) {
            this.data = this.ctrl.getTools(workTemplate.id, [ 'equipment.name' ]);
            this.data?.colDef?.findByDataField('equipment.name')?.updateOptions({ cellTemplate: 'cellTemplate' })
          } else {
            this.data = this.ctrl.getTools(workTemplate.id, [
              'equipment.name',
              'equipment.description',
              'equipment.department.name',
              'workOrderUnits',
              'estimatedQuantity'
            ]);
          }
        }
      });
      if (sub) { this.subs.push(sub); }
    }
  }
}
