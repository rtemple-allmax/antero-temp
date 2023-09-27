import { EquipmentControllerService } from '@allmax-angular/antero-web/data-access/equipment-controller';
import { Instrument, Reading } from '@allmax-angular/antero-web/entities';
import { AnteroService } from '@allmax-angular/antero-web/services/antero-service';
import { AnteroStoreService } from '@allmax-angular/antero-web/state-management/antero-store';
import { EquipmentSectionStore } from '@allmax-angular/antero-web/state-management/equipment-section-store';
import { Modals } from '@allmax-angular/antero-web/types';
import { Nullable, TableData } from '@allmax-angular/shared/types';
import { DataTableComponent } from '@allmax-angular/shared/ui/data-table';
import { toolbarIcons } from '@allmax-angular/shared/ui/icons';
import { ModalWindowComponent } from '@allmax-angular/shared/ui/modal-window';
import { getDateString, getDateTimeString, unsubscribe } from '@allmax-angular/shared/utils';
import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ant-readings-history',
  templateUrl: './readings-history.component.html',
  styleUrls: ['./readings-history.component.scss'],
})
export class ReadingsHistoryComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(DataTableComponent) public readingsTable: Nullable<DataTableComponent>;
  @ViewChild(ModalWindowComponent) public modal: Nullable<ModalWindowComponent>;

  private subs: Subscription[] = [];

  public selectedInstrument: Nullable<Instrument>;
  public selectedReading: Nullable<Reading>;

  public readingsData: Nullable<TableData>;

  public icons = { ...toolbarIcons };

  public hoveredID = -1;

  constructor(
    private antero: AnteroService,
    private appStore: AnteroStoreService,
    private ctrl: EquipmentControllerService,
    private eqStore: EquipmentSectionStore
  ) { }

  public ngOnInit(): void {
    this.subs.push(this.eqStore.selectedInstrument$.subscribe(x => {
      this.selectedInstrument = x;
      this.getData();
    }));
    this.subs.push(this.eqStore.selectedReading$.subscribe(x => this.selectedReading = x));
    this.subs.push(this.appStore.refresh$.subscribe(x => {
      if (x) {
        this.getData();
        this.appStore.refresh = false;
      }
    }));
  }

  public ngAfterViewInit(): void {
    this.eqStore.readingsTable = this.readingsTable;
    this.modal?.open();
  }

  public ngOnDestroy(): void {
    unsubscribe(this.subs);
  }

  public closedHandler(): void {
    this.eqStore.selectedReading = null;
    this.antero.closeModal();
  }

  public selectionHandler(record: Reading): void {
    this.eqStore.selectedReading = record;
  }

  public async getData(): Promise<void> {
    console.log('selectedInstrument in get data readings', this.selectedInstrument)
    if (this.selectedInstrument) {
      const data = this.ctrl.getReadingsHistory(this.selectedInstrument.id, []);
      data?.colDef?.columns?.forEach(x => x.visible = false);
      data.colDef?.findByDataField('instrument.name')?.updateOptions({ visible: true, cellTemplate: 'cellTemplate' });
      this.readingsData = data;
    } else {
      this.readingsData = null;
    }
  }
  
  public getDateTimeString(val: any): string {
    return getDateTimeString(val);
  }

  public mouseenterHandler(id: number): void {
    if (id > 0) {
      this.hoveredID = id;
    }
  }

  public mouseleaveHandler(id: number): void {
    if (id === this.hoveredID) {
      this.hoveredID = 0;
    }
  }

  public editHandler(): void {
    this.antero.openModal(Modals.EQUIPMENT_EDIT_READING);
    document.dispatchEvent(new Event('click', { bubbles: false }));
  }

  public deleteHandler(): void {
    this.antero.openModal(Modals.EQUIPMENT_DELETE_READING);
    document.dispatchEvent(new Event('click', { bubbles: false }));
  }
}
