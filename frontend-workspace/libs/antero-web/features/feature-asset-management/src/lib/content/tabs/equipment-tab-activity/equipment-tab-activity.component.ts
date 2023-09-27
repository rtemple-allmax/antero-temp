import { TabBaseComponent } from '@allmax-angular/antero-web/bases';
import { DataStores } from '@allmax-angular/antero-web/types';
import { DataStore } from '@allmax-angular/shared/features/state-management';
import { Nullable, TableData } from '@allmax-angular/shared/types';
import { Component, OnInit, inject } from '@angular/core';
import { EquipmentStatePropNames } from '../../../types/store.schema';
import { EquipmentControllerService } from '@allmax-angular/antero-web/data-access/equipment-controller';

@Component({
  selector: 'ant-equipment-tab-activity',
  templateUrl: './equipment-tab-activity.component.html',
  styleUrls: ['./equipment-tab-activity.component.scss'],
})
export class EquipmentTabActivityComponent extends TabBaseComponent implements OnInit {
  public data: Nullable<TableData>;

  private ctrl = inject(EquipmentControllerService);

  public async ngOnInit(): Promise<void> {
    const sub = this.state.getStore(DataStores.EQUIPMENT)
    ?.observe(EquipmentStatePropNames.SELECTED_EQUIPMENT)
    ?.subscribe(async (x) => {
      if (x) {
        this.data = await this.ctrl.getActivity(x.id, ['actionDescription']);
      }
    });
    if (sub) { this.subs.push(sub); }
    // this.store.selection$.subscribe(async (x) => {
    //   if (x) {
    //     this.data = await this.ctrl.getActivity(x.id, ['actionDescription']);
    //   }
    // })
  }
}
