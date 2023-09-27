import { EquipmentControllerService } from '@allmax-angular/antero-web/data-access/equipment-controller';
import { Equipment, Instrument, Reading } from '@allmax-angular/antero-web/entities';
import { AnteroService } from '@allmax-angular/antero-web/services/antero-service';
import { AnteroStoreService } from '@allmax-angular/antero-web/state-management/antero-store';
import { EquipmentSectionStore } from '@allmax-angular/antero-web/state-management/equipment-section-store';
import { Nullable, ObservableBinding, TableData } from '@allmax-angular/shared/types';
import { miscIcons } from '@allmax-angular/shared/ui/icons';
import { isNullOrEmpty, sortArrayByKeyImmutable, sortArrayByStringPropImmutable, unsubscribe } from '@allmax-angular/shared/utils';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ant-enter-readings',
  templateUrl: './enter-readings.component.html',
})
export class EnterReadingsComponent implements OnInit, OnDestroy {
  @Input() public hasContext = true;

  public eqData: Nullable<TableData>;
  public equipmentBinding = new ObservableBinding<Equipment>();
  
  public dateBinding = new ObservableBinding<Date>();

  public instrumentBindings: ObservableBinding<number>[] = [];
  public instruments: Instrument[] = [];

  public icons = { ...miscIcons };

  private subs: Subscription[] = [];

  public initialValue: Nullable<Equipment>;

  constructor(
    private antero: AnteroService,
    private ctrl: EquipmentControllerService,
    private eqStore: EquipmentSectionStore,
    private store: AnteroStoreService
  ) {}

  public get atLeastOneReading(): boolean {
    return this.instrumentBindings.filter(x => !isNullOrEmpty(x.value)).length > 0;
  }

  public get ready(): boolean {
    return !!this.equipmentBinding.value && !!this.dateBinding.value && this.atLeastOneReading;
  }

  public async ngOnInit(): Promise<void> {
    this.eqData = await this.ctrl.getEquipmentWithInstruments(['name']);

    // console.log('enter readings', { data: this.eqData });
    this.dateBinding.set(new Date());
    this.eqData.colDef.findByDataField('name')?.updateOptions({ caption: 'Equipment Name', cellTemplate: 'cellTemplate' });
    if (this.hasContext) {
      this.subs.push(this.eqStore.selection$.subscribe(x => {
        this.equipmentBinding.set(x);
        this.initialValue = x; 
      }));
    }
    
    this.subs.push(this.equipmentBinding.value$.subscribe(async (x) => {
      // console.log('equipmentbinding', x);
      if (x) {
        this.instruments = await this.ctrl.getInstruments_Raw(x.id);
        this.instruments = sortArrayByStringPropImmutable(this.instruments, 'name');
        this.instruments.forEach(x => this.instrumentBindings.push(new ObservableBinding<number>(null)));
      } else {
        this.instruments = [];
      }

    }))
  }

  public ngOnDestroy(): void {
    unsubscribe(this.subs);
  }

  public closedHandler(): void {
    this.antero.closeModal();
  }

  public async submit(): Promise<void> {
    const readings: Reading[] = [];
    this.instrumentBindings.forEach((x, i) => {
      if (isNullOrEmpty(x.value)) {  return; }
      const reading: Reading = {
        id: 0,
        instrumentID: this.instruments[i].id,
        instrument: null,
        dateOfReading: this.dateBinding.value,
        value: x.value,
        fullName: null,
        userName: null,
        whereRecorded: null
      };
      readings.push(reading);
    });
    const result = await this.ctrl.enterReadings(readings);
    if (result) {
      this.store.refresh = true;
      this.instrumentBindings.forEach(x => x.set(null));
      this.dateBinding.set(null);
      this.equipmentBinding.reset();
    }
  }
}
