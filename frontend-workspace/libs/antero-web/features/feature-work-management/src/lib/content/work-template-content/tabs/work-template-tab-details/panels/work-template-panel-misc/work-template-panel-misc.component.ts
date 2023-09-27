import { AfterViewInit, Component } from '@angular/core';
import { WorkTemplatePanelBaseComponent } from '../work-template-panel.base';
import { DataStores, UIStorePropNames } from '@allmax-angular/antero-web/types';
import { combineLatest } from 'rxjs';
import { WorkStatePropNames } from '../../../../../../types/store.schema';
import { MasterDetailViewTypes } from '@allmax-angular/shared/ui/master-detail';

@Component({
  selector: 'ant-work-template-panel-misc',
  templateUrl: './work-template-panel-misc.component.html',
  styleUrls: ['./work-template-panel-misc.component.scss'],
})
export class WorkTemplatePanelMiscComponent extends WorkTemplatePanelBaseComponent implements AfterViewInit {
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
            this.data = this.ctrl.getMisc(workTemplate.id, [ 'description' ]);
            this.data?.colDef?.findByDataField('description')?.updateOptions({ cellTemplate: 'cellTemplate' });
          } else {
            this.data = this.ctrl.getMisc(workTemplate.id, ['description', 'cost']);
          }
        }
      });
      if (sub) { this.subs.push(sub); }
    }
  }
}
