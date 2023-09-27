import { Nullable } from '@allmax-angular/shared/types';
import { ModalWindowComponent } from '@allmax-angular/shared/ui/modal-window';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'amx-error-window',
  templateUrl: './error-window.component.html',
  styles: [],
})
export class ErrorWindowComponent {
  @ViewChild(ModalWindowComponent) public modal: Nullable<ModalWindowComponent>;

  public heading = 'Error';
  public message = '';

  public open(message: string, heading = 'Error'): void {
    this.heading = heading;
    this.message = message;
    this.modal?.open();
  }

  public close(): void {
    this.modal?.close();
    this.message = '';
  }
}
