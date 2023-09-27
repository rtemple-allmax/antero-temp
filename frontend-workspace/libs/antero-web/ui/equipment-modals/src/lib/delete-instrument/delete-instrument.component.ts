import { EquipmentControllerService } from '@allmax-angular/antero-web/data-access/equipment-controller';
import { Instrument } from '@allmax-angular/antero-web/entities';
import { AnteroService } from '@allmax-angular/antero-web/services/antero-service';
import { AnteroStoreService } from '@allmax-angular/antero-web/state-management/antero-store';
import { EquipmentSectionStore } from '@allmax-angular/antero-web/state-management/equipment-section-store';
import { Nullable } from '@allmax-angular/shared/types';
import { unsubscribe } from '@allmax-angular/shared/utils';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ant-delete-instrument',
  templateUrl: './delete-instrument.component.html',
  styleUrls: ['./delete-instrument.component.scss'],
})
export class DeleteInstrumentComponent implements OnInit, OnDestroy {
  private subs: Subscription[] = [];

  public record: Nullable<Instrument>;

  constructor(
    private antero: AnteroService,
    private ctrl: EquipmentControllerService,
    private appStore: AnteroStoreService,
    private eqStore: EquipmentSectionStore
  ) { }

  public ngOnInit(): void {
    this.subs.push(this.eqStore.selectedInstrument$.subscribe(x => this.record = x));
  }

  public ngOnDestroy(): void {
    unsubscribe(this.subs);
  }

  public async deleteHandler(record: Instrument): Promise<void> {
    const results = await this.ctrl.deleteInstrument(record);
    if (results) {
      this.appStore.refresh = true;
      this.antero.closeModal();
    }
  }
}
