import { allIcons } from "@allmax-angular/shared/ui/icons";
import { Component, OnDestroy } from "@angular/core";
import { WidgetBaseComponent } from "./widget.base";

@Component({ template: '' })
export class ViewerBaseComponent extends WidgetBaseComponent implements OnDestroy {
  public icons = { ...allIcons };
}