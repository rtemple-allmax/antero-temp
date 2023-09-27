import { EquipmentControllerService } from '@allmax-angular/antero-web/data-access/equipment-controller';
import { Equipment } from '@allmax-angular/antero-web/entities';
import { AnteroService } from '@allmax-angular/antero-web/services/antero-service';
import { AnteroStoreService } from '@allmax-angular/antero-web/state-management/antero-store';
import { EquipmentSectionStore } from '@allmax-angular/antero-web/state-management/equipment-section-store';
import { Nullable, ObservableBinding } from '@allmax-angular/shared/types';
import { allIcons } from '@allmax-angular/shared/ui/icons';
import { ModalWindowComponent } from '@allmax-angular/shared/ui/modal-window';
import { unsubscribe } from '@allmax-angular/shared/utils';
import { AfterViewInit, Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ant-manage-criticality',
  templateUrl: './manage-criticality.component.html',
  styleUrls: ['./manage-criticality.component.scss'],
})
export class ManageCriticalityComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(ModalWindowComponent) public modal: Nullable<ModalWindowComponent>;

  private subs: Subscription[] = [];

  public icons = { ...allIcons };

  public record: Nullable<Equipment>;
  
  public consequenceBinding = new ObservableBinding<number>(1);
  public probabilityBinding = new ObservableBinding<number>(1);

  public rankingName: Nullable<string>;
  
  public get score(): number {
    return (this.consequenceBinding.value || 1) * (this.probabilityBinding.value  || 1);
  }
  
  constructor(
    private antero: AnteroService,
    private appStore: AnteroStoreService,
    private ctrl: EquipmentControllerService,
    private eqStore: EquipmentSectionStore
  ) { }

  public ngOnInit(): void {
    this.subs.push(this.eqStore.selection$.subscribe(x => {
      this.record = x;
      if (this.record) {
        this.consequenceBinding.set(this.record.consequenceOfFailure || 1);
        this.probabilityBinding.set(this.record.probabilityOfFailure || 1);
      }
    }))

    this.probabilityBinding.value$.subscribe(() => this.updateRanking())
    this.consequenceBinding.value$.subscribe(() => this.updateRanking())
  }

  public ngAfterViewInit(): void {
    this.modal?.open();
  }

  public ngOnDestroy(): void {
    unsubscribe(this.subs);
  }

  public closeHandler(): void {
    this.antero.closeModal();
  } 
  
  public async updateRanking(): Promise<void> {
    const ranking = await this.ctrl.getCriticalityByValue(this.score);
    if (ranking) {
      this.rankingName = ranking.name;
    }
  }

  public async submit(): Promise<void> {
    if (this.record) {
      const recordToUpdate: Equipment = {
        ...this.record,
        consequenceOfFailure: this.consequenceBinding.value,
        probabilityOfFailure: this.probabilityBinding.value
      }

      const result = await this.ctrl.editEquipment(recordToUpdate);
      if (result) {
        this.eqStore.selection = result;
        this.appStore.refresh = true;
        this.antero.closeModal();
      }
    }
  }
}
