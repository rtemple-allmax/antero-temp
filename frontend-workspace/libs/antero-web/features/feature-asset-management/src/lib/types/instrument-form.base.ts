import { Component, OnInit } from '@angular/core';
import { InstrumentSliderBaseComponent } from './instrument-slider.base';
import { CrudFunctions, Nullable, ObservableBinding } from '@allmax-angular/shared/types';
import { instrumentTypesToLabelsMap } from '@allmax-angular/antero-web/types';
import { Instrument, InstrumentTypes } from '@allmax-angular/antero-web/entities';

@Component({ template: '' })
export class InstrumentFormBaseComponent extends InstrumentSliderBaseComponent implements OnInit {
  public typeData = [
    instrumentTypesToLabelsMap.get(InstrumentTypes.GUAGE),
    instrumentTypesToLabelsMap.get(InstrumentTypes.METER)
  ];

  public nameBinding = new ObservableBinding<string>();
  public unitsBinding = new ObservableBinding<string>();
  public typeBinding = new ObservableBinding<string>();
  public rolloverBinding = new ObservableBinding<number>();

  public get ready(): boolean {
    return this.nameBinding.validity && this.unitsBinding.validity;
  }

  public ngOnInit(): void {
    this.typeBinding.set(instrumentTypesToLabelsMap.get(InstrumentTypes.METER));
  }

  public populate(): void {
    if (this.source) {
      this.nameBinding.set(this.source.name);
      this.unitsBinding.set(this.source.units);
      this.typeBinding.set(instrumentTypesToLabelsMap.get(this.source.instrumentType));
      this.rolloverBinding.set(this.source.rollOver);
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

  public buildRecord(crud: CrudFunctions): Nullable<Instrument> {
    if (this.parent) {
      const record: Instrument = {
        id: (crud === CrudFunctions.COPY || crud === CrudFunctions.UPDATE) && this.source ? this.source.id : 0,
        name: this.nameBinding.value,
        instrumentType: this.typeBinding.value === instrumentTypesToLabelsMap.get(InstrumentTypes.GUAGE) ? InstrumentTypes.GUAGE : InstrumentTypes.METER,
        equipment: null,
        equipmentID: this.parent.id,
        units: this.unitsBinding.value,
        rollOver: this.rolloverBinding.value,
        lastReading: null,
        lastReadingDate: null
      };
      return record;
    }
    return null;    
  }
}







































 
//   public crud: CrudFunctions = CrudFunctions.READ;

//   public icons = { ...allIcons };

//   public customValidators: CustomValidator<string>[] = [];



//   public get formIsValid(): boolean { 
//     return this.nameBinding.validity && this.unitsBinding.validity;
//   }

//   constructor(private antero: AnteroService, private cdr: ChangeDetectorRef) {}

//   public ngAfterViewInit(): void {
//     this.typeBinding.set(instrumentTypesToLabelsMap.get(InstrumentTypes.METER));
//     this.customValidators = [
//       new CustomValidator<string>((val: any) => this.antero.checkIfNameExists(new ValidationData(
//         this.crud === CrudFunctions.UPDATE ? this.source as any : null,
//         val,
//         this.crud,
//         { model: 'instrument', columns: [ 'name', 'equipmentID' ], values: [ val, this.parent?.id ]})), `Equipment already has an instrument of that name`)
//     ];
//     this.populate();
//     this.cdr.detectChanges()
//   }

//   public ngOnDestroy(): void {
//     this.cdr.detach();
//   }

//   public populate(): void {
//     if (this.source) {
//       this.nameBinding.set(this.source.name);
//       this.unitsBinding.set(this.source.units);
//       this.typeBinding.set(instrumentTypesToLabelsMap.get(this.source.instrumentType));
//       this.rollOverBinding.set(this.source.rollOver);
//     }
//   }

//   public validityHandler(state: boolean, name: string): void {
//     switch(name) {
//       case 'name':
//         this.nameBinding.validity = state;
//         break;
//       case 'type':
//         this.typeBinding.validity = state;
//         break;
//       case 'units':
//         this.unitsBinding.validity = state;
//         break;
//     }
//   }

//   public closedHandler(): void {
//     this.antero.closeModal();
//   }