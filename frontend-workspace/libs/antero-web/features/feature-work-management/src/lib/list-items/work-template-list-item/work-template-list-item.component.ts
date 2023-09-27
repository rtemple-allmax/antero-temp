import { ListItemBaseComponent } from '@allmax-angular/antero-web/bases';
import { WorkTemplate } from '@allmax-angular/antero-web/entities';
import { Nullable } from '@allmax-angular/shared/types';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'ant-work-template-list-item',
  templateUrl: './work-template-list-item.component.html',
  styleUrls: ['./work-template-list-item.component.scss'],
})
export class WorkTemplateListItemComponent extends ListItemBaseComponent {
  @Input() public record: Nullable<WorkTemplate>;
}
