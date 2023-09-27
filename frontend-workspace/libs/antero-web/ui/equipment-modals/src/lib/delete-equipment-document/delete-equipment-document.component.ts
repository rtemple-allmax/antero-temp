import { EquipmentControllerService } from '@allmax-angular/antero-web/data-access/equipment-controller';
import { EquipmentDocument } from '@allmax-angular/antero-web/entities';
import { AnteroService } from '@allmax-angular/antero-web/services/antero-service';
import { AnteroStoreService } from '@allmax-angular/antero-web/state-management/antero-store';
import { EquipmentSectionStore } from '@allmax-angular/antero-web/state-management/equipment-section-store';
import { Nullable } from '@allmax-angular/shared/types';
import { unsubscribe } from '@allmax-angular/shared/utils';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ant-delete-equipment-document',
  templateUrl: './delete-equipment-document.component.html',
  styleUrls: ['./delete-equipment-document.component.scss'],
})
export class DeleteEquipmentDocumentComponent implements OnInit, OnDestroy {
  private subs: Subscription[] = [];

  public selectedDocuments: EquipmentDocument[] = [];

  public get text(): string {
    return `Are you sure you want to continue with deleting the selected document${ this.selectedDocuments.length > 1 ? 's' : '' }?`;
  }

  constructor(
    private antero: AnteroService,
    private appStore: AnteroStoreService,
    private ctrl: EquipmentControllerService,
    private store: EquipmentSectionStore
  ) { }

  public ngOnInit(): void {
    this.subs.push(this.store.selectedDocuments$.subscribe(x => this.selectedDocuments = x));
  }

  public ngOnDestroy(): void {
    unsubscribe(this.subs);
  }

  public async confirmHandler(): Promise<void> {
    if (this.selectedDocuments.length) {
      const result = await this.ctrl.deleteDocuments(this.selectedDocuments.map(x => x.id));
      if (result) {
        this.appStore.refresh = true;
        this.antero.closeModal();
      }
    }
  }

  public cancelHandler() {
    this.antero.closeModal();
  }
}
