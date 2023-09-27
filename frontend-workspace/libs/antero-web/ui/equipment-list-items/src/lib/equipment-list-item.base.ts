import { EquipmentControllerService } from '@allmax-angular/antero-web/data-access/equipment-controller';
import { AnteroService } from '@allmax-angular/antero-web/services/antero-service';
import { EquipmentSectionStore } from '@allmax-angular/antero-web/state-management/equipment-section-store';
import { PartStoreService } from '@allmax-angular/antero-web/state-management/part-store';
import { Modals } from '@allmax-angular/antero-web/types';
import { CrudFunctions } from '@allmax-angular/shared/types';
import { allIcons } from '@allmax-angular/shared/ui/icons';
import { getDateTimeString } from '@allmax-angular/shared/utils';
import { Component, ElementRef } from '@angular/core';

@Component({ template: '' })
export class EquipmentListItemBaseComponent {
  public icons = { ...allIcons };

  public hovered = false;

  public crudFunctions: typeof CrudFunctions = CrudFunctions;
  public modals: typeof Modals = Modals;

  constructor(
    protected el: ElementRef,
    protected antero: AnteroService,
    protected ctrl: EquipmentControllerService,
    protected store: EquipmentSectionStore,
    protected partStore: PartStoreService 
  ) { }

  public stopPropagation(e: Event): void {
    e.stopPropagation();
  }

  public mouseenterHandler(): void {
    if (!this.hovered) {
      this.hovered = true;
    }
  }

  public mouseleaveHandler(): void {
    if (this.hovered) {
      this.hovered = false;
    }
  }

  public getDateTimeString(val: any): string {
    return getDateTimeString(val);
  }
}