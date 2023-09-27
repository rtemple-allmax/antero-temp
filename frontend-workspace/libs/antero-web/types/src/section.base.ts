// import { EquipmentControllerService } from "@allmax-angular/antero-web/data-access/equipment-controller";
// import { AnteroService } from "@allmax-angular/antero-web/services/antero-service";
// import { LayoutService } from "@allmax-angular/antero-web/services/layout";
// import { AnteroStoreService } from "@allmax-angular/antero-web/state-management/antero-store";
// import { EquipmentSectionStore } from "@allmax-angular/antero-web/state-management/equipment-section-store";
// import { UIStoreService } from "@allmax-angular/antero-web/state-management/ui-store";
import { DeviceTypes, Nullable, TableData } from "@allmax-angular/shared/types";
import { DataTableComponent } from "@allmax-angular/shared/ui/data-table";
import { allIcons } from "@allmax-angular/shared/ui/icons";
import { MasterDetailComponent, MasterDetailViewTypes } from "@allmax-angular/shared/ui/master-detail";
import { NotificationsService } from "@allmax-angular/shared/ui/notifications";
import { SearchBoxComponent } from "@allmax-angular/shared/ui/search-box";
import { TabsComponent } from "@allmax-angular/shared/ui/tabs";
import { Component, QueryList, ViewChild, ViewChildren } from "@angular/core";
import { Subscription } from 'rxjs';
import { CrudFunctions } from "./crud.enum";

@Component({ template: '' })
export class SectionBaseComponent {
  @ViewChild(MasterDetailComponent) public view: Nullable<MasterDetailComponent>;
  @ViewChild(SearchBoxComponent) public searchbox: Nullable<SearchBoxComponent>;
  @ViewChildren(TabsComponent) public tabsQuery: Nullable<QueryList<TabsComponent>>;

  protected subs: Subscription[] = [];

  public viewType: MasterDetailViewTypes = MasterDetailViewTypes.LIST;
  public viewTypes: typeof MasterDetailViewTypes = MasterDetailViewTypes;
  public crudFunctions: typeof CrudFunctions = CrudFunctions;
  public deviceType: DeviceTypes = DeviceTypes.UNSET;
  public deviceTypes: typeof DeviceTypes = DeviceTypes;

  public sectionContextMenuItems: any[] = [];
  public itemContextMenuItems: any[] = [];

  public data: Nullable<TableData>;
  public icons = { ...allIcons };

  public masterTable: Nullable<DataTableComponent>;
  public tabs: Nullable<TabsComponent>;

  public hoveredID = 0;

  public get tabHeight(): string {
    return 'calc(100vh - 200px)';
  }

  public get detailButtonRotation(): string {
    return this.view?.drawer?.isOpen ? '180deg': '0deg';
  }

  // constructor(
    // protected antero: AnteroService,
    // protected eqCtrl: EquipmentControllerService,
    // protected eqStore: EquipmentSectionStore,
    // protected layouts: LayoutService,
    // protected appStore: AnteroStoreService,
    // protected notifications: NotificationsService,
    // protected uiStore: UIStoreService
  // ) { }
}