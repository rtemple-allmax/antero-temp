import { Nullable, TableData } from '@allmax-angular/shared/types';
import { Component, OnInit } from '@angular/core';
import { EquipmentTabBaseComponent } from '../equipment-tab.base';

@Component({
  selector: 'ant-equipment-tab-activity',
  templateUrl: './equipment-tab-activity.component.html',
  styleUrls: ['./equipment-tab-activity.component.scss'],
})
export class EquipmentTabActivityComponent extends EquipmentTabBaseComponent implements OnInit {
  public data: Nullable<TableData>;

  public async ngOnInit(): Promise<void> {
    this.store.selection$.subscribe(async (x) => {
      if (x) {
        this.data = await this.ctrl.getActivity(x.id, ['actionDescription']);
      }
    })
  }
}
