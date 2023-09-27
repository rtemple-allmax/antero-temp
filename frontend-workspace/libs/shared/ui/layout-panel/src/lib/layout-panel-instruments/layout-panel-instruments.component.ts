import { EquipmentControllerService } from '@allmax-angular/antero-web/data-access/equipment-controller';
import { Instrument } from '@allmax-angular/antero-web/entities';
import { getDateString } from '@allmax-angular/shared/utils';
import { Component, OnInit } from '@angular/core';
import { LayoutPanelBaseComponent } from '../layout-panel.base';

@Component({
  selector: 'amx-layout-panel-instruments',
  templateUrl: './layout-panel-instruments.component.html',
  styleUrls: ['./layout-panel-instruments.component.scss'],
})
export class LayoutPanelInstrumentsComponent extends LayoutPanelBaseComponent implements OnInit {
  public records: Instrument[] = [];

  constructor(private eqCtrl: EquipmentControllerService) {
    super();
  }

  public async ngOnInit(): Promise<void> {
    this.records = await this.eqCtrl.getInstruments_Raw(8);
  }

  public getDate(val: any): string {
    if (val) {
      return getDateString(val);
    }
    return '';
  }
}
