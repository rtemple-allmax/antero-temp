import { Component, Input } from '@angular/core';
import { EditableDataPointBaseComponent } from '../editable-data-point.base';

@Component({
  selector: 'amx-editable-number',
  templateUrl: './editable-number.component.html',
  providers: [ { provide: EditableDataPointBaseComponent, useExisting: EditableNumberComponent }],
  styleUrls: ['./editable-number.component.scss'],
})
export class EditableNumberComponent extends EditableDataPointBaseComponent {
  @Input() public min = 0;
  @Input() public max = Number.MAX_SAFE_INTEGER;
}
