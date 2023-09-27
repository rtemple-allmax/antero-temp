import { TabBaseComponent } from '@allmax-angular/antero-web/bases';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ant-work-viewer-tab-details',
  templateUrl: './work-viewer-tab-details.component.html',
  styleUrls: ['./work-viewer-tab-details.component.scss'],
})
export class WorkViewerTabDetailsComponent extends TabBaseComponent {
  @Output() public editAdmin = new EventEmitter();
  @Output() public showEquipment = new EventEmitter();
  @Output() public showEquipmentHistory = new EventEmitter();
  @Output() public showEquipmentDocuments = new EventEmitter();
  @Output() public enterEquipmentDowntime = new EventEmitter();
  @Output() public editInstructions = new EventEmitter();

  public editAdminHandler(): void {
    this.editAdmin.emit();
  }

  public showEquipmentHandler(): void {
    this.showEquipment.emit();
  }

  public showEquipmentHistoryHandler(): void {
    this.showEquipmentHistory.emit();
  }

  public showEquipmentDocumentsHandler(): void {
    this.showEquipmentDocuments.emit();
  }

  public editInstructionsHandler(): void {
    this.editInstructions.emit();
  }

  public enterDowntimeHandler(): void {
    this.enterEquipmentDowntime.emit();
  }
}
