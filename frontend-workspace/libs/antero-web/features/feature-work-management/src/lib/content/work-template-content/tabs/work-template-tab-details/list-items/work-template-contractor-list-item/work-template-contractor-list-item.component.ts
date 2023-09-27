import { ListItemBaseComponent } from '@allmax-angular/antero-web/bases';
import { WorkTemplateSupplier } from '@allmax-angular/antero-web/entities';
import { Nullable } from '@allmax-angular/shared/types';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ant-work-template-contractor-list-item',
  templateUrl: './work-template-contractor-list-item.component.html',
  styleUrls: ['./work-template-contractor-list-item.component.scss'],
})
export class WorkTemplateContractorListItemComponent extends ListItemBaseComponent {
  @Input() public record: Nullable<WorkTemplateSupplier>;
}
