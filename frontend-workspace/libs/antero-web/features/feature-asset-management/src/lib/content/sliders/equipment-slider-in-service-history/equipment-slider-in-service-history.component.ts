import { Component, OnInit } from '@angular/core';
import { EquipmentSliderBaseComponent } from '../../../types/equipment-slider.base';
import { combineLatest } from 'rxjs';
import { EquipmentStatePropNames } from '../../../types/store.schema';
import { UIStorePropNames } from '@allmax-angular/antero-web/types';
import { Nullable, TableData } from '@allmax-angular/shared/types';
import { MasterDetailViewTypes } from '@allmax-angular/shared/ui/master-detail';

@Component({
  selector: 'ant-equipment-slider-in-service-history',
  templateUrl: './equipment-slider-in-service-history.component.html',
  styleUrls: ['./equipment-slider-in-service-history.component.scss'],
})
export class EquipmentSliderInServiceHistoryComponent extends EquipmentSliderBaseComponent implements OnInit {
  public data: Nullable<TableData>;

  public ngOnInit(): void {
    if (this.eqStore && this.uiStore) {
      const sub = combineLatest([
        this.eqStore.observe(EquipmentStatePropNames.SELECTED_EQUIPMENT),
        this.eqStore.observe(EquipmentStatePropNames.REFRESH),
        this.uiStore.observe(UIStorePropNames.VIEW_TYPE)
      ]).subscribe(([
        record,
        refresh,
        viewType
      ]) => {
        const prevRecord = this.source;
        const prevView = this.viewType;

        this.source = record;
        this.viewType = viewType;
        
        if (prevRecord !== this.source || prevView !== this.viewType || refresh) {
          this.getData();
        }

        if (refresh) {
          this.eqStore?.setValue(EquipmentStatePropNames.REFRESH, false);
        }
      });
      if (sub) { this.subs.push(sub); }
    }
  }

  public getData(): void {
    if (this.source) {
      if (this.viewType === MasterDetailViewTypes.LIST) {
        this.data = this.eqCtrl.getInserviceHistory(this.source.id, [ 'dateStatusChanged' ]);
        this.data?.colDef?.findByDataField('dateStatusChanged')?.updateOptions({ cellTemplate: 'cellTemplate' });
      } else {
        this.data = this.eqCtrl.getInserviceHistory(this.source.id, [
          'dateStatusChanged',
          'inService',
          'userName',
          'comment'
        ]);
      }
    }
  }
}
