import { EquipmentControllerService } from '@allmax-angular/antero-web/data-access/equipment-controller';
import { Equipment, Instrument, InstrumentTypes } from '@allmax-angular/antero-web/entities';
import { AnteroService } from '@allmax-angular/antero-web/services/antero-service';
import { AnteroStoreService } from '@allmax-angular/antero-web/state-management/antero-store';
import { EquipmentSectionStore } from '@allmax-angular/antero-web/state-management/equipment-section-store';
import { instrumentTypesToLabelsMap, Modals } from '@allmax-angular/antero-web/types';
import { CrudFunctions, CustomValidator, DeviceTypes, Nullable, ObservableBinding, ValidationData } from '@allmax-angular/shared/types';
import { miscIcons } from '@allmax-angular/shared/ui/icons';
import { unsubscribe } from '@allmax-angular/shared/utils';
import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ant-add-edit-instrument',
  templateUrl: './add-edit-instrument.component.html',
  styleUrls: ['./add-edit-instrument.component.scss'],
})
export class AddEditInstrumentComponent implements OnInit, OnDestroy {
  private subs: Subscription[] = [];

  public crud: CrudFunctions = CrudFunctions.CREATE;
  public crudFunctions: typeof CrudFunctions = CrudFunctions;

  public selectedEquipment: Nullable<Equipment>;
  public selectedInstrument: Nullable<Instrument>;

  constructor(
    private antero: AnteroService,
    private appStore: AnteroStoreService,
    private eqStore: EquipmentSectionStore,
    private ctrl: EquipmentControllerService
  ) {}

  public ngOnInit(): void {
    this.subs.push(this.appStore.crud$.subscribe(fn => this.crud = fn));
    this.subs.push(this.eqStore.selection$.subscribe(x => this.selectedEquipment = x));
    this.subs.push(this.eqStore.selectedInstrument$.subscribe(x => this.selectedInstrument = x));
  }

  public ngOnDestroy(): void {
    unsubscribe(this.subs);
  }

  public async addHandler(record: Instrument): Promise<void> {
    const result = await this.ctrl.addInstrument(record);
    if (result) {
      this.appStore.refresh = true;
      this.antero.closeModal();
    }
  }

  public async editHandler(record: Instrument): Promise<void> {
    const result = await this.ctrl.editInstrument(record);
    if (result) {
      this.appStore.refresh = true;
      this.antero.closeModal();
    }
  }
}
