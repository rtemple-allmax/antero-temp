import { EquipmentControllerService } from '@allmax-angular/antero-web/data-access/equipment-controller';
import { EquipmentPart } from '@allmax-angular/antero-web/entities';
import { AnteroService } from '@allmax-angular/antero-web/services/antero-service';
import { EquipmentSectionStore } from '@allmax-angular/antero-web/state-management/equipment-section-store';
import { PartData } from '@allmax-angular/antero-web/types';
import { Nullable } from '@allmax-angular/shared/types';
import { unsubscribe } from '@allmax-angular/shared/utils';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ant-delete-equipment-part',
  templateUrl: './delete-equipment-part.component.html',
  styleUrls: ['./delete-equipment-part.component.scss'],
})
export class DeleteEquipmentPartComponent implements OnInit, OnDestroy {
  private subs: Subscription[] = [];
  
  public selection: Nullable<PartData>

  constructor(
    private antero: AnteroService,
    private ctrl: EquipmentControllerService,
    private store: EquipmentSectionStore
  ) { }

  public ngOnInit(): void {
    this.subs.push(this.store.selectedPartData$.subscribe(x => this.selection = x));
  }

  public ngOnDestroy(): void {
    unsubscribe(this.subs);
  }

  public confirmedHandler(): void {
    if (this.selection) {
      this.ctrl.deletePart(this.selection);
    }
  }

  public canceledHandler(): void {
    this.antero.closeModal();
  }
}
