import { PanelBaseComponent } from '@allmax-angular/antero-web/bases';
import { Equipment, EquipmentDocument } from '@allmax-angular/antero-web/entities';
import { DataStores } from '@allmax-angular/antero-web/types';
import { Component, OnInit, inject, Output, EventEmitter } from '@angular/core';
import { EquipmentStatePropNames } from '../../../types/store.schema';
import { Nullable } from '@allmax-angular/shared/types';
import { EquipmentControllerService } from '@allmax-angular/antero-web/data-access/equipment-controller';
import { combineLatest } from 'rxjs';
import { Sliders } from '../../../types/sliders.enum';

@Component({
  selector: 'ant-equipment-panel-documents',
  templateUrl: './equipment-panel-documents.component.html',
  styleUrls: ['./equipment-panel-documents.component.scss'],
})
export class EquipmentPanelDocumentsComponent extends PanelBaseComponent implements OnInit {
  @Output() public collapsedStateChanged = new EventEmitter<boolean>(); 

  public override title = 'Documents';

  public record: Nullable<Equipment>;

  public docs: EquipmentDocument[] = [];
  public selected: EquipmentDocument[] = [];

  private ctrl = inject(EquipmentControllerService);
  private store = this.state.getStore(DataStores.EQUIPMENT);

  public override ngOnInit(): void {
    super.ngOnInit();
    if (this.store) {
      const sub = combineLatest([
        this.store.observe(EquipmentStatePropNames.SELECTED_EQUIPMENT),
        this.store.observe(EquipmentStatePropNames.SELECTED_DOCUMENTS),
        this.store.observe(EquipmentStatePropNames.REFRESH)       
      ]).subscribe(([
        record,
        docs,
        refresh
      ]) => {
        const prevRecord = this.record;
        this.record = record;
        if (prevRecord !== this.record || refresh) {
          this.getFiles();
        }
        this.selected = docs;
        if (refresh) {
          this.store?.setValue(EquipmentStatePropNames.REFRESH, false);
        }
      });
      if (sub) { this.subs.push(sub); }
    }
  }

  public async getFiles(): Promise<void> {
    if (!this.record) { return; }
    this.docs = await this.ctrl.getDocuments_Raw(this.record.id);
  }

  public selectionChangedHandler(selection: EquipmentDocument[]): void {
    this.store?.setValue(EquipmentStatePropNames.SELECTED_DOCUMENTS, selection);
  }

  public async addRequestedHandler(files: File[]): Promise<void> {
    if (this.record) {
      const success = await this.ctrl.addDocuments(this.record.id, files);
      if (success) {
        this.store?.setValue(EquipmentStatePropNames.REFRESH, true);
      }
    }
  }

  public downloadRequestHandler(): void {
    this.selected.forEach(x => {
      if (x?.document) {
        this.ctrl.downloadDocument(x.document);
      }
    });
  }

  public deleteRequestHandler(): void {
    if (this.selected) {
      this.store?.setValue(EquipmentStatePropNames.OPEN_SLIDER, Sliders.DOCUMENT_DELETE);
    }
  }

  public collapsedStateChangeHandler(state: boolean): void {
    this.collapsedStateChanged.emit(state);
  }
}