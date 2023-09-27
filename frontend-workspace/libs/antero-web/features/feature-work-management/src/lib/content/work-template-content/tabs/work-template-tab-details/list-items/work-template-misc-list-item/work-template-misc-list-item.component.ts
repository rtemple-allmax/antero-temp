import { ListItemBaseComponent } from '@allmax-angular/antero-web/bases';
import { WorkTemplateMisc } from '@allmax-angular/antero-web/entities';
import { Nullable } from '@allmax-angular/shared/types';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ant-work-template-misc-list-item',
  templateUrl: './work-template-misc-list-item.component.html',
  styleUrls: ['./work-template-misc-list-item.component.scss'],
})
export class WorkTemplateMiscListItemComponent extends ListItemBaseComponent {
  @Input() public record: Nullable<WorkTemplateMisc>;
}
