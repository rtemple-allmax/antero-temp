import { Nullable, ObservableBinding } from '@allmax-angular/shared/types';
import { NumberBoxComponent } from '@allmax-angular/shared/ui/form-fields/number-box';
import { allIcons } from '@allmax-angular/shared/ui/icons';
import { isNullOrEmpty } from '@allmax-angular/shared/utils';
import { Component, OnInit, AfterViewInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'amx-single-entry-form-number',
  templateUrl: './single-entry-form-number.component.html',
  styleUrls: ['./single-entry-form-number.component.scss'],
})
export class SingleEntryFormNumberComponent implements OnInit, AfterViewInit {
  @ViewChild(NumberBoxComponent) public numberbox: Nullable<NumberBoxComponent>;

  @Input() public placeholder = 'Add New Item';
  @Input() public label: Nullable<string>;
  @Input() public source: Nullable<number>;
  @Input() public icon = allIcons.saveIcon;
  @Input() public flow = 'row nowrap';

  @Input() public min = 0;
  @Input() public max = Number.MAX_SAFE_INTEGER;
  
  @Output() public submitted = new EventEmitter<number>();

  public binding: ObservableBinding<number> = new ObservableBinding<number>();

  public get ready(): boolean {
    return !isNullOrEmpty(this.binding.value);
  }

  public ngOnInit(): void {
    if (this.source) {
      this.binding.set(this.source);
    }
  }

  public ngAfterViewInit(): void {
    this.focus();
  }

  public focus(): void {
    this.numberbox?.focus();
  }

  public enable(): void {
    this.numberbox?.setDisabledState(false);
  }

  public enableAndFocus(): void {
    this.enable();
    this.focus();
  }

  public disable(): void {
    this.numberbox?.setDisabledState(true);
  }

  public submit(): void {
    if (this.ready) {
      this.submitted.emit(this.binding.value as number)
      this.binding.reset();
      this.numberbox?.focus();
    }
  }
}
