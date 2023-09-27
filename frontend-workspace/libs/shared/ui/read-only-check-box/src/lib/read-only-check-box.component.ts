import { Component, Input } from '@angular/core';

@Component({
  selector: 'amx-read-only-check-box',
  templateUrl: './read-only-check-box.component.html',
  styles: [],
})
export class ReadOnlyCheckBoxComponent {
  @Input() public label = '';
}
