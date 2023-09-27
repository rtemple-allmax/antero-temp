import { LaborClass } from '@allmax-angular/antero-web/entities';
import { CrudFunctions, Nullable, ObservableBinding } from '@allmax-angular/shared/types';
import { NumberBoxComponent } from '@allmax-angular/shared/ui/form-fields/number-box';
import { TextBoxComponent } from '@allmax-angular/shared/ui/form-fields/text-box';
import { allIcons } from '@allmax-angular/shared/ui/icons';
import { isNullOrEmpty } from '@allmax-angular/shared/utils';
import { Component, Output, EventEmitter, Input, OnInit, ViewChild, AfterViewInit } from '@angular/core';

@Component({ template: ''})
export class LaborClassFormBaseComponent implements OnInit, AfterViewInit {
  @ViewChild('nameField') public nameField: Nullable<TextBoxComponent>;
  @ViewChild('rateField') public rateField: Nullable<NumberBoxComponent>;

  @Input() public source: Nullable<LaborClass>;

  @Output() public addRequested = new EventEmitter<LaborClass>();
  @Output() public editRequested = new EventEmitter<LaborClass>();
  @Output() public deleteRequested = new EventEmitter<LaborClass>();
  @Output() public canceled = new EventEmitter<undefined>();

  public crudFunctions: typeof CrudFunctions = CrudFunctions;
  public icons = { ...allIcons };

  public nameBinding = new ObservableBinding<string>();
  public rateBinding = new ObservableBinding<number>();

  public currencyFormat = '$ ###,###,###,##0.00';
  public labelFlexBasis = '0 0 50px';

  public get ready(): boolean {
    return !isNullOrEmpty(this.nameBinding.value) && !isNullOrEmpty(this.rateBinding.value);
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
      this.rateBinding.set(this.source.rate);
    }
  }

  public disable(): void {
    this.nameField?.setDisabledState(true);
    this.rateField?.setDisabledState(true);
  }

  public enable(): void {
    this.nameField?.setDisabledState(false);
    this.rateField?.setDisabledState(false);
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
          this.addRequested.emit({ id: 0, name: this.nameBinding.value, rate: this.rateBinding.value });
          break;
        case CrudFunctions.UPDATE:
          if (this.source) {
            this.editRequested.emit({ ...this.source, name: this.nameBinding.value, rate: this.rateBinding.value });
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
    this.rateBinding.set(null);
  }
}