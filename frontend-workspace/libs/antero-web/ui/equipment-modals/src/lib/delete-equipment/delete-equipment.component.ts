import { EquipmentControllerService } from '@allmax-angular/antero-web/data-access/equipment-controller';
import { Equipment } from '@allmax-angular/antero-web/entities';
import { AnteroService } from '@allmax-angular/antero-web/services/antero-service';
import { EquipmentSectionStore } from '@allmax-angular/antero-web/state-management/equipment-section-store';
import { Nullable } from '@allmax-angular/shared/types';
import { DataTableComponent } from '@allmax-angular/shared/ui/data-table';
import { unsubscribe } from '@allmax-angular/shared/utils';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ant-delete-equipment',
  templateUrl: './delete-equipment.component.html',
  styleUrls: ['./delete-equipment.component.scss'],
})
export class DeleteEquipmentComponent implements OnInit, OnDestroy {
  private subs: Subscription[] = [];
  private masterTable: Nullable<DataTableComponent>;

  public record: Nullable<Equipment>;
  
  constructor(
    private antero: AnteroService,
    private ctrl: EquipmentControllerService,
    private eqStore: EquipmentSectionStore,
  ) {}

  public ngOnInit(): void {
    this.subs.push(this.eqStore.selection$.subscribe(x => this.record = x));
    this.subs.push(this.eqStore.masterTable$.subscribe(x => this.masterTable = x));
  }

  public ngOnDestroy(): void {
    unsubscribe(this.subs);
  }

  public async confirmedHandler(): Promise<void> {
    if (this.record && this.masterTable) {
      const result = await this.ctrl.deleteEquipment(this.record);
      if (result) {
        this.masterTable?.refresh();
        this.masterTable?.scrollToTop();
        this.masterTable?.selectByIndexes([ 0 ]);
        this.antero.closeModal();
      }
    }
  }

  public canceledHandler(): void {
    this.antero.closeModal();
  }
}
