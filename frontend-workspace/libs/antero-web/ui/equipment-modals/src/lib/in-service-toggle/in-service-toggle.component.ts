import { EquipmentControllerService } from '@allmax-angular/antero-web/data-access/equipment-controller';
import { Equipment, EquipmentInServiceHistory, User } from '@allmax-angular/antero-web/entities';
import { AnteroService } from '@allmax-angular/antero-web/services/antero-service';
import { AnteroStoreService } from '@allmax-angular/antero-web/state-management/antero-store';
import { EquipmentSectionStore } from '@allmax-angular/antero-web/state-management/equipment-section-store';
import { Modals } from '@allmax-angular/antero-web/types';
import { Nullable, ObservableBinding } from '@allmax-angular/shared/types';
import { allIcons, miscIcons } from '@allmax-angular/shared/ui/icons';
import { ModalWindowComponent } from '@allmax-angular/shared/ui/modal-window';
import { unsubscribe } from '@allmax-angular/shared/utils';
import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ant-in-service-toggle',
  templateUrl: './in-service-toggle.component.html',
  styleUrls: ['./in-service-toggle.component.scss'],
})
export class InServiceToggleComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(ModalWindowComponent) public modal: Nullable<ModalWindowComponent>;

  private subs: Subscription[] = [];

  public dateBinding = new ObservableBinding<Date>(new Date());
  public commentBinding = new ObservableBinding<string>('');

  public selectedEquipment: Nullable<Equipment>;
  public user: Nullable<User>;

  public icons = { ...allIcons };

  public get label(): string {
    return `This action will ${ this.selectedEquipment?.inServiceStatus ? 'take' : 'put' } this equipment 
    ${ this.selectedEquipment?.inServiceStatus ? 'out of service' : 'in service' } on the following date.`;
  }

  public get ready(): boolean {
    return !!this.selectedEquipment && !!this.dateBinding.value;
  }

  constructor(
    private antero: AnteroService,
    private appStore: AnteroStoreService,
    private ctrl: EquipmentControllerService,
    private store: EquipmentSectionStore
  ) { }

  public ngOnInit(): void {
    this.subs.push(this.store.selection$.subscribe(x => this.selectedEquipment = x));
    this.subs.push(this.appStore.user$.subscribe(x => this.user = x));
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

  public async submit(): Promise<void> {
    if (!this.selectedEquipment || !this.dateBinding.value) { return; }
    const record: EquipmentInServiceHistory = {
      id: 0,
      equipmentID: this.selectedEquipment.id,
      equipment: null,
      dateChanged: this.dateBinding.value,
      dateStatusChanged: this.dateBinding.value,
      inService: !this.selectedEquipment.inServiceStatus,
      comment: this.commentBinding.value,
      userName: this.user?.username || '' 
    }

    const result = await this.ctrl.toggleInServiceStatus(record);
  }

  public showHistory(): void {
    this.antero.openModal(Modals.EQUIPMENT_IN_SERVICE_HISTORY);
  }
}
