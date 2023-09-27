import { Document, EquipmentDocument, WorkOrderDocument } from '@allmax-angular/antero-web/entities';
import { AnteroStoreService } from '@allmax-angular/antero-web/state-management/antero-store';
import { CurrentWorkStoreService } from '@allmax-angular/antero-web/state-management/current-work-store';
import { WorkOrderData } from '@allmax-angular/antero-web/types';
import { DeviceTypes, Nullable } from '@allmax-angular/shared/types';
import { getIconByExtension, miscIcons, toolbarIcons } from '@allmax-angular/shared/ui/icons';
import { unsubscribe } from '@allmax-angular/shared/utils';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ant-work-order-documents-panel',
  templateUrl: './work-order-documents-panel.component.html',
  styles: [],
})
export class WorkOrderDocumentsPanelComponent implements OnInit, OnDestroy {
  @Input() public height = 'auto';

  private subs: Subscription[] = [];

  public data: WorkOrderDocument[] = [];

  public deviceType: DeviceTypes = DeviceTypes.UNSET;

  public icons = { ...toolbarIcons }

  // public get attachments(): WorkOrderDocument[] {
  //   return this.data?.woDocuments || [];
  // }

  // public get eqDocuments(): EquipmentDocument[] {
  //   return this.data?.eqDocuments || []
  // }

  constructor(
    private appStore: AnteroStoreService,
    private workStore: CurrentWorkStoreService
  ) { }

  public ngOnInit(): void {
    this.subs.push(this.appStore.deviceType$.subscribe(x => this.deviceType = x));
    // this.subs.push(this.workStore.woData$.subscribe(x => this.data = x));
  }

  public ngOnDestroy(): void {
    unsubscribe(this.subs);
  }

  public getIcon(document: Nullable<Document>): any {
    if (document) {
      return getIconByExtension(document.extension || '');
    }
  }

  public addRequestHandler(files: File[]): void {
    // if (this.selectedEquipment) {
    //   this.ctrl.addDocuments(this.selectedEquipment.id, files);
    // }
  }

  public downloadRequestHandler(files: EquipmentDocument[]): void {
    // this.store.selectedDocuments = files;
    // files.forEach(x => {
    //   if (x?.document) {
    //     this.ctrl.downloadDocument(x.document);
    //   }
    // });
  }
  
  public deleteRequestHandler(files: EquipmentDocument[]): void {
    // this.store.selectedDocuments = files;
    // this.antero.openModal(Modals.EQUIPMENT_DELETE_DOCUMENT);
  }
}
