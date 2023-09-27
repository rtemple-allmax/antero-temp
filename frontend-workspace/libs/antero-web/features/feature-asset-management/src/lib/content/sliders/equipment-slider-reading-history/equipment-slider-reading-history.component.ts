import { Component, OnInit } from '@angular/core';
import { EquipmentSliderBaseComponent } from '../../../types/equipment-slider.base';
import { Nullable, TableData } from '@allmax-angular/shared/types';
import { combineLatest } from 'rxjs';
import { EquipmentStatePropNames } from '../../../types/store.schema';
import { UIStorePropNames } from '@allmax-angular/antero-web/types';
import { Instrument } from '@allmax-angular/antero-web/entities';
import { MasterDetailViewTypes } from '@allmax-angular/shared/ui/master-detail';

@Component({
  selector: 'ant-equipment-slider-reading-history',
  templateUrl: './equipment-slider-reading-history.component.html',
  styleUrls: ['./equipment-slider-reading-history.component.scss'],
})
export class EquipmentSliderReadingHistoryComponent extends EquipmentSliderBaseComponent implements OnInit {
  public data: Nullable<TableData>;
  public record: Nullable<Instrument>;

  public ngOnInit(): void {
    if (this.eqStore && this.uiStore) {
      const sub = combineLatest([
        this.eqStore.observe(EquipmentStatePropNames.SELECTED_INSTRUMENT),
        this.uiStore.observe(UIStorePropNames.VIEW_TYPE)
      ]).subscribe(([
        record,
        viewType
      ]) => {
        this.record = record;
        this.viewType = viewType;
        this.getData();
      });
      if (sub) { this.subs.push(sub); }
    }
  }

  public getData(): void {
    if (this.record) {
      if (this.viewType === MasterDetailViewTypes.LIST) {
        this.data = this.eqCtrl.getReadingsHistory(this.record.id, [ 'dateOFReading' ]);
        this.data?.colDef?.findByDataField('dateOfReading')?.updateOptions({ cellTemplate: 'cellTemplate' });
      } else {
        this.data = this.eqCtrl.getReadingsHistory(this.record.id, [
          'dateOFReading',
          'value',
          'whereRecorded',
          'userName'
        ]);
      }
    }
  }
}
