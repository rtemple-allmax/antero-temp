import { Nullable, ObservableBinding } from '@allmax-angular/shared/types';
import { allIcons } from '@allmax-angular/shared/ui/icons';
import { isNullOrEmpty } from '@allmax-angular/shared/utils';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'amx-single-entry-form-selection',
  templateUrl: './single-entry-form-selection.component.html',
  styleUrls: ['./single-entry-form-selection.component.scss'],
})
export class SingleEntryFormSelectionComponent implements OnInit {
  @Input() public placeholder = 'Add New Item';
  @Input() public label: Nullable<string>;
  @Input() public source: Nullable<any>;
  @Input() public icon = allIcons.saveIcon;
  @Input() public flow = 'row nowrap';
  @Input() public items: any[] = [];

  @Output() public opened = new EventEmitter<any>();
  @Output() public addRequested = new EventEmitter<any>();
  @Output() public submitted = new EventEmitter<any>();

  public binding: ObservableBinding<any> = new ObservableBinding<any>();

  public get ready(): boolean {
    return !isNullOrEmpty(this.binding.value);
  }

  public ngOnInit(): void {
    if (this.source) {
      this.binding.set(this.source);
    }
  }

  public addHandler(val: any): void {
    this.addRequested.emit(val);
  }

  public openedHandler(): void {
    this.opened.emit();
  }
  
  public submit(): void {
    if (this.ready) {
      this.submitted.emit(this.binding.value)
      this.binding.reset();
    }
  }
}
