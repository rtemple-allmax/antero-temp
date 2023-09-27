import { AnteroService } from '@allmax-angular/antero-web/services/antero-service';
import { Component } from '@angular/core';

@Component({
  selector: 'ant-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {
  constructor(private antero: AnteroService) { }

  public closeHandler(): void {
    this.antero.closeModal();
  }
}
