import { EquipmentControllerService } from '@allmax-angular/antero-web/data-access/equipment-controller';
import { Reading } from '@allmax-angular/antero-web/entities';
import { AnteroService } from '@allmax-angular/antero-web/services/antero-service';
import { EquipmentSectionStore } from '@allmax-angular/antero-web/state-management/equipment-section-store';
import { Nullable } from '@allmax-angular/shared/types';
import { unsubscribe } from '@allmax-angular/shared/utils';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ant-delete-reading',
  templateUrl: './delete-reading.component.html',
  styleUrls: ['./delete-reading.component.scss'],
})
export class DeleteReadingComponent implements OnInit, OnDestroy {
  private subs: Subscription[] = [];
  private selectedRecord: Nullable<Reading>;

  constructor(
    private antero: AnteroService,
    private ctrl: EquipmentControllerService,
    private store: EquipmentSectionStore
  ) { }

  public ngOnInit(): void {
    this.subs.push(this.store.selectedReading$.subscribe(x => this.selectedRecord = x));
  }

  public ngOnDestroy(): void {
    unsubscribe(this.subs);
  }

  public confirmHandler(): void {
    if (this.selectedRecord) {
      this.ctrl.deleteReading(this.selectedRecord);
    }
  }

  public cancelHandler(): void {
    this.antero.closeModal();
  }
}
