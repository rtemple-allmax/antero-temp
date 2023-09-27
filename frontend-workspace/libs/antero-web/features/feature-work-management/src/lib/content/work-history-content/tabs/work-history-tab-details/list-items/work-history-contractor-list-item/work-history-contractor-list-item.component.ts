import { ListItemBaseComponent } from '@allmax-angular/antero-web/bases';
import { WorkHistorySupplier } from '@allmax-angular/antero-web/entities';
import { Nullable } from '@allmax-angular/shared/types';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'ant-work-history-contractor-list-item',
  templateUrl: './work-history-contractor-list-item.component.html',
  styleUrls: ['./work-history-contractor-list-item.component.scss'],
})
export class WorkHistoryContractorListItemComponent extends ListItemBaseComponent {
  @Input() public record: Nullable<WorkHistorySupplier>;

  public get totalCost(): string {
    if (this.record) {
      const tax = this.record.taxCost || 0;
      const parts = this.record.partCost || 0;
      const misc = this.record.miscCost || 0;
      const labor = this.record.laborCost || 0;
      return this.formatAsCurrency(tax * parts * misc * labor);
    }
    return '';
  }
}
