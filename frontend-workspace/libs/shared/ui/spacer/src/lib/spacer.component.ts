import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'amx-spacer',
  templateUrl: './spacer.component.html',
  styleUrls: ['./spacer.component.scss'],
})
export class SpacerComponent {
  @Input() public space = 'var(--space-lg)';
  @Input() public vertical = true;
}
