import { TabBaseComponent } from "@allmax-angular/antero-web/bases";
import { PartsControllerService } from "@allmax-angular/antero-web/data-access/parts-controller";
import { Component, inject } from "@angular/core";

@Component({ template: '' })
export class PartsTabBaseComponent extends TabBaseComponent {
  protected ctrl = inject(PartsControllerService);
}