import { Component, Input } from '@angular/core';

@Component({
  selector: 'ant-home-card',
  templateUrl: './home-card.component.html',
  styleUrls: ['./home-card.component.scss'],
})
export class HomeCardComponent {
  @Input() public heading = '';
}
