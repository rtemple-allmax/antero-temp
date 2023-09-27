import { ListItemBaseComponent } from '@allmax-angular/antero-web/bases';
import { WorkTemplateEquipment } from '@allmax-angular/antero-web/entities';
import { Nullable } from '@allmax-angular/shared/types';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ant-work-template-tool-list-item',
  templateUrl: './work-template-tool-list-item.component.html',
  styleUrls: ['./work-template-tool-list-item.component.scss'],
})
export class WorkTemplateToolListItemComponent extends ListItemBaseComponent {
  @Input() public record: Nullable<WorkTemplateEquipment>;
}
