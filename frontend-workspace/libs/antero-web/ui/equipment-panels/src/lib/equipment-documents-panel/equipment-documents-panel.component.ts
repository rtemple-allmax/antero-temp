import { EquipmentControllerService } from '@allmax-angular/antero-web/data-access/equipment-controller';
import { Equipment, EquipmentDocument } from '@allmax-angular/antero-web/entities';
import { AnteroService } from '@allmax-angular/antero-web/services/antero-service';
import { AnteroStoreService } from '@allmax-angular/antero-web/state-management/antero-store';
import { EquipmentSectionStore } from '@allmax-angular/antero-web/state-management/equipment-section-store';
import { Modals } from '@allmax-angular/antero-web/types';
import { DeviceTypes, Nullable } from '@allmax-angular/shared/types';
import { DataTableComponent } from '@allmax-angular/shared/ui/data-table';
import { toolbarIcons } from '@allmax-angular/shared/ui/icons';
import { getDateString, unsubscribe } from '@allmax-angular/shared/utils';
import { AfterViewInit, Component, HostBinding, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { saveAs } from 'file-saver';
import { PersistenceService } from '@allmax-angular/antero-web/services/persistence';

@Component({
  selector: 'ant-equipment-documents-panel',
  templateUrl: './equipment-documents-panel.component.html',
  styles: [],
})
export class EquipmentDocumentsPanelComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(DataTableComponent) public table: Nullable<DataTableComponent>;
  
  private subs: Subscription[] = [];

  public title = 'Documents';

  @HostBinding('attr.data-id') public dataID = this.title;

  public data: EquipmentDocument[] = [];

  public selectedEquipment: Nullable<Equipment>;
  public selectedDocuments: EquipmentDocument[] = [];

  public deviceType = DeviceTypes.UNSET;
  public deviceTypes: typeof DeviceTypes = DeviceTypes;

  public icons = { ...toolbarIcons };
  
  constructor(
    private antero: AnteroService,
    private appStore: AnteroStoreService,
    private ctrl: EquipmentControllerService,
    private store: EquipmentSectionStore,
    private persistence: PersistenceService
  ) { }

  public ngOnInit(): void {
    this.subs.push(this.store.selection$.subscribe(async (x) => {
      this.selectedEquipment = x;
      this.updateData();
    }));
    
    this.subs.push(this.store.selectedDocuments$.subscribe(x => this.selectedDocuments = x));
    
    this.subs.push(this.appStore.refresh$.subscribe(async (x) => {
      if (x) {
        console.log('add document refresh is true')
        this.updateData();
        this.appStore.refresh = false;
      }
    }));
    
    this.subs.push(this.appStore.deviceType$.subscribe(x => {
      this.deviceType = x;
      this.updateData();
    }));
  }

  public ngAfterViewInit(): void {
    this.store.documentsTable = this.table;
  }

  public ngOnDestroy(): void {
    unsubscribe(this.subs);
  }

  public async updateData(): Promise<void> {
    if (!this.selectedEquipment) { return; }
    const docs = await this.ctrl.getDocuments_Raw(this.selectedEquipment.id);
    console.log('get docs', { record: this.selectedEquipment, docs });
    this.data = docs;
  }
  
  public addRequestHandler(files: File[]): void {
    if (this.selectedEquipment) {
      this.ctrl.addDocuments(this.selectedEquipment.id, files);
    }
  }

  public downloadRequestHandler(files: EquipmentDocument[]): void {
    this.store.selectedDocuments = files;
    files.forEach(x => {
      if (x?.document) {
        this.ctrl.downloadDocument(x.document);
      }
    });
  }
  
  public deleteRequestHandler(files: EquipmentDocument[]): void {
    this.store.selectedDocuments = files;
    this.antero.openModal(Modals.EQUIPMENT_DELETE_DOCUMENT);
  }
  
  public getDateString(val: any): string {
    return getDateString(val);
  }

  public collapsedStateChangedHandler(state: boolean) {
    this.persistence.setEquipmentPanelCollapsibleState(this.title, state);
  }

  // public renameHandler(): void {
  //   this.antero.openModal(Modals.EDIT_EQUIPMENT_DOCUMENT);
  // }
}
