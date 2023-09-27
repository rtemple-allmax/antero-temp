import { CrudFunctions, Nullable, ObservableBinding } from '@allmax-angular/shared/types';
import { ColorBoxComponent } from '@allmax-angular/shared/ui/form-fields/color-box';
import { TextBoxComponent } from '@allmax-angular/shared/ui/form-fields/text-box';
import { Component, ViewChild, Input, Output, EventEmitter, OnInit, AfterViewInit } from '@angular/core';
import { WorkStatus } from '@allmax-angular/antero-web/entities'
import { allIcons } from '@allmax-angular/shared/ui/icons';
import { isNullOrEmpty } from '@allmax-angular/shared/utils';

@Component({ template: '' })
export class WorkStatusFormBaseComponent implements OnInit, AfterViewInit {
  @ViewChild('nameField') public nameField: Nullable<TextBoxComponent>;
  @ViewChild('colorField') public colorField: Nullable<ColorBoxComponent>;

  @Input() public source: Nullable<WorkStatus>;

  @Output() public addRequested = new EventEmitter<WorkStatus>();
  @Output() public editRequested = new EventEmitter<WorkStatus>();
  @Output() public deleteRequested = new EventEmitter<WorkStatus>();
  @Output() public canceled = new EventEmitter<undefined>();

  public crudFunctions: typeof CrudFunctions = CrudFunctions;
  public icons = { ...allIcons };

  public nameBinding = new ObservableBinding<string>();
  public colorBinding = new ObservableBinding<string>();

  public labelFlexBasis = '0 0 100px';

  public get ready(): boolean {
    return !isNullOrEmpty(this.nameBinding.value) && !isNullOrEmpty(this.colorBinding.value);
  }

  public ngOnInit(): void {
    this.populate();
  }

  public ngAfterViewInit(): void {
    this.enableAndFocusFirstField();
  }

  public populate(): void {
    if (this.source) {
      this.nameBinding.set(this.source.name);
      this.colorBinding.set(this.source.color);
    }
  }

  public disable(): void {
    this.nameField?.setDisabledState(true);
    this.colorField?.setDisabledState(true);
  }

  public enable(): void {
    this.nameField?.setDisabledState(false);
    this.colorField?.setDisabledState(false);
  }

  public focusFirstField(): void {
    this.nameField?.focus();
  }

  public enableAndFocusFirstField(): void {
    this.enable();
    this.focusFirstField();
  }

  public submit(crud: CrudFunctions): void {
    if (this.ready) {
      switch (crud) {
        case CrudFunctions.CREATE:
          this.addRequested.emit({ id: 0, name: this.nameBinding.value, color: this.colorBinding.value || '#FFFFFF' });
          break;
        case CrudFunctions.UPDATE:
          if (this.source) {
            this.editRequested.emit({ ...this.source, name: this.nameBinding.value, color: this.colorBinding.value || '#FFFFFF' });
          }
          break;
        case CrudFunctions.DELETE:
          if (this.source) {
            this.deleteRequested.emit(this.source);
          }
          break;
      }
    } 
  }

  public cancelHandler(): void {
    this.canceled.emit();
  }

  public clear(): void {
    this.nameBinding.reset();
    this.colorBinding.reset();
  }
}