import { EquipmentControllerService } from '@allmax-angular/antero-web/data-access/equipment-controller';
import { Equipment } from '@allmax-angular/antero-web/entities';
import { AnteroService } from '@allmax-angular/antero-web/services/antero-service';
import { EquipmentSectionStore } from '@allmax-angular/antero-web/state-management/equipment-section-store';
import { Nullable, ObservableBinding } from '@allmax-angular/shared/types';
import { miscIcons } from '@allmax-angular/shared/ui/icons';
import { ModalWindowComponent } from '@allmax-angular/shared/ui/modal-window';
import { isNullOrEmpty, unsubscribe } from '@allmax-angular/shared/utils';
import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ant-equipment-replace',
  templateUrl: './equipment-replace.component.html',
  styleUrls: ['./equipment-replace.component.scss'],
})
export class EquipmentReplaceComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(ModalWindowComponent) public modal: Nullable<ModalWindowComponent>; 
  
  private subs: Subscription[] = [];

  public newNameBinding = new ObservableBinding<string>();
  public selection: Nullable<Equipment>;

  public icons = { ...miscIcons };

  public get ready(): boolean {
    return !isNullOrEmpty(this.newNameBinding.value) && !!this.selection;
  }

  constructor(
    private antero: AnteroService,
    private ctrl: EquipmentControllerService,
    private store: EquipmentSectionStore
  ) {}

  public ngOnInit(): void {
    this.subs.push(this.store.selection$.subscribe(x => this.selection = x));
  }

  public ngAfterViewInit(): void {
    this.modal?.open();
  }

  public ngOnDestroy(): void {
    unsubscribe(this.subs);
  }

  public closedHandler(): void {
    this.antero.closeModal();
  }

  public submit(): void {
    if (this.selection && !isNullOrEmpty(this.newNameBinding.value)) {
      this.ctrl.replace(this.selection.id, this.newNameBinding.value as string);
    }
  }
}
