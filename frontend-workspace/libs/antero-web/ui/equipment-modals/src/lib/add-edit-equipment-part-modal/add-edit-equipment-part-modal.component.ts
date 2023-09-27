import { EquipmentControllerService } from '@allmax-angular/antero-web/data-access/equipment-controller';
import { PartsControllerService } from '@allmax-angular/antero-web/data-access/parts-controller';
import { Equipment, EquipmentPart, Part } from '@allmax-angular/antero-web/entities';
import { AnteroService } from '@allmax-angular/antero-web/services/antero-service';
// import { PersistenceService } from '@allmax-angular/antero-web/services/persistence';
import { AnteroStoreService } from '@allmax-angular/antero-web/state-management/antero-store';
import { EquipmentSectionStore } from '@allmax-angular/antero-web/state-management/equipment-section-store';
import { PartData } from '@allmax-angular/antero-web/types';
import { CrudFunctions, Nullable, ObservableBinding, TableData } from '@allmax-angular/shared/types';
import { miscIcons } from '@allmax-angular/shared/ui/icons';
import { ModalWindowComponent } from '@allmax-angular/shared/ui/modal-window';
import { isNullOrEmpty, unsubscribe } from '@allmax-angular/shared/utils';
import { Component, OnInit, AfterViewInit, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ant-add-edit-equipment-part-modal',
  templateUrl: './add-edit-equipment-part-modal.component.html',
  styleUrls: ['./add-edit-equipment-part-modal.component.scss'],
})
export class AddEditEquipmentPartModalComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(ModalWindowComponent) public modal: Nullable<ModalWindowComponent>;
  
  private subs: Subscription[] = [];
  
  public crud: CrudFunctions = CrudFunctions.CREATE;
  public crudFunctions: typeof CrudFunctions = CrudFunctions;
  
  public selectedEquipment: Nullable<Equipment>;
  public heading = '';
  public data: Nullable<TableData>;
  public source: Nullable<PartData>;
  public partBinding = new ObservableBinding<PartData>();
  public commentBinding = new ObservableBinding<string>();
  public icons = { ...miscIcons };

  public get ready(): boolean {
    if (this.crud === CrudFunctions.CREATE) {
      return !isNullOrEmpty(this.partBinding.value);
    } else if (this.crud === CrudFunctions.UPDATE) {
      return !isNullOrEmpty(this.source);
    }
    return false;
  }

  constructor(
    private antero: AnteroService,
    private appStore: AnteroStoreService,
    private ctrl: EquipmentControllerService,
    private eqStore: EquipmentSectionStore,
    private partCtrl: PartsControllerService
  ) { }

  public ngOnInit(): void {
    this.subs.push(this.appStore.crud$.subscribe(x => {
      this.crud = x;
      this.heading = `${ this.crud === CrudFunctions.CREATE ? 'Add' : 'Edit' } Part`;
      this.populate();
    }));
    this.subs.push(this.eqStore.selectedPartData$.subscribe(x => {
      this.source = x;
      this.populate();
    }));
    this.subs.push(this.eqStore.selection$.subscribe(x => this.selectedEquipment = x));
    this.partBinding.value$.subscribe(x => console.log('part in add part', x))
  }

  public ngAfterViewInit(): void {
    this.modal?.open();
  }

  public ngOnDestroy(): void {
    unsubscribe(this.subs);
  }

  public closedHandler(): void {
    this.antero.closeModal();
  }

  public async getParts(): Promise<void> {
    if (this.selectedEquipment) {
      this.data = await this.partCtrl.get([ 'name' ], { excludedType: 'Equipment', excludedIDs: [ this.selectedEquipment.id ]});
    }
  }

  public populate(): void {
    if (this.crud === CrudFunctions.UPDATE && this.source) {
      this.commentBinding.set(this.source.comment);
      this.partBinding.set(this.source);
    }
  }

  public async submit(): Promise<void> {
    if (this.crud === CrudFunctions.CREATE) {
      const partToAdd: EquipmentPart = {
        id: 0,
        partID: this.partBinding.value?.id || 0,
        equipmentID: this.selectedEquipment?.id || 0,
        equipment: null,
        part: null,
        comment: this.commentBinding.value,
        totalQuantity: 0
      }
      this.ctrl.addPart(partToAdd);
    } else {
      if (this.source) {
        const partToUpdate: EquipmentPart = {
          id: this.source.id,
          equipmentID: this.source.equipmentID,
          partID: this.source.partID,
          part: null,
          equipment: null,
          comment: this.commentBinding.value,
          totalQuantity: this.source.totalQuantity
        };
        this.ctrl.updatePart(partToUpdate);
      }
    }
  }
}
