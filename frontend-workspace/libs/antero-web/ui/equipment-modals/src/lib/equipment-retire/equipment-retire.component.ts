import { EquipmentControllerService } from '@allmax-angular/antero-web/data-access/equipment-controller';
import { Equipment } from '@allmax-angular/antero-web/entities';
import { AnteroService } from '@allmax-angular/antero-web/services/antero-service';
import { EquipmentSectionStore } from '@allmax-angular/antero-web/state-management/equipment-section-store';
import { Nullable } from '@allmax-angular/shared/types';
import { unsubscribe } from '@allmax-angular/shared/utils';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ant-equipment-retire',
  templateUrl: './equipment-retire.component.html',
  styleUrls: ['./equipment-retire.component.scss'],
})
export class EquipmentRetireComponent implements OnInit, OnDestroy {
  private subs: Subscription[] = []

  public selection: Nullable<Equipment>;
  public retireIncluded = false;
  
  constructor(
    private antero: AnteroService,
    private ctrl: EquipmentControllerService,
    private store: EquipmentSectionStore
  ) { }
  
  public ngOnInit(): void {
    this.subs.push(this.store.selection$.subscribe(x => this.selection = x));
    this.subs.push(this.store.includeRetired$.subscribe(x => this.retireIncluded = x));
  }

  public ngOnDestroy(): void {
    unsubscribe(this.subs);
  }

  public cancelHandler(): void {
    this.antero.closeModal();
  }

  public confirmHandler(): void {
    if (this.selection) {
      this.ctrl.retire(this.selection.id);
    }
  }
}
