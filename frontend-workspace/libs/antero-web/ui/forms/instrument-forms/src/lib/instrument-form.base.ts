import { Equipment, Instrument, InstrumentTypes } from '@allmax-angular/antero-web/entities';
import { AnteroService } from '@allmax-angular/antero-web/services/antero-service';
import { instrumentTypesToLabelsMap } from '@allmax-angular/antero-web/types';
import { CrudFunctions, CustomValidator, Nullable, ObservableBinding, ValidationData } from '@allmax-angular/shared/types';
import { allIcons } from '@allmax-angular/shared/ui/icons';
import { Component, Output, EventEmitter, Input, AfterViewInit, OnDestroy, ChangeDetectorRef } from '@angular/core';


@Component({ template: '' })
export class InstrumentFormBaseComponent implements AfterViewInit, OnDestroy {
  @Input() public parent: Nullable<Equipment>;
  @Input() public source: Nullable<Instrument>;

  @Output() public addRequested = new EventEmitter<Instrument>();
  @Output() public editRequested = new EventEmitter<Instrument>();
  @Output() public deleteRequested = new EventEmitter<Instrument>();
  @Output() public canceled = new EventEmitter<undefined>();
 
  public crud: CrudFunctions = CrudFunctions.READ;

  public icons = { ...allIcons };

  public nameBinding = new ObservableBinding<string>();
  public unitsBinding = new ObservableBinding<string>();
  public typeBinding = new ObservableBinding<string>();
  public rollOverBinding = new ObservableBinding<number>();

  public customValidators: CustomValidator<string>[] = [];

  public typeData = [
    instrumentTypesToLabelsMap.get(InstrumentTypes.GUAGE),
    instrumentTypesToLabelsMap.get(InstrumentTypes.METER)
  ];

  public get formIsValid(): boolean { 
    return this.nameBinding.validity && this.unitsBinding.validity;
  }

  constructor(private antero: AnteroService, private cdr: ChangeDetectorRef) {}

  public ngAfterViewInit(): void {
    this.typeBinding.set(instrumentTypesToLabelsMap.get(InstrumentTypes.METER));
    this.customValidators = [
      new CustomValidator<string>((val: any) => this.antero.checkIfNameExists(new ValidationData(
        this.crud === CrudFunctions.UPDATE ? this.source as any : null,
        val,
        this.crud,
        { model: 'instrument', columns: [ 'name', 'equipmentID' ], values: [ val, this.parent?.id ]})), `Equipment already has an instrument of that name`)
    ];
    this.populate();
    this.cdr.detectChanges()
  }

  public ngOnDestroy(): void {
    this.cdr.detach();
  }

  public populate(): void {
    if (this.source) {
      this.nameBinding.set(this.source.name);
      this.unitsBinding.set(this.source.units);
      this.typeBinding.set(instrumentTypesToLabelsMap.get(this.source.instrumentType));
      this.rollOverBinding.set(this.source.rollOver);
    }
  }

  public validityHandler(state: boolean, name: string): void {
    switch(name) {
      case 'name':
        this.nameBinding.validity = state;
        break;
      case 'type':
        this.typeBinding.validity = state;
        break;
      case 'units':
        this.unitsBinding.validity = state;
        break;
    }
  }

  public closedHandler(): void {
    this.antero.closeModal();
  }
}
