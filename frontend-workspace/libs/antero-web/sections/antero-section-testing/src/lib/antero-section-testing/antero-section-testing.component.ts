import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'ant-antero-section-testing',
  templateUrl: './antero-section-testing.component.html',
  styleUrls: ['./antero-section-testing.component.scss'],
})
export class AnteroSectionTestingComponent {
  public columns = 'repeat(2, 1fr)';
}
