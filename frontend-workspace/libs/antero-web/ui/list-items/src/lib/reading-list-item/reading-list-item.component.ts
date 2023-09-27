import { Reading } from '@allmax-angular/antero-web/entities';
import { Modals } from '@allmax-angular/antero-web/types';
import { CrudFunctions, Nullable } from '@allmax-angular/shared/types';
import { Component, Input } from '@angular/core';
import { EquipmentListItemBaseComponent } from '../equipment-list-item.base';

@Component({
  selector: 'ant-reading-list-item',
  templateUrl: './reading-list-item.component.html',
  styleUrls: ['./reading-list-item.component.scss'],
})
export class ReadingListItemComponent extends EquipmentListItemBaseComponent {
  @Input() public record: Nullable<Reading>;

  public get readingValue(): string {
    return `${ this.record?.value } By ${ this.record?.whereRecorded } - ${ this.record?.userName }`;
  }

  public editHandler(): void {
    this.eqStore.selectedReading = this.record;
    this.antero.openModal(Modals.EQUIPMENT_EDIT_READING, CrudFunctions.UPDATE);
    document.dispatchEvent(new Event('click'));
  }

  public deleteHandler(): void {
    this.eqStore.selectedReading = this.record;
    this.antero.openModal(Modals.EQUIPMENT_DELETE_READING);
    document.dispatchEvent(new Event('click'));
  }
}
