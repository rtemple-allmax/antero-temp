import { ListItemBaseComponent } from '@allmax-angular/antero-web/bases';
import { WorkTemplatePart } from '@allmax-angular/antero-web/entities';
import { ImageData } from '@allmax-angular/antero-web/types';
import { Nullable } from '@allmax-angular/shared/types';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ant-work-template-part-list-item',
  templateUrl: './work-template-part-list-item.component.html',
  styleUrls: ['./work-template-part-list-item.component.scss'],
})
export class WorkTemplatePartListItemComponent extends ListItemBaseComponent implements OnInit {
  @Input() public record: Nullable<WorkTemplatePart>;
  public primaryImage: Nullable<ImageData>;

  public ngOnInit(): void {
    console.log('wtp', this.record)
  }
}
