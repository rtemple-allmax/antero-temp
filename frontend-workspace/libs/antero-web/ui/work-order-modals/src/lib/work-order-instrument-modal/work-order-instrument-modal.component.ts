import { WorkOrderInstrument } from '@allmax-angular/antero-web/entities';
import { Nullable, ObservableBinding } from '@allmax-angular/shared/types';
import { miscIcons } from '@allmax-angular/shared/ui/icons';
import { ModalWindowComponent } from '@allmax-angular/shared/ui/modal-window';
import { isNullOrEmpty } from '@allmax-angular/shared/utils';
import { Component, AfterViewInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ant-work-order-instrument-modal',
  templateUrl: './work-order-instrument-modal.component.html',
  styles: [],
})
export class WorkOrderInstrumentModalComponent implements AfterViewInit {
  @ViewChild(ModalWindowComponent) public modal: Nullable<ModalWindowComponent>;

  @Input() public height = 'auto';
  @Input() public record: Nullable<WorkOrderInstrument>;

  @Output() public closed = new EventEmitter<undefined>();
  @Output() public readingUpdated = new EventEmitter<WorkOrderInstrument>();

  public readingBinding = new ObservableBinding<number>();

  public icons = { ...miscIcons };

  public get ready(): boolean {
    return !isNullOrEmpty(this.readingBinding.value);
  }

  public get heading(): string {
    if (this.record) {
      return `Enter Reading for ${ this.record.instrument?.name }`;
    }
    return 'Enter Reading';
  }

  public ngAfterViewInit(): void {
    if (this.record) {
      this.readingBinding.set(this.record.reading);
    }
    this.modal?.open();
  }

  public closedHandler(): void {
    this.closed.emit();
  }

  public save(): void {
    if(this.ready && this.record) {
      this.record.reading = this.readingBinding.value as number;
      this.readingUpdated.emit(this.record); 
    }
  }
}
