import { Component, Input } from "@angular/core";
import { MasterDetailViewTypes } from "@allmax-angular/shared/ui/master-detail";
import { getDateString, getDateTimeString, numberToCurrencyFormatter } from "@allmax-angular/shared/utils";
import { Nullable } from "@allmax-angular/shared/types";
import { allIcons } from "@allmax-angular/shared/ui/icons";
import { WidgetBaseComponent } from "./widget.base";

@Component({ template: '' })
export class SliderBaseComponent extends WidgetBaseComponent {
  @Input() public width = '400px';
  
  public icons = { ...allIcons };

  public viewType = MasterDetailViewTypes.LIST;
  public viewTypes: typeof MasterDetailViewTypes = MasterDetailViewTypes;

  public getDateString(val: Date | string | null | undefined): string | null {
    if (!val) { return null; }
    return getDateString(val);
  }

  public getDateTimeString(val: Date | string | null | undefined): string | null {
    if (!val) { return null; }
    return getDateTimeString(val);
  }

  public formatAsCurrency(val: Nullable<number>): string {
    if (val) {
      return numberToCurrencyFormatter(val);
    }
    return '';
  }
}