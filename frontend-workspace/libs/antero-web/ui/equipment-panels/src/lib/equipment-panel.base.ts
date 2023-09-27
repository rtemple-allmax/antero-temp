import { PanelBaseComponent } from "@allmax-angular/antero-web/bases";
import { EquipmentControllerService } from "@allmax-angular/antero-web/data-access/equipment-controller";
import { Equipment } from "@allmax-angular/antero-web/entities";
import { AnteroService } from "@allmax-angular/antero-web/services/antero-service";
import { PersistenceService } from "@allmax-angular/antero-web/services/persistence";
import { EquipmentSectionStore } from "@allmax-angular/antero-web/state-management/equipment-section-store";
import { PositioningService } from "@allmax-angular/shared/services/src/lib/positioning";
import { DeviceTypes, MyDataFieldTypes, Nullable } from "@allmax-angular/shared/types";
import { NotificationsService } from "@allmax-angular/shared/ui/notifications";
import { ChangeDetectorRef, Component, inject, OnDestroy, OnInit, Renderer2 } from "@angular/core";

@Component({ template: '' })
export class EquipmentPanelBaseComponent extends PanelBaseComponent implements OnInit, OnDestroy {
  public record: Nullable<Equipment>;

  // public get detailCols(): string {
  //   if (this.deviceType === DeviceTypes.MOBILE) {
  //     return '1fr'
  //   } else 
  //   return 'repeat(2, 1fr)';
  // }

  public get criticalityScore(): Nullable<number> {
    if (!this.record) {
      return null
    } else if (!this.record.probabilityOfFailure ||
      this.record.probabilityOfFailure < 1 ||
      !this.record.consequenceOfFailure ||
      this.record.consequenceOfFailure < 1
      ) {
      return null;
    }

    return this.record.probabilityOfFailure * this.record.consequenceOfFailure;
  }

  // protected antero = inject(AnteroService)
  protected ctrl = inject(EquipmentControllerService)
  // protected cdr = inject(ChangeDetectorRef)
  protected eqStore = inject(EquipmentSectionStore)
  protected notifications = inject(NotificationsService)
  protected persistence = inject(PersistenceService)
  protected positioning = inject(PositioningService)
  protected renderer = inject(Renderer2)
  
  public override ngOnInit(): void {
    super.ngOnInit();
    this.subs.push(this.eqStore.selection$.subscribe(x => this.record = x));
  }

  public override ngOnDestroy(): void {
    super.ngOnDestroy();
    // this.cdr.detach();
  }
  
  public addToMyData(label: string, propName: string, type: MyDataFieldTypes, formatted: boolean, displayExpr?: string): void {
    this.persistence.addToMyData(label, propName, type, formatted, displayExpr);
  }

  public removeFromMyData(label: string): void {
    this.persistence.removeFromMyData(label);
  }
}