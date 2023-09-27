import { Component, inject } from "@angular/core";
import { SubscriberBaseComponent } from "./subscriber.base";
import { StateManagementService } from "@allmax-angular/shared/features/state-management";

@Component({ template: '' })
export class WidgetBaseComponent extends SubscriberBaseComponent {
  protected state = inject(StateManagementService);
}