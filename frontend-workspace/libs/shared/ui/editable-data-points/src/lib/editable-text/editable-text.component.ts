import { Component } from '@angular/core';
import { EditableDataPointBaseComponent } from '../editable-data-point.base';

@Component({
  selector: 'amx-editable-text',
  templateUrl: './editable-text.component.html',
  providers: [ { provide: EditableDataPointBaseComponent, useExisting: EditableTextComponent }],
  styleUrls: ['./editable-text.component.scss'],
})
export class EditableTextComponent extends EditableDataPointBaseComponent { }
