import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'amx-email-box',
  templateUrl: './email-box.component.html',
  styleUrls: ['./email-box.component.scss'],
})
export class EmailBoxComponent {
  @Input() public label = '';
  @Input() public email = '';

  public get href(): string {
    return `mailto:${this.email}`;
  }
}
