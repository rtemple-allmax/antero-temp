import { EquipmentControllerService } from '@allmax-angular/antero-web/data-access/equipment-controller';
import { Instrument, InstrumentTypes, Reading } from '@allmax-angular/antero-web/entities';
import { AnteroService } from '@allmax-angular/antero-web/services/antero-service';
import { EquipmentSectionStore } from '@allmax-angular/antero-web/state-management/equipment-section-store';
import { CardBaseComponent, Modals } from '@allmax-angular/antero-web/types';
import { CrudFunctions, Nullable } from '@allmax-angular/shared/types';
import { IndicatorTypes } from '@allmax-angular/shared/ui/card';
import { getDateTimeString } from '@allmax-angular/shared/utils';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ant-instrument-card',
  templateUrl: './instrument-card.component.html',
  styleUrls: ['./instrument-card.component.scss'],
})
export class InstrumentCardComponent extends CardBaseComponent implements OnInit {
  @Input() public source: Nullable<Instrument>;
  @Input() public titleWidth = '150px';

  public recentReadings: Reading[] = [];
  
  constructor(
    private antero: AnteroService,
    private ctrl: EquipmentControllerService,
    private store: EquipmentSectionStore
  ) { super(); }

  public ngOnInit(): void {
    this.options = [
      {
        label: 'Edit',
        icon: this.icons.editIcon,
        clickHandler: () => this.editHandler(),
        danger: false
      },
      {
        label: 'Delete',
        icon: this.icons.deleteIcon,
        clickHandler: () => this.deleteHandler(),
        danger: true
      }
    ];

    this.controls = [
      { icon: this.icons.instrumentsIcon, color: 'var(--icon-color)', clickHandler: () => this.enterReadingsHandler() },
      { icon: this.icons.historyIcon, color: 'var(--icon-color)', clickHandler: () => this.readingsHistoryHandler() }
    ]

    if (this.source) {
      if (this.source.instrumentType === InstrumentTypes.GUAGE) {
        this.indicators = [ { icon: this.icons.guageIcon, type: IndicatorTypes.ICON, color: 'var(--icon-color)', template: null } ];
      } else {
        this.indicators = [ { icon: this.icons.meterIcon, type: IndicatorTypes.ICON, color: 'var(--icon-color)', template: null } ];
      }
    }
    this.getReadings();
  }

  public async getReadings(): Promise<void> {
    if (this.source) {
      this.recentReadings = await (await this.ctrl.getReadingsHistory_Raw(this.source)).splice(0, 3)
    }
  }
  
  public enterReadingsHandler(): void {
    this.store.selectedInstrument = this.source;
    this.antero.openEnterReadings(true);
  }

  public readingsHistoryHandler(): void {
    this.store.selectedInstrument = this.source;
    this.antero.openModal(Modals.EQUIPMENT_READINGS_HISTORY);
  }

  public editHandler(): void {
    this.store.selectedInstrument = this.source;
    this.antero.openModal(Modals.EQUIPMENT_ADD_EDIT_INSTRUMENT, CrudFunctions.UPDATE);
  }

  public deleteHandler(): void {
    this.store.selectedInstrument = this.source;
    this.antero.openModal(Modals.EQUIPMENT_DELETE_INSTRUMENT);
  }

  public getDateTimeString(val: any): string {
    return getDateTimeString(val);
  }

  public getReadingData(record: Reading): string {
    return `${ record.value } ${ this.source?.units } - ${ this.getDateTimeString(record.dateOfReading)} by ${ record.userName }`;
  }
}
