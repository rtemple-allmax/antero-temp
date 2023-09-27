import { TabBaseComponent } from "@allmax-angular/antero-web/bases";
import { EquipmentControllerService } from "@allmax-angular/antero-web/data-access/equipment-controller";
import { EquipmentSectionStore } from "@allmax-angular/antero-web/state-management/equipment-section-store";
import { Component, inject } from "@angular/core";

@Component({ template: '' })
export class EquipmentTabBaseComponent extends TabBaseComponent {
  protected ctrl = inject(EquipmentControllerService);
  protected store = inject(EquipmentSectionStore);  
}