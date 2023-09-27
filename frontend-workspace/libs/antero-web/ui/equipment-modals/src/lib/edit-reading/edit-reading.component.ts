import { EquipmentControllerService } from '@allmax-angular/antero-web/data-access/equipment-controller';
import { Reading } from '@allmax-angular/antero-web/entities';
import { AnteroService } from '@allmax-angular/antero-web/services/antero-service';
import { EquipmentSectionStore } from '@allmax-angular/antero-web/state-management/equipment-section-store';
import { Nullable, ObservableBinding } from '@allmax-angular/shared/types';
import { miscIcons } from '@allmax-angular/shared/ui/icons';
import { ModalWindowComponent } from '@allmax-angular/shared/ui/modal-window';
import { isNullOrEmpty, unsubscribe } from '@allmax-angular/shared/utils';
import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ant-edit-reading',
  templateUrl: './edit-reading.component.html',
  styleUrls: ['./edit-reading.component.scss'],
})
export class EditReadingComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(ModalWindowComponent) public modal: Nullable<ModalWindowComponent>;
  
  private subs: Subscription[] = [];
  public selectedRecord: Nullable<Reading>;

  public dateBinding = new ObservableBinding<Date>();
  public valueBinding = new ObservableBinding<number>();

  public icons = { ...miscIcons };

  public get ready(): boolean {
    return !isNullOrEmpty(this.dateBinding.value) && !isNullOrEmpty(this.valueBinding.value)
  }

  constructor(
    private antero: AnteroService,
    private ctrl: EquipmentControllerService,
    private store: EquipmentSectionStore
  ) { }
  
  public ngOnInit(): void {
    this.subs.push(this.store.selectedReading$.subscribe(x => {
      this.selectedRecord = x;
      if (this.selectedRecord) {
        this.dateBinding.set(this.selectedRecord.dateOfReading);
        this.valueBinding.set(this.selectedRecord.value);
      }
    }));
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

  public submit(): void {
    if (this.selectedRecord && this.ready) {
      const record: Reading = { ...this.selectedRecord, dateOfReading: this.dateBinding.value, value: this.valueBinding.value };
      this.ctrl.editReading(record);
    }
  }
}
