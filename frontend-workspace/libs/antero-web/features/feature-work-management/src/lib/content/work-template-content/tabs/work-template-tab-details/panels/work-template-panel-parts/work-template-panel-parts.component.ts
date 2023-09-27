import { Component, AfterViewInit } from '@angular/core';
import { WorkTemplatePanelBaseComponent } from '../work-template-panel.base';
import { DataStores, UIStorePropNames } from '@allmax-angular/antero-web/types';
import { combineLatest } from 'rxjs';
import { WorkStatePropNames } from '../../../../../../types/store.schema';
import { MasterDetailViewTypes } from '@allmax-angular/shared/ui/master-detail';

@Component({
  selector: 'ant-work-template-panel-parts',
  templateUrl: './work-template-panel-parts.component.html',
  styleUrls: ['./work-template-panel-parts.component.scss'],
})
export class WorkTemplatePanelPartsComponent extends WorkTemplatePanelBaseComponent implements AfterViewInit {
  public ngAfterViewInit(): void {
    const workStore = this.state.getStore(DataStores.WORK);
    const uiStore = this.state.getStore(DataStores.UI);

    if (workStore && uiStore) {
      const sub = combineLatest([
        workStore.observe(WorkStatePropNames.SELECTED_WORK_TEMPLATE),
        uiStore.observe(UIStorePropNames.VIEW_TYPE)
      ]).subscribe(async ([
        workTemplate,
        viewType
      ]) => {
        this.viewType = viewType;
        if (workTemplate) {
          if (this.viewType === MasterDetailViewTypes.LIST) {
            this.data = await this.ctrl.getParts(workTemplate.id, [ 'partQuantity.part.name' ]);
            this.data?.colDef?.findByDataField('partQuantity.part.name')?.updateOptions({ cellTemplate: 'cellTemplate' })
          } else {
            this.data = await this.ctrl.getParts(workTemplate.id, [
              'partQuantity.part.name',
              'partQuantity.part.description',
              'partQuantity.warehouse.name',
              'partQuantity.area.name',
              'partQuantity.part.stockingUnit',
              'estimatedQuantity'
            ]);
          }
        }
      })
      if (sub) { this.subs.push(sub); }
    }
  }
}
