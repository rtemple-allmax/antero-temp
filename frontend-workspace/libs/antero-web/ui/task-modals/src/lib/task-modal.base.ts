import { Task } from '@allmax-angular/antero-web/entities';
import { AnteroService } from '@allmax-angular/antero-web/services/antero-service';
import { EquipmentSectionStore } from '@allmax-angular/antero-web/state-management/equipment-section-store';
import { Nullable, ObservableBinding } from '@allmax-angular/shared/types';
import { allIcons } from '@allmax-angular/shared/ui/icons';
import { ModalWindowComponent } from '@allmax-angular/shared/ui/modal-window';
import { isNullOrEmpty, unsubscribe } from '@allmax-angular/shared/utils';
import { Component, AfterViewInit, ViewChild, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({ template: '' })
export class TaskModalBaseComponent implements AfterViewInit, OnDestroy  {
  @ViewChild(ModalWindowComponent) public modal: Nullable<ModalWindowComponent>;

  protected subs: Subscription[] = [];

  public icons = { ...allIcons };

  public source: Nullable<Task>;
  public nameBinding = new ObservableBinding<string>();
  public htmlBinding = new ObservableBinding<string>();

  public get ready(): boolean {
    return !isNullOrEmpty(this.nameBinding.value);
  }

  constructor(
    protected antero: AnteroService,
    protected eqStore: EquipmentSectionStore
  ) { }  

  public ngAfterViewInit(): void {
    this.modal?.open();
  }

  public ngOnDestroy(): void {
    unsubscribe(this.subs);
  }

  public closedHandler(): void {
    this.antero.closeModal();
  }

  public populate(): void {
    if (this.source) {
      this.nameBinding.set(this.source.name);
      this.htmlBinding.set(this.source.instructionsString);
    }
  }

  public submitAdd(): void {
    console.log('add task', { name: this.nameBinding.value, instructions: this.htmlBinding.value })
  }

  public submitEdit(): void {
    console.log('edit task', { name: this.nameBinding.value, instructions: this.htmlBinding.value, source: this.source })
  }

  public submitDelete(): void {
    console.log('delete task', { source: this.source })
  }
}