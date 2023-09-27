import { WorkOrderSupplier } from '@allmax-angular/antero-web/entities';
import { Nullable } from '@allmax-angular/shared/types';
import { Component, Input } from '@angular/core';
import { WorkOrderListItemBaseComponent } from '../work-order-list-item.base';

@Component({
  selector: 'ant-work-order-contractor-list-item',
  templateUrl: './work-order-contractor-list-item.component.html',
  styleUrls: ['./work-order-contractor-list-item.component.scss'],
})
export class WorkOrderContractorListItemComponent extends WorkOrderListItemBaseComponent {
  @Input() public record: Nullable<WorkOrderSupplier>;

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
