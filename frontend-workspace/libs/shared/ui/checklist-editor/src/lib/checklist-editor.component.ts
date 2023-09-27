import { ChecklistItem } from '@allmax-angular/antero-web/types';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'amx-checklist-editor',
  templateUrl: './checklist-editor.component.html',
  styleUrls: ['./checklist-editor.component.scss'],
})
export class ChecklistEditorComponent {
  @Input() public height = '300px';
  public checklist: ChecklistItem[] = [];
}
