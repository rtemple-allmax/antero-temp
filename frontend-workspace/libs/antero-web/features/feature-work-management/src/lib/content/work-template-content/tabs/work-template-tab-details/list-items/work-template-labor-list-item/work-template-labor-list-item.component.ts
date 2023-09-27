import { ListItemBaseComponent } from '@allmax-angular/antero-web/bases';
import { WorkTemplateLabor } from '@allmax-angular/antero-web/entities';
import { Nullable } from '@allmax-angular/shared/types';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'ant-work-template-labor-list-item',
  templateUrl: './work-template-labor-list-item.component.html',
  styleUrls: ['./work-template-labor-list-item.component.scss'],
})
export class WorkTemplateLaborListItemComponent extends ListItemBaseComponent {
  @Input() public record: Nullable<WorkTemplateLabor>;
}
