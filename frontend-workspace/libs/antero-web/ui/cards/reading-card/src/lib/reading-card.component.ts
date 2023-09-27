import { Reading } from '@allmax-angular/antero-web/entities';
import { AnteroService } from '@allmax-angular/antero-web/services/antero-service';
import { EquipmentSectionStore } from '@allmax-angular/antero-web/state-management/equipment-section-store';
import { CardBaseComponent, Modals } from '@allmax-angular/antero-web/types';
import { Nullable } from '@allmax-angular/shared/types';
import { CardOption } from '@allmax-angular/shared/ui/card';
import { allIcons } from '@allmax-angular/shared/ui/icons';
import { getDateString, getDateTimeString } from '@allmax-angular/shared/utils';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ant-reading-card',
  templateUrl: './reading-card.component.html',
  styleUrls: ['./reading-card.component.scss'],
})
export class ReadingCardComponent extends CardBaseComponent implements OnInit {
  @Input() public source: Nullable<Reading>;
  
  public get dateTimeString(): string {
    return getDateTimeString(this.source?.dateOfReading || '');
  }

  public get readingValue(): string {
    return `${ this.source?.value } By ${ this.source?.whereRecorded } - ${ this.source?.userName }`;
  }

  constructor(
    private antero: AnteroService,
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
      ]
  }

  public editHandler(): void {
    if (this.source) {
      this.store.selectedReading = this.source;
      this.antero.openModal(Modals.EQUIPMENT_EDIT_READING);
    }
  }

  public deleteHandler(): void {
    if (this.source) {
      this.store.selectedReading = this.source;
      this.antero.openModal(Modals.EQUIPMENT_DELETE_READING);
    }
  }
}
