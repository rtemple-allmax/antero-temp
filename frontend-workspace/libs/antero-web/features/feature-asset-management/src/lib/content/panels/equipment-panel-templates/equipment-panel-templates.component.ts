import { PanelBaseComponent } from '@allmax-angular/antero-web/bases';
import { Equipment, WorkOrder, WorkTemplate } from '@allmax-angular/antero-web/entities';
import { DataStores } from '@allmax-angular/antero-web/types';
import { Nullable, TableData } from '@allmax-angular/shared/types';
import { Component, OnInit, inject } from '@angular/core';
import { EquipmentStatePropNames } from '../../../types/store.schema';
import { EquipmentControllerService } from '@allmax-angular/antero-web/data-access/equipment-controller';
import { ViewersService } from '@allmax-angular/antero-web/services/viewers-service';
import { WorkViewerStorePropNames } from '@allmax-angular/antero-web/features/feature-work-viewer';

@Component({
  selector: 'ant-equipment-panel-templates',
  templateUrl: './equipment-panel-templates.component.html',
  styleUrls: ['./equipment-panel-templates.component.scss'],
})
export class EquipmentPanelTemplatesComponent extends PanelBaseComponent {

  public selectedEquipment: Nullable<Equipment>;

  public records: WorkTemplate[] = [];

  public ctrl = inject(EquipmentControllerService);
  public viewers = inject(ViewersService);

  // public deviceType = DeviceTypes.UNSET;
  // public deviceTypes: typeof DeviceTypes = DeviceTypes;

  // constructor(
  //   private appStore: AnteroStoreService,
  //   private ctrl: EquipmentControllerService,
  //   private store: EquipmentSectionStore
  // ) { }

  public override ngOnInit(): void {
    super.ngOnInit();
    const sub = this.state.getStore(DataStores.EQUIPMENT)
    ?.observe(EquipmentStatePropNames.SELECTED_EQUIPMENT)
    ?.subscribe(x => {
      this.selectedEquipment = x;
      this.getData();
    });
    if (sub) { this.subs.push(sub); }
    // this.subs.push(this.store.selection$.subscribe(x => {
    //   this.selectedEquipment = x;
    //   this.getData();
    // }));
    // this.subs.push(this.appStore.deviceType$.subscribe(x => {
    //   this.deviceType = x;
    //   this.getData();
    // }));
  }

  // public ngOnDestroy(): void {
  //   unsubscribe(this.subs);
  // }

  public async getData(): Promise<void> {
    if (!this.selectedEquipment) { return; }
    
      this.data = await this.ctrl.getTemplates(this.selectedEquipment.id) as TableData;
    // } else {
    //   this.records = await this.ctrl.getTemplates(this.selectedEquipment.id, true) as WorkTemplate[];
    // }
  }

  public selectionChangedHandler(record: WorkOrder): void {
    console.log('selected wo, record')
    this.state.getStore(DataStores.VIEWER_WORK)?.setValue(WorkViewerStorePropNames.SELECTED_WORK_ORDER, record);
    this.viewers.openWorkViewer(record);
  }

  // public getDateString(val: any): string {
  //   return getDateString(val);
  // }
}
