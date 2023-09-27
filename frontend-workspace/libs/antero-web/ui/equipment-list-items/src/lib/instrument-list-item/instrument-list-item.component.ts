import { EquipmentControllerService } from '@allmax-angular/antero-web/data-access/equipment-controller';
import { Instrument, Reading } from '@allmax-angular/antero-web/entities';
import { Nullable } from '@allmax-angular/shared/types';
import { CrudButtonComponent } from '@allmax-angular/shared/ui/buttons/crud-button';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { EquipmentListItemBaseComponent } from '../equipment-list-item.base';

@Component({
  selector: 'ant-instrument-list-item',
  templateUrl: './instrument-list-item.component.html',
  styleUrls: ['./instrument-list-item.component.scss'],
})
export class InstrumentListItemComponent extends EquipmentListItemBaseComponent implements OnInit {
  @ViewChild(CrudButtonComponent) public crudBtn: Nullable<CrudButtonComponent>;

  @Input() public record: Nullable<Instrument>;

  public lastReading: Nullable<Reading>;

  public ngOnInit(): void {
    this.populateLastReading();
  }

  private async populateLastReading(): Promise<void> {
    if (!this.record) { return; }
    const readings = await this.ctrl.getReadingsHistory_Raw(this.record);
    if (readings?.length > 0) {
      this.lastReading = readings[0];
    }
  }

  public enterReadingsHandler(): void {
    if (this.record) {
      this.store.selectedInstrument = this.record;
    }
    this.antero.openEnterReadings(true);
  }

  public readingsHistoryHandler(): void {
    if (this.record) {
      this.store.selectedInstrument = this.record;
      this.antero.openModal(this.modals.EQUIPMENT_READINGS_HISTORY);
    }
  }

  public editHandler(): void {
    if (this.record) {
      this.store.selectedInstrument = this.record;
    }
    this.antero.openModal(this.modals.EQUIPMENT_ADD_EDIT_INSTRUMENT, this.crudFunctions.UPDATE);
  }

  public deleteHandler(): void {
    if (this.record) {
      this.store.selectedInstrument = this.record;
    }
    this.antero.openModal(this.modals.EQUIPMENT_DELETE_INSTRUMENT);
  }

  public getReadingData(record: Nullable<Instrument>): string {
    if (record?.lastReading) {
      return `${ record.lastReading } ${ record.units } - ${ this.getDateTimeString(record.lastReadingDate)} by ${ this.lastReading?.fullName }`;
    }
    return 'No Readings have been entered for this Instrument.';
  }
  
  public closeMenu(): void {
    this.crudBtn?.close();
  }
}
