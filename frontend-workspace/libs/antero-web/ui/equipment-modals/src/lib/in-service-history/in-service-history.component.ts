import { EquipmentControllerService } from '@allmax-angular/antero-web/data-access/equipment-controller';
import { Equipment, EquipmentInServiceHistory } from '@allmax-angular/antero-web/entities';
import { AnteroService } from '@allmax-angular/antero-web/services/antero-service';
import { EquipmentSectionStore } from '@allmax-angular/antero-web/state-management/equipment-section-store';
import { Nullable, ObservableBinding, TableData } from '@allmax-angular/shared/types';
import { DataTableComponent } from '@allmax-angular/shared/ui/data-table';
import { miscIcons, toolbarIcons } from '@allmax-angular/shared/ui/icons';
import { ModalWindowComponent } from '@allmax-angular/shared/ui/modal-window';
import { unsubscribe } from '@allmax-angular/shared/utils';
import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ant-in-service-history',
  templateUrl: './in-service-history.component.html',
  styleUrls: ['./in-service-history.component.scss'],
})
export class InServiceHistoryComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('main') public modal: Nullable<ModalWindowComponent>;
  @ViewChild('edit') public editModal: Nullable<ModalWindowComponent>;
  @ViewChild(DataTableComponent) public table: Nullable<DataTableComponent>; 

  private subs: Subscription[] = [];
  
  public data: Nullable<TableData>;
  public selectedEquipment: Nullable<Equipment>;
  public selectedRecord: Nullable<EquipmentInServiceHistory>;
  public dateBinding = new ObservableBinding<Date>(new Date());
  public commentBinding = new ObservableBinding<string>('');

  public icons = { ...toolbarIcons, ...miscIcons };

  public get label(): string {
    return `${ this.selectedRecord?.inService ? 'In Service' : 'Out of Service' } Details`;
  }

  public get ready(): boolean {
    return !!this.selectedRecord && !!this.dateBinding.value;
  }

  constructor(
    private antero: AnteroService,
    private ctrl: EquipmentControllerService,
    private store: EquipmentSectionStore
  ) { }

  public ngOnInit(): void {
    this.subs.push(this.store.selectedInServiceHistory$.subscribe(x => {
      this.selectedRecord = x;
      if (this.selectedRecord) {
        this.dateBinding.set(this.selectedRecord.dateStatusChanged);
        this.commentBinding.set(this.selectedRecord.comment);
      }
    }));
    this.subs.push(this.store.selection$.subscribe(x => {
      this.selectedEquipment = x;
      if (this.selectedEquipment) {
        this.data = this.ctrl.getInserviceHistory(this.selectedEquipment.id, []);
      }
    }))
  }
  
  public ngAfterViewInit(): void {
    this.store.inServiceHistoryTable = this.table;
    this.modal?.open();
    this.editModal?.close();
  }

  public ngOnDestroy(): void {
    unsubscribe(this.subs);
  }

  public editHandler(): void {
    this.editModal?.open();
  }

  public selectionHandler(record: EquipmentInServiceHistory): void {
    this.store.selectedInServiceHistory = record;
  }

  public closedHandler(): void {
    this.antero.closeModal();
  }

  public closeEditWindow(): void {
    // console.log('close edit')
    // this.editModal?.close();
  }

  public async submit(): Promise<void> {
    if (!this.selectedRecord || !this.dateBinding.value) { return; }
    const record: EquipmentInServiceHistory = {
      ...this.selectedRecord,
      dateStatusChanged: this.dateBinding.value,
      comment: this.commentBinding.value
    };

    const result = await this.ctrl.updateInServiceHistory(record);
    if (result) {
      this.editModal?.close();
    }
  }
}
