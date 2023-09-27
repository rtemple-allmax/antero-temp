import { Instrument, InstrumentTypes } from '@allmax-angular/antero-web/entities';
import { DataStores, instrumentTypesToLabelsMap } from '@allmax-angular/antero-web/types';
import { CrudFunctions, CustomValidator, Nullable, ObservableBinding, ValidationData } from '@allmax-angular/shared/types';
import { Component, Input, inject, ViewChild } from '@angular/core';
import { EquipmentStatePropNames } from '../../../types/store.schema';
import { Sliders } from '../../../types/sliders.enum';
import { DatabaseController } from '@allmax-angular/antero-web/data-access/database-controller';
import { EquipmentControllerService } from '@allmax-angular/antero-web/data-access/equipment-controller';
import { allIcons } from '@allmax-angular/shared/ui/icons';
import { CrudListItemComponent } from '@allmax-angular/shared/ui/crud-list-item';
import { getDateTimeString } from '@allmax-angular/shared/utils';
import { StateManagementService } from '@allmax-angular/shared/features/state-management';

@Component({
  selector: 'ant-equipment-list-item-instrument',
  templateUrl: './equipment-list-item-instrument.component.html',
  styleUrls: ['./equipment-list-item-instrument.component.scss'],
})
export class EquipmentListItemInstrumentComponent {
  @ViewChild(CrudListItemComponent) public item: Nullable<CrudListItemComponent>;

  @Input() public record: Nullable<Instrument>;

  public nameBinding = new ObservableBinding<string>();
  public unitsBinding = new ObservableBinding<string>();
  public typeBinding = new ObservableBinding<string>();
  public rolloverBinding = new ObservableBinding<number>();

  public icons = { ...allIcons };

  public typeData = [
    instrumentTypesToLabelsMap.get(InstrumentTypes.GUAGE),
    instrumentTypesToLabelsMap.get(InstrumentTypes.METER)
  ];

  private dbCtrl = inject(DatabaseController);
  private eqCtrl = inject(EquipmentControllerService);
  private state = inject(StateManagementService);

  public customValidators: CustomValidator<string>[] = [
    new CustomValidator<string>((val: any) => this.dbCtrl.nameExists(new ValidationData(
      this.record as any,
      val,
      CrudFunctions.UPDATE,
      { model: 'instrument', columns: [ 'name', 'equipmentID' ], values: [ val, this.record?.equipment?.id ]})),
      `Equipment already has an instrument of that name`
    )
  ]
  
  public menuItems = [
    {
      text: 'Enter Readings',
      icon: this.icons.instrumentsIcon,
      template: 'contextMenuItemTemplate',
      disabled: false,
      danger: false,
      onItemClick: () => this.enterReadingsHandler()
    },
    {
      text: 'Show History',
      icon: this.icons.historyIcon,
      template: 'contextMenuItemTemplate',
      disabled: false,
      danger: false,
      onItemClick: () => this.historyHandler()
    },
    {
      text: 'Edit',
      icon: this.icons.editIcon,
      template: 'contextMenuItemTemplate',
      disabled: false,
      danger: false,
      onItemClick: () => this.item?.editHandler()
    },
    {
      text: 'Delete',
      icon: this.icons.deleteIcon,
      template: 'contextMenuItemTemplate',
      disabled: false,
      danger: true,
      onItemClick: () => this.item?.deleteHandler()
    },
  ]

  public get ready(): boolean {
    return this.nameBinding.validity && this.unitsBinding.validity;
  }

  public get readingData(): string {
    if (this.record?.lastReading) {
      return `${ this.record.lastReading } ${ this.record.units } - ${ this.getDateTimeString() }`;
    }
    return 'No Readings have been entered for this Instrument.';
  }

  public getDateTimeString(): string {
    if (this.record?.lastReadingDate) {
      return getDateTimeString(this.record.lastReadingDate);
    }
    return '';
  }
  
  public enterReadingsHandler(): void {
    this.state.getStore(DataStores.EQUIPMENT)?.setValue(EquipmentStatePropNames.OPEN_SLIDER, Sliders.ENTER_READINGS);
  }

  public historyHandler(): void {
    this.state.getStore(DataStores.EQUIPMENT)?.setValue(EquipmentStatePropNames.OPEN_SLIDER, Sliders.READING_HISTORY);
  }
  
  public populate(): void {
    if (this.record) {
      this.nameBinding.set(this.record.name);
      this.unitsBinding.set(this.record.units);
      this.typeBinding.set(instrumentTypesToLabelsMap.get(this.record.instrumentType));
      this.rolloverBinding.set(this.record.rollOver);
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

  public async  submit(): Promise<void> {
    if (this.record) {
      const record = {
        ...this.record,
        name: this.nameBinding.value,
        instrumentType: this.typeBinding.value === instrumentTypesToLabelsMap.get(InstrumentTypes.GUAGE) ? InstrumentTypes.GUAGE : InstrumentTypes.METER,
        units: this.unitsBinding.value,
        rollOver: this.rolloverBinding.value,
      }
      const res = await this.eqCtrl.editInstrument(record);
      if (res) {
        this.item?.reset();
        this.state.getStore(DataStores.EQUIPMENT)?.setValue(EquipmentStatePropNames.REFRESH, true);
      }
    }
  }

  public cancel(): void {
    this.item?.reset();
  }

  public async confirm(): Promise<void> {
    if (this.record) {
      const res = await this.eqCtrl.deleteInstrument(this.record);
      if (res) {
        this.state.getStore(DataStores.EQUIPMENT)?.setValue(EquipmentStatePropNames.REFRESH, true);
        this.item?.reset();
      }
    }
  }
}
