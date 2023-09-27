import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnteroSectionEquipmentComponent } from './antero-section-equipment.component';
import { AnteroAppFrameModule } from '@allmax-angular/antero-web/ui/antero-app-frame';
import { MasterDetailModule } from '@allmax-angular/shared/ui/master-detail';
import { ReadOnlyBoxModule } from '@allmax-angular/shared/ui/read-only-box';
import { GroupBoxModule } from '@allmax-angular/shared/ui/group-box';
import { GridModule } from '@allmax-angular/shared/ui/grid';
import { DxScrollViewModule } from 'devextreme-angular';
import { FlexModule } from '@allmax-angular/shared/ui/flex';
import { IconButtonModule } from '@allmax-angular/shared/ui/buttons/icon-button';
import { AvatarModule } from '@allmax-angular/shared/ui/avatar';
import { TabsModule } from '@allmax-angular/shared/ui/tabs';
import { ToggleModule } from '@allmax-angular/shared/ui/toggle';
import { DataTableModule } from '@allmax-angular/shared/ui/data-table';
import { SpacerModule } from '@allmax-angular/shared/ui/spacer';
import { ScrollBoxModule } from '@allmax-angular/shared/ui/scroll-box';
import { RadioGroupModule } from '@allmax-angular/shared/ui/radio-group';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MapModule } from '@allmax-angular/shared/ui/map';
import { LabelButtonModule } from '@allmax-angular/shared/ui/buttons/label-button';
import { SafeUrlModule } from '@allmax-angular/shared/pipes/safe-url';
import { ImageGalleryModule } from '@allmax-angular/shared/ui/image-gallery';
import { FilePickerModule } from '@allmax-angular/shared/ui/file-picker';
import { IconModule } from '@allmax-angular/shared/ui/icon';
import { CardModule } from '@allmax-angular/shared/ui/card';
import { DropdownButtonModule } from '@allmax-angular/shared/ui/buttons/dropdown-button';
import { DateRangeBoxModule } from '@allmax-angular/shared/ui/form-fields/date-range-box';
import { FormsModule } from '@angular/forms';
import { ModalWindowModule } from '@allmax-angular/shared/ui/modal-window';
import { ComboButtonModule } from '@allmax-angular/shared/ui/buttons/combo-button';
import { DateBoxModule } from '@allmax-angular/shared/ui/form-fields/date-box';
import { SwitchModule } from '@allmax-angular/shared/ui/switch';
import { AccordionModule } from '@allmax-angular/shared/ui/accordion';
import { StockLocationsModule } from '@allmax-angular/antero-web/tools/stock-locations';
import { CrudToolbarModule } from '@allmax-angular/shared/ui/crud-toolbar';
import { MediaObjectModule } from '@allmax-angular/shared/ui/media-object';
import { EquipmentPanelsModule } from '@allmax-angular/antero-web/ui/equipment-panels';
import { FilterButtonModule } from '@allmax-angular/shared/ui/buttons/filter-button';
import { LinkButtonModule } from '@allmax-angular/shared/ui/buttons/link-button';
import { ViewSwitchModule } from '@allmax-angular/shared/ui/view-switch';
import { FilteringModule } from '@allmax-angular/shared/features/filtering';
import { SearchBoxModule } from '@allmax-angular/shared/ui/search-box';
import { SeparatorModule } from '@allmax-angular/shared/ui/separator';
import { SlideOutButtonModule } from '@allmax-angular/shared/ui/buttons/slide-out-button';
import { EquipmentTabDetailsComponent } from './equipment-tab-details/equipment-tab-details.component';
import { LayoutPanelModule } from '@allmax-angular/shared/ui/layout-panel';
import { EquipmentTabWorkComponent } from './equipment-tab-work/equipment-tab-work.component';
import { EquipmentTabImagesComponent } from './equipment-tab-images/equipment-tab-images.component';
import { EquipmentTabMapComponent } from './equipment-tab-map/equipment-tab-map.component';
import { EquipmentTabActivityComponent } from './equipment-tab-activity/equipment-tab-activity.component';
import { ToolsModule } from '@allmax-angular/antero-web/ui/tools';

@NgModule({
  imports: [
    AccordionModule,
    AnteroAppFrameModule,
    AvatarModule,
    CardModule,
    ComboButtonModule,
    CommonModule,
    CrudToolbarModule,
    DataTableModule,
    DateBoxModule,
    DxScrollViewModule,
    FilePickerModule,
    FlexModule,
    FontAwesomeModule,
    FormsModule,
    GridModule,
    GroupBoxModule,
    IconModule,
    IconButtonModule,
    ImageGalleryModule,
    LabelButtonModule,
    MapModule,
    MasterDetailModule,
    ModalWindowModule,
    RadioGroupModule,
    ReadOnlyBoxModule,
    SafeUrlModule,
    ScrollBoxModule,
    SlideOutButtonModule,
    SpacerModule,
    SwitchModule,
    TabsModule,
    ToggleModule,
    DropdownButtonModule,
    DateRangeBoxModule,
    StockLocationsModule,
    SafeUrlModule,
    MediaObjectModule,
    EquipmentPanelsModule,
    FilterButtonModule,
    LinkButtonModule,
    ViewSwitchModule,
    FilteringModule,
    SearchBoxModule,
    SeparatorModule,
    LayoutPanelModule,
    EquipmentPanelsModule,
    ScrollBoxModule,
    ToolsModule
  ],
  declarations: [
    AnteroSectionEquipmentComponent,
    EquipmentTabDetailsComponent,
    EquipmentTabWorkComponent,
    EquipmentTabImagesComponent,
    EquipmentTabMapComponent,
    EquipmentTabActivityComponent,
  ],
  exports: [
    AnteroSectionEquipmentComponent,
    EquipmentTabDetailsComponent,
    EquipmentTabWorkComponent,
    EquipmentTabImagesComponent,
    EquipmentTabMapComponent,
    EquipmentTabActivityComponent,
  ],
})
export class AnteroSectionEquipmentModule {}
