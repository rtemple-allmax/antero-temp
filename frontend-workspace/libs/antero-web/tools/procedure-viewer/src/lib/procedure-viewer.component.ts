import { AnteroService } from '@allmax-angular/antero-web/services/antero-service';
import { Nullable } from '@allmax-angular/shared/types';
import { ModalWindowComponent } from '@allmax-angular/shared/ui/modal-window';
import { AfterViewInit, Component, ViewChild } from '@angular/core';

@Component({
  selector: 'ant-procedure-viewer',
  templateUrl: './procedure-viewer.component.html',
  styles: [],
})
export class ProcedureViewerComponent implements AfterViewInit {
  @ViewChild(ModalWindowComponent) public modal: Nullable<ModalWindowComponent>;

  constructor(private antero: AnteroService) { }

  public ngAfterViewInit(): void {
    this.modal?.open();
  }

  public closedHandler(): void {
    this.antero.closeModal();
  }
}
