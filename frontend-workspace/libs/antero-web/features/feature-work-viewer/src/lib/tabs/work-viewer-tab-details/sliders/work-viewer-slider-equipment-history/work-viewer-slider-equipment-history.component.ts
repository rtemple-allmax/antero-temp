import { SliderBaseComponent } from '@allmax-angular/antero-web/bases';
import { EquipmentControllerService } from '@allmax-angular/antero-web/data-access/equipment-controller';
import { DataStores, UIStorePropNames } from '@allmax-angular/antero-web/types';
import { Nullable, TableData } from '@allmax-angular/shared/types';
import { Component, OnInit, inject } from '@angular/core';
import { WorkViewerStorePropNames } from '../../../../work-viewer.schema';
import { combineLatest } from 'rxjs';
import { MasterDetailViewTypes } from '@allmax-angular/shared/ui/master-detail';
import { WorkHistory, WorkHistoryEquipment, WorkHistoryInstrument, WorkHistoryLabor, WorkHistoryMisc, WorkHistoryPart, WorkHistorySupplier, WorkOrderSupplier } from '@allmax-angular/antero-web/entities';
import { WorkHistoryControllerService } from '@allmax-angular/antero-web/data-access/work-history-controller';
import { numberToCurrencyFormatter } from '@allmax-angular/shared/utils';

@Component({
  selector: 'ant-work-viewer-slider-equipment-history',
  templateUrl: './work-viewer-slider-equipment-history.component.html',
  styleUrls: ['./work-viewer-slider-equipment-history.component.scss'],
})
export class WorkViewerSliderEquipmentHistoryComponent extends SliderBaseComponent implements OnInit {
  private eqCtrl = inject(EquipmentControllerService);
  private historyCtrl = inject(WorkHistoryControllerService);
  public data: Nullable<TableData>;

  public record: Nullable<WorkHistory>;
  public instruments: WorkHistoryInstrument[] = [];
  public labor: WorkHistoryLabor[] = [];
  public parts: WorkHistoryPart[] = [];
  public contractors: WorkHistorySupplier[] = [];
  public tools : WorkHistoryEquipment[] = [];
  public misc: WorkHistoryMisc[] = [];

  public get instrumentsLabel(): string {
    return `Instruments (${ this.instruments.length })`;
  }

  public get laborLabel(): string {
    return `Labor (${ this.labor.length })`;
  }

  public get partsLabel(): string {
    return `Parts (${ this.parts.length })`;
  }

  public get contractorsLabel(): string {
    return `Contractors (${ this.contractors.length })`;
  }

  public get toolsLabel(): string {
    return `Tools (${ this.tools.length })`;
  }
  
  public get miscLabel(): string {
    return `Misc (${ this.misc.length })`;
  }

  public ngOnInit(): void {
    const viewerStore = this.state.getStore(DataStores.VIEWER_WORK);
    const uiStore = this.state.getStore(DataStores.UI);
    if (viewerStore && uiStore) {
      const sub = combineLatest([
        viewerStore.observe(WorkViewerStorePropNames.SELECTED_WORK_ORDER),
        uiStore.observe(UIStorePropNames.VIEW_TYPE)
      ]).subscribe(([
        workOrder,
        viewType
      ]) => {
        this.viewType = viewType;
        if (workOrder && workOrder.equipmentID) {
          if (this.viewType === MasterDetailViewTypes.LIST) {
            this.data = this.eqCtrl.getHistory(workOrder.equipmentID, [ 'workOrderNumber' ]);
            this.data?.colDef?.findByDataField('workOrderNumber')?.updateOptions({ cellTemplate: 'cellTemplate' });
          }
        }
      });
      if (sub) { this.subs.push(sub); }
    }
  }

  public selectionHandler(record: Nullable<WorkHistory>): void {
    this.record = record;
    if (this.record) {
      this.getSubsectionData(this.record.id);
    }
  }

  public getSubsectionData(id: number): void {
    this.getInstruments(id);
    this.getLabor(id);
    this.getParts(id);
    this.getContractors(id);
    this.getTools(id);
    this.getMisc(id);
  }

  public async getInstruments(id: number): Promise<void> {
    this.instruments = await this.historyCtrl.getInstrumentsByWorkHistoryID(id);
  }

  public async getLabor(id: number): Promise<void> {
    this.labor = await this.historyCtrl.getLaborByWorkHistoryID(id);
  }

  public async getParts(id: number): Promise<void> {
    this.parts = await this.historyCtrl.getPartsByWorkHistoryID(id);
  }

  public async getContractors(id: number): Promise<void> {
    this.contractors = await this.historyCtrl.getContractorsByWorkHistoryID(id);
  }

  public async getTools(id: number): Promise<void> {
    this.tools = await this.historyCtrl.getToolsByWorkHistoryID(id);
  }

  public async getMisc(id: number): Promise<void> {
    this.misc = await this.historyCtrl.getMiscByWorkHistoryID(id);
  }

  public calculateCost(item: WorkHistorySupplier): string {
    const val = item.laborCost + item.miscCost + item.partCost + item.taxCost;
    return this.formatAsCurrency(val);
  }
}
