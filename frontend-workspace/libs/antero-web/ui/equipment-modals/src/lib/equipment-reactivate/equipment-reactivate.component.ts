import { EquipmentControllerService } from '@allmax-angular/antero-web/data-access/equipment-controller';
import { Equipment } from '@allmax-angular/antero-web/entities';
import { AnteroService } from '@allmax-angular/antero-web/services/antero-service';
import { AnteroStoreService } from '@allmax-angular/antero-web/state-management/antero-store';
import { EquipmentSectionStore } from '@allmax-angular/antero-web/state-management/equipment-section-store';
import { Nullable } from '@allmax-angular/shared/types';
import { unsubscribe } from '@allmax-angular/shared/utils';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ant-equipment-reactivate',
  templateUrl: './equipment-reactivate.component.html',
  styleUrls: ['./equipment-reactivate.component.scss'],
})
export class EquipmentReactivateComponent implements OnInit, OnDestroy {
  private subs: Subscription[] = [];

  public record: Nullable<Equipment>;

  constructor(
    private antero: AnteroService,
    private appStore: AnteroStoreService,
    private eqCtrl: EquipmentControllerService,
    private eqStore: EquipmentSectionStore,
  ) { }

  public ngOnInit(): void {
    this.subs.push(this.eqStore.selection$.subscribe(x => this.record = x));
  }

  public ngOnDestroy(): void {
    unsubscribe(this.subs);    
  }

  public cancelHandler(): void {
    this.antero.closeModal();
  }

  public async confirmHandler(): Promise<void> {
    if (!this.record) { return; }
    const result = await this.eqCtrl.reactivate(this.record.id);
    if (result) {
      this.antero.closeModal();
      this.appStore.refresh = true;
    }
  }
}
