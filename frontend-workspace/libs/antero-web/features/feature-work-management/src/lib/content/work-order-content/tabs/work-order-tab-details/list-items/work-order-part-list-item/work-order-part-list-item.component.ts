import { ListItemBaseComponent } from '@allmax-angular/antero-web/bases';
import { WorkOrderPart } from '@allmax-angular/antero-web/entities';
import { ImageData } from '@allmax-angular/antero-web/types';
import { Nullable } from '@allmax-angular/shared/types';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'ant-work-order-part-list-item',
  templateUrl: './work-order-part-list-item.component.html',
  styleUrls: ['./work-order-part-list-item.component.scss'],
})
export class WorkOrderPartListItemComponent extends ListItemBaseComponent {
  @Input() public record: Nullable<WorkOrderPart>;
  public primaryImage: Nullable<ImageData>;
}
