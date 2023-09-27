import { AnteroService } from "@allmax-angular/antero-web/services/antero-service";
import { PersistentDataKeys } from "@allmax-angular/antero-web/services/persistence";
import { AnteroStoreService } from "@allmax-angular/antero-web/state-management/antero-store";
import { UIStoreService } from "@allmax-angular/antero-web/state-management/ui-store";
import { MyDataFieldTypes, Nullable, TableData } from "@allmax-angular/shared/types";
import { allIcons } from "@allmax-angular/shared/ui/icons";
import { LayoutPanelCollapsibleComponent, LayoutPanelComponent } from "@allmax-angular/shared/ui/layout-panel";
import { MasterDetailViewTypes } from "@allmax-angular/shared/ui/master-detail";
import { getDateString, getDateTimeString, numberToCurrencyFormatter } from "@allmax-angular/shared/utils";
import { Component, ViewChild, inject, OnInit, OnDestroy, HostBinding, Input, ChangeDetectorRef } from "@angular/core";
import { UILayouts } from "@allmax-angular/shared/ui/grid";
import { WidgetBaseComponent } from "./widget.base";
import { DataFieldTypes, DataFieldUIState } from "@allmax-angular/antero-web/features/feature-persistence";

@Component({ template: '' })
export class PanelBaseComponent extends WidgetBaseComponent implements OnInit, OnDestroy {
  @ViewChild(LayoutPanelComponent) public panel: Nullable<LayoutPanelComponent>;
  
  @Input() title = '';
  @HostBinding('attr.data-id') public dataID = '';

  public viewType = MasterDetailViewTypes.LIST;
  public viewTypes: typeof MasterDetailViewTypes = MasterDetailViewTypes;

  public layouts: typeof UILayouts = UILayouts;
  public keys: typeof PersistentDataKeys = PersistentDataKeys;
  public myDataFieldTypes: typeof MyDataFieldTypes = MyDataFieldTypes;
  
  public icons = { ...allIcons };

  public shouldDisable = false;

  public antero = inject(AnteroService);
  public appStore = inject(AnteroStoreService);
  public uiStore = inject(UIStoreService);
  public cdr = inject(ChangeDetectorRef);

  public data: Nullable<TableData>;

  public ngOnInit(): void {
    this.dataID = this.title;
  }

  public override ngOnDestroy(): void {
    super.ngOnDestroy();
    this.cdr.detach();
  }

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

  public getFieldValue(record: any, field: DataFieldUIState): any {
    if (!record) { return null; }
    switch (field.type) {
      case DataFieldTypes.VALUE:
        return record[field.propName];
      case DataFieldTypes.OBJECT:
        if (record[field.propName] && field.displayExpr) {
          return record[field.propName][field.displayExpr];
        }
        break;
      case DataFieldTypes.DATE:
        return this.getDateString(record[field.propName]);
      case DataFieldTypes.DATETIME:
        return this.getDateTimeString(record[field.propName]);
      case DataFieldTypes.CURRENCY:
        return this.formatAsCurrency(record[field.propName]);
    }
  }
}