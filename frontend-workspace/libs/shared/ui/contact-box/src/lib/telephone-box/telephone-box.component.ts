import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'amx-telephone-box',
  templateUrl: './telephone-box.component.html',
  styleUrls: ['./telephone-box.component.scss'],
})
export class TelephoneBoxComponent {
  @Input() public label = '';
  @Input() public number = '';

  public get href(): string {
    return `tel:${this.number}`;
  }
}
