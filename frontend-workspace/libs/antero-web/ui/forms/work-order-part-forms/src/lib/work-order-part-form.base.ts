import { FormBaseComponent } from "@allmax-angular/antero-web/bases";
import { CurrentWorkController } from "@allmax-angular/antero-web/data-access/current-work-controller";
import { PartsControllerService } from "@allmax-angular/antero-web/data-access/parts-controller";
import { PartQuantity, WorkOrderPart } from "@allmax-angular/antero-web/entities";
import { CurrentWorkStoreService } from "@allmax-angular/antero-web/state-management/current-work-store";
import { Nullable, ObservableBinding, TableData } from "@allmax-angular/shared/types";
import { Component, inject } from "@angular/core";

@Component({ template: '' })
export class WorkOrderPartFormBaseComponent extends FormBaseComponent {
  public workStore = inject(CurrentWorkStoreService);
  public workCtrl = inject(CurrentWorkController);
  public partCTrl = inject(PartsControllerService);

  public source: Nullable<WorkOrderPart>;
  public data: Nullable<TableData>;

  public partBinding = new ObservableBinding<PartQuantity>();
  public estimatedBinding = new ObservableBinding<number>();
  public actualBinding = new ObservableBinding<number>();
  
  public populate(): void {
    if (!this.source) { return; }
    this.partBinding.set(this.source.partQuantity);
    this.estimatedBinding.set(this.source.estimatedQuantity);
    this.actualBinding.set(this.source.actualQuantity);
  }

  public async getData(): Promise<void> {
    this.data = await this.partCTrl.getStockLocations();
  }
}