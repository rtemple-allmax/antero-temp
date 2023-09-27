import { Nullable, ObservableBinding } from '@allmax-angular/shared/types';
import { TextBoxComponent } from '@allmax-angular/shared/ui/form-fields/text-box';
import { allIcons } from '@allmax-angular/shared/ui/icons';
import { isNullOrEmpty } from '@allmax-angular/shared/utils';
import { Component, AfterViewInit, EventEmitter, Input, OnInit, Output, ViewChild, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'amx-single-entry-form-text',
  templateUrl: './single-entry-form-text.component.html',
  styleUrls: ['./single-entry-form-text.component.scss'],
})
export class SingleEntryFormTextComponent implements AfterViewInit, OnChanges {
  @ViewChild(TextBoxComponent) public textbox: Nullable<TextBoxComponent>;

  @Input() public placeholder = 'Add New Item';
  @Input() public label: Nullable<string>;
  @Input() public source: Nullable<string>;
  @Input() public icon = allIcons.saveIcon;
  @Input() public flow = 'row nowrap';
  @Output() public submitted = new EventEmitter<string>();

  public binding: ObservableBinding<string> = new ObservableBinding<string>();

  public get ready(): boolean {
    return !isNullOrEmpty(this.binding.value);
  }

  // public ngOnInit(): void {
  //   if (this.source) {
  //     this.binding.set(this.source);
  //   }
  // }

  public ngAfterViewInit(): void {
    console.log('source in after single entry', this.source);
    if (this.source) {
      this.binding.set(this.source);
    }
    this.focus();
  }

  public ngOnChanges(changes: SimpleChanges): void {
    console.log('source in changes single entry', this.source);
    if (this.source) {
      this.binding.set(this.source);
    }
  }

  public focus(): void {
    this.textbox?.focus();
  }

  public enable(): void {
    this.textbox?.setDisabledState(false);
  }

  public enableAndFocus(): void {
    this.enable();
    this.focus();
  }

  public disable(): void {
    this.textbox?.setDisabledState(true);
  }

  public submit(): void {
    if (this.ready) {
      this.submitted.emit(this.binding.value || '')
      this.binding.reset();
      this.textbox?.focus();
    }
  }
}
