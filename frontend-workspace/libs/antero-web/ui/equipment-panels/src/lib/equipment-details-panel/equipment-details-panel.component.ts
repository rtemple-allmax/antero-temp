import { CustomFieldNames, EquipmentDocument } from '@allmax-angular/antero-web/entities';
import { PersistentDataKeys } from '@allmax-angular/antero-web/services/persistence';
import { Modals } from '@allmax-angular/antero-web/types';
import { CrudFunctions, Nullable } from '@allmax-angular/shared/types';
import { AfterViewInit, Component, HostBinding, Input, ViewChild } from '@angular/core';
import { EquipmentPanelBaseComponent } from '../equipment-panel.base';

@Component({
  selector: 'ant-equipment-details-panel',
  templateUrl: './equipment-details-panel.component.html',
  styles: [],
})
export class EquipmentDetailsPanelComponent extends EquipmentPanelBaseComponent implements AfterViewInit {
  @Input() public documents: EquipmentDocument[] = [];
  @Input() public customLabels: Nullable<CustomFieldNames>;

  public override title = 'Primary Details';

  @HostBinding('attr.data-id') public override dataID = this.title;

  public ngAfterViewInit(): void {
    const data = this.persistence.get();
    if (data?.equipmentPanelsCollapsible) {
      const record = data.equipmentPanelsCollapsible.find(x => x.name === this.title);
      if (record && this.panel) {
        this.panel.collapsed = record.collapsed;
      }
    }
  }
    
  public editHandler(): void {
    this.antero.openModal(Modals.EQUIPMENT_EDIT_PRIMARY, CrudFunctions.UPDATE);
  }
  
  public addRequestHandler(files: File[]): void {
    if (this.record) {
      this.ctrl.addDocuments(this.record.id, files);
    }
  }

  public downloadRequestHandler(files: EquipmentDocument[]): void {
    this.eqStore.selectedDocuments = files;
    files.forEach(x => {
      if (x?.document) {
        this.ctrl.downloadDocument(x.document);
      }
    });
  }
  
  public deleteRequestHandler(files: EquipmentDocument[]): void {
    this.eqStore.selectedDocuments = files;
    this.antero.openModal(Modals.EQUIPMENT_DELETE_DOCUMENT);
  }

  public collapsedStateChangedHandler(state: boolean) {
    this.persistence.setEquipmentPanelCollapsibleState(this.title, state);
  }
}
