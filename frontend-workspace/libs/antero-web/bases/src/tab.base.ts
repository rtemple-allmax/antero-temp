import { Nullable } from "@allmax-angular/shared/types";
import { MasterDetailViewTypes } from "@allmax-angular/shared/ui/master-detail";
import { getDateString, getDateTimeString, numberToCurrencyFormatter } from "@allmax-angular/shared/utils";
import { Component, Input } from "@angular/core";
import { WidgetBaseComponent } from "./widget.base";

@Component({ template: '' })
export class TabBaseComponent extends WidgetBaseComponent {
  @Input() public height = '50%';
  
  public viewType: MasterDetailViewTypes = MasterDetailViewTypes.LIST;
  public viewTypes: typeof MasterDetailViewTypes = MasterDetailViewTypes;
  
  public get innerHeight(): string {
    return  `calc(${ this.height } - 20px)`;
  }
  
  public getDateTimeString(val: Nullable<Date>): string {
    if (val) {
      return getDateTimeString(val);
    }
    return '';
  }

  public getDateString(val: Nullable<Date>): string {
    if (val) {
      return getDateString(val);
    }
    return '';
  }

  public formatAsCurrency(val: Nullable<number>): string {
    if (val) {
      return numberToCurrencyFormatter(val)
    }
    return '';
  }
}