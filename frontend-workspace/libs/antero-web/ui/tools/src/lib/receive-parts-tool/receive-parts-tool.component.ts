import { AnteroService } from '@allmax-angular/antero-web/services/antero-service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ant-receive-parts-tool',
  templateUrl: './receive-parts-tool.component.html',
  styleUrls: ['./receive-parts-tool.component.scss'],
})
export class ReceivePartsToolComponent {
  constructor(private antero: AnteroService) { }

  public closedHandler(): void {
    this.antero.closeModal();
  }
}
