import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkOrderViewerComponent } from './work-order-viewer.component';
import { ModalWindowModule } from '@allmax-angular/shared/ui/modal-window';
import { DxScrollViewModule, DxSelectBoxModule } from 'devextreme-angular';
import { FlexModule } from '@allmax-angular/shared/ui/flex';
import { ReadOnlyBoxModule } from '@allmax-angular/shared/ui/read-only-box';
import { SpacerModule } from '@allmax-angular/shared/ui/spacer';
import { IconButtonModule } from '@allmax-angular/shared/ui/buttons/icon-button';
import { LabelButtonModule } from '@allmax-angular/shared/ui/buttons/label-button';
import { GridModule } from '@allmax-angular/shared/ui/grid';
import { FormattedTextModule } from '@allmax-angular/shared/ui/formatted-text';
import { GroupBoxModule } from '@allmax-angular/shared/ui/group-box';
import { WorkOrderPanelsModule } from '@allmax-angular/antero-web/ui/work-order-panels';
import { TabsModule } from '@allmax-angular/shared/ui/tabs';
import { PopoverIconModule } from '@allmax-angular/shared/ui/popover-icon';
import { WorkOrderModalsModule } from '@allmax-angular/antero-web/ui/work-order-modals';
import { AccordionModule } from '@allmax-angular/shared/ui/accordion';
import { FilterButtonModule } from '@allmax-angular/shared/ui/buttons/filter-button';
import { IconModule } from '@allmax-angular/shared/ui/icon';
import { DataTableDropdownModule } from '@allmax-angular/shared/ui/data-table-dropdown';

@NgModule({
  imports: [
    AccordionModule,
    CommonModule,
    DxSelectBoxModule,
    DxScrollViewModule,
    FlexModule,
    FormattedTextModule,
    GridModule,
    GroupBoxModule,
    IconButtonModule,
    LabelButtonModule,
    ModalWindowModule,
    PopoverIconModule,
    ReadOnlyBoxModule,
    SpacerModule,
    TabsModule,
    WorkOrderPanelsModule,
    WorkOrderModalsModule,
    IconModule,
    FilterButtonModule,
    DataTableDropdownModule
  ],
  declarations: [ WorkOrderViewerComponent ],
  exports: [ WorkOrderViewerComponent ],
})
export class WorkOrderViewerModule {}
