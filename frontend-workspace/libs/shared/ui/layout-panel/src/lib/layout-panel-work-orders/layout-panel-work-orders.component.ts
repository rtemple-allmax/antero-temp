import { CurrentWorkController } from '@allmax-angular/antero-web/data-access/current-work-controller';
import { WorkOrder } from '@allmax-angular/antero-web/entities';
import { CurrentWorkStoreService } from '@allmax-angular/antero-web/state-management/current-work-store';
import { Component, OnInit } from '@angular/core';
import { LayoutPanelBaseComponent } from '../layout-panel.base';

@Component({
  selector: 'amx-layout-panel-work-orders',
  templateUrl: './layout-panel-work-orders.component.html',
  styleUrls: ['./layout-panel-work-orders.component.scss'],
})
export class LayoutPanelWorkOrdersComponent extends LayoutPanelBaseComponent {
  public records: WorkOrder[] = [];

  constructor(private workCtrl: CurrentWorkController) {
    super();
  }

  // public async ngOnInit(): Promise<void> {
  //   // this.records = await this.workCtrl.get([]);
  // }

  // public getDate(val: any): string {
  //   if (val) {
  //     return getDateString(val);
  //   }
  //   return '';
  // }
}
