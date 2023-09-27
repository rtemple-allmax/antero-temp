import { AnteroService } from '@allmax-angular/antero-web/services/antero-service';
import { Nullable } from '@allmax-angular/shared/types';
import { ModalWindowComponent } from '@allmax-angular/shared/ui/modal-window';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'ant-transfer-stock-tool',
  templateUrl: './transfer-stock-tool.component.html',
  styleUrls: ['./transfer-stock-tool.component.scss'],
})
export class TransferStockToolComponent implements AfterViewInit {
  @ViewChild(ModalWindowComponent) public modal: Nullable<ModalWindowComponent>;

  constructor(private antero: AnteroService) { }

  public ngAfterViewInit(): void {
    this.modal?.open();
  }

  public closedHandler(): void {
    this.antero.closeModal();
  }
}
