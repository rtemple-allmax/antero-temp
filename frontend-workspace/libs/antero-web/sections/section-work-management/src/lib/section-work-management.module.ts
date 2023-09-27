import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionWorkManagementComponent } from './section-work-management.component';
import { MasterDetailModule } from '@allmax-angular/shared/ui/master-detail';
import { AnteroAppFrameModule } from '@allmax-angular/antero-web/ui/antero-app-frame';
import { FlexModule } from '@allmax-angular/shared/ui/flex';
import { IconButtonModule } from '@allmax-angular/shared/ui/buttons/icon-button';
import { DropdownButtonModule } from '@allmax-angular/shared/ui/buttons/dropdown-button';
import { LabelButtonModule } from '@allmax-angular/shared/ui/buttons/label-button';
import { SpacerModule } from '@allmax-angular/shared/ui/spacer';
import { SwitchModule } from '@allmax-angular/shared/ui/switch';
import { TabsModule } from '@allmax-angular/shared/ui/tabs';
import { GridModule } from '@allmax-angular/shared/ui/grid';
import { ReadOnlyBoxModule } from '@allmax-angular/shared/ui/read-only-box';
import { IconModule } from '@allmax-angular/shared/ui/icon';
import { FormattedTextModule } from '@allmax-angular/shared/ui/formatted-text';
import { GroupBoxModule } from '@allmax-angular/shared/ui/group-box';
import { DataTableModule } from '@allmax-angular/shared/ui/data-table';
import { DxDataGridModule, DxScrollViewModule } from 'devextreme-angular';
import { CrudToolbarModule } from '@allmax-angular/shared/ui/crud-toolbar';
import { AddEditWorkOrderLaborModule } from '@allmax-angular/antero-web/tools/add-edit-work-order-labor';
import { WorkOrderPanelsModule } from '@allmax-angular/antero-web/ui/work-order-panels';
import { CardModule } from '@allmax-angular/shared/ui/card';
import { ComboButtonModule } from '@allmax-angular/shared/ui/buttons/combo-button';
import { FilterButtonModule } from '@allmax-angular/shared/ui/buttons/filter-button';
import { LinkButtonModule } from '@allmax-angular/shared/ui/buttons/link-button';
import { SearchBoxModule } from '@allmax-angular/shared/ui/search-box';
import { SeparatorModule } from '@allmax-angular/shared/ui/separator';
import { ViewSwitchModule } from '@allmax-angular/shared/ui/view-switch';
import { PopoverButtonModule } from '@allmax-angular/shared/ui/buttons/popover-button';
import { WorkOrderTabDetailsComponent } from './work-order-tab-details/work-order-tab-details.component';
import { WorkOrderTabMapComponent } from './work-order-tab-map/work-order-tab-map.component';
import { WorkOrderTabActivityComponent } from './work-order-tab-activity/work-order-tab-activity.component';

@NgModule({
  imports: [
    AnteroAppFrameModule,
    CardModule,
    ComboButtonModule,
    CommonModule,
    DataTableModule,
    DropdownButtonModule,
    DxDataGridModule,
    FilterButtonModule,
    FlexModule,
    FormattedTextModule,
    GridModule,
    IconModule,
    IconButtonModule,
    LabelButtonModule,
    MasterDetailModule,
    ReadOnlyBoxModule,
    SpacerModule,
    SwitchModule,
    LinkButtonModule,
    TabsModule,
    FormattedTextModule,
    GroupBoxModule,
    DxScrollViewModule,
    CrudToolbarModule,
    AddEditWorkOrderLaborModule,
    SearchBoxModule,
    SeparatorModule,
    WorkOrderPanelsModule,
    ViewSwitchModule,
    PopoverButtonModule,
  ],
  declarations: [
    SectionWorkManagementComponent,
    WorkOrderTabDetailsComponent,
    WorkOrderTabMapComponent,
    WorkOrderTabActivityComponent,
  ],
  exports: [
    WorkOrderTabDetailsComponent,
    WorkOrderTabMapComponent,
    WorkOrderTabActivityComponent,
  ],
})
export class SectionWorkManagementModule {}
