import { SectionBaseComponent } from '@allmax-angular/antero-web/bases';
import { Equipment } from '@allmax-angular/antero-web/entities';
import { DataStores, ImageData, UIStorePropNames } from '@allmax-angular/antero-web/types';
import { Component, OnInit, inject } from '@angular/core';
import { EquipmentStatePropNames } from '../../types/store.schema';
import { Nullable } from '@allmax-angular/shared/types';
import { MasterDetailViewTypes } from '@allmax-angular/shared/ui/master-detail';
import { EquipmentControllerService } from '@allmax-angular/antero-web/data-access/equipment-controller';
import { combineLatest } from 'rxjs';
import { Sliders } from '../../types/sliders.enum';
import { CurrentWorkController } from '@allmax-angular/antero-web/data-access/current-work-controller';
import { TaskControllerService } from '@allmax-angular/antero-web/data-access/task-controller';
import { PartsControllerService } from '@allmax-angular/antero-web/data-access/parts-controller';
import { LaborControllerService } from '@allmax-angular/antero-web/data-access/labor-controller';
import { SuppliersController } from '@allmax-angular/antero-web/data-access/suppliers-controller';

@Component({
  selector: 'ant-section-equipment',
  templateUrl: './section-equipment.component.html',
  styleUrls: ['./section-equipment.component.scss'],
})
export class SectionEquipmentComponent extends SectionBaseComponent implements OnInit {
  public record: Nullable<Equipment>;
  public primaryImage: Nullable<ImageData>;
  public includeRetired = false;

  private ctrl = inject(EquipmentControllerService);
  private workCtrl = inject(CurrentWorkController);
  private taskCtrl = inject(TaskControllerService);
  private partsCtrl = inject(PartsControllerService);
  private laborCtrl = inject(LaborControllerService);
  private supplierCtrl = inject(SuppliersController);

  public listGroupByProps: any[] = [
    { displayName: 'Category', propname: 'category.name' },
    { displayName: 'Criticality Ranking', propname: 'criticalityRanking.name' },
    { displayName: 'Condition', propname: 'equipmentCondition.name' },
    { displayName: 'Consequence of Failure', propname: 'consequenceOfFailure' },
    { displayName: 'Department', propname: 'department.name' },
    { displayName: 'Group', propname: 'group.name' },
    { displayName: 'In Service Status', propname: 'inServiceStatus' },
    { displayName: 'Location', propname: 'location.name' },
    { displayName: 'Manufacturer', propname: 'manufacturer.name' },
    { displayName: 'Priority', propname: 'equipmentPriority.name' },
    { displayName: 'Probability of Failure', propname: 'probabilityOfFailure' },
    { displayName: 'Retired', propname: 'retired' },
    { displayName: 'Sublocation', propname: 'sublocation.name' },
    { displayName: 'Type', propname: 'equipmentType.name' },
    { displayName: 'Vendor', propname: 'vendor.name' },
  ]

  public slider: Sliders = Sliders.NONE;
  public sliders: typeof Sliders = Sliders;

  private addedWO = false;

  public override ngOnInit(): void {
    super.ngOnInit();
    this.updateData();
    this.sectionContextMenuItems = this.updateSectionContextMenu();
    const eqStore = this.state.getStore(DataStores.EQUIPMENT);
    const uiStore = this.state.getStore(DataStores.UI);
    if (eqStore && uiStore) {
      const sub = combineLatest([
        eqStore.observe(EquipmentStatePropNames.SELECTED_EQUIPMENT),
        eqStore.observe(EquipmentStatePropNames.OPEN_SLIDER),
        eqStore.observe(EquipmentStatePropNames.REFRESH),
        eqStore.observe(EquipmentStatePropNames.INCLUDE_RETIRED),
        uiStore.observe(UIStorePropNames.VIEW_TYPE)
      ]).subscribe(async ([
        equipment,
        slider,
        refresh,
        retired,
        viewType
      ]) => {
        const prevView = this.viewType;
        const prevRecord = this.record;
        const prevRetired = this.includeRetired;

        this.viewType = viewType;
        this.record = equipment;
        this.slider = slider;
        this.includeRetired = retired;

        if (this.slider === Sliders.NONE) {
          this.frame?.slideOut();
        } else {
          this.frame?.slideIn();
        }
        
        if (this.viewType !== prevView || this.includeRetired !== prevRetired || refresh) {
          this.updateData();
          this.sectionContextMenuItems = this.updateSectionContextMenu();
          this.updatePrimaryImage();
        } else if (this.record !== prevRecord) {
          this.sectionContextMenuItems = this.updateSectionContextMenu();
          this.updatePrimaryImage();
        }

        // if (this.record && !this.addedWO) {
        //   this.mockCreateWorkOrder(this.record);
        // }
        
        if (refresh) {
          eqStore.setValue(EquipmentStatePropNames.REFRESH, false);
        }
      });
      if (sub) { this.subs.push(sub); }
    }
    this.cdr.detectChanges();
  }

  public async selectionChangedHandler(selection: Equipment): Promise<void> {
    if (selection) {
      this.state.getStore(DataStores.EQUIPMENT)?.setValue(EquipmentStatePropNames.SELECTED_EQUIPMENT, selection);
    }
  }
  
  public async updateData(): Promise<void> {
    if (this.viewType === MasterDetailViewTypes.LIST) {
      this.data = await this.ctrl.get(['name'], this.includeRetired);
      this.data?.colDef?.findByDataField('name')?.updateOptions({
          cellTemplate: 'cellTemplate',
          caption: 'Name & Description',
          width: 'calc(50ch + var(--space-lg))'
        });
    } else if (this.viewType === MasterDetailViewTypes.TABLE) {
      this.data = await this.ctrl.get([], this.includeRetired);
      this.updatingData = false;
    }
  }

  public async updatePrimaryImage(): Promise<void> {
    if (this.record) {
      this.primaryImage = await this.ctrl.getPrimaryImage(this.record.id)
    }
  }
  
  public async toggleRetired(): Promise<void> {
    this.state.getStore(DataStores.EQUIPMENT)?.setValue(EquipmentStatePropNames.INCLUDE_RETIRED, !this.includeRetired);
    // if (this.groupedProp) {
    //   this.masterTable?.clearGrouping()
    //   this.masterTable?.updateColumn(this.groupedProp, 'groupIndex', 0);
    // }
  }

  public async useMyView(): Promise<void> {
    this.updateData();
  }

  public openSlider(slider: Sliders): void {
    this.state?.getStore(DataStores.EQUIPMENT)?.setValue(EquipmentStatePropNames.OPEN_SLIDER, slider);
  }

  public sliderClosedHandler(): void {
    if (this.slider !== Sliders.NONE) {
      this.state?.getStore(DataStores.EQUIPMENT)?.setValue(EquipmentStatePropNames.OPEN_SLIDER, Sliders.NONE);
    }
  }

  public crudHandler(record: Nullable<Equipment>): void {
    if (record) {
      this.selectByID(record.id);
    } else {
      this.selectByIndex(0);
    }
  }

  public async primaryImageAdded(file: File): Promise<void> {
    if (this.record) {
      const res = await this.ctrl.addPrimaryImage(this.record.id, file);
      if (res) {
        this.state.getStore(DataStores.EQUIPMENT)?.setValue(EquipmentStatePropNames.REFRESH, true);
      }
    } 
  }

  public async mockCreateWorkOrder(equipment: Equipment): Promise<void> {
    const tasks = await this.taskCtrl.getTasksByEquipmentID(equipment.id);
    if (tasks.length > 0) {
      const taskID = tasks[0].id;
      const wo = await this.workCtrl.createWorkOrder(equipment.id, taskID);
      if (wo) {
        const parts = await this.partsCtrl.getStockLocations_Raw();
        if (parts.length > 0) {
          const partID = parts[0].id;
          await this.workCtrl.addPart(wo.id, partID);
        }
        const labors = await this.laborCtrl.getLaborClasses();
        if (labors.length > 0) {
          const laborID = labors[0].id;
          await this.workCtrl.addLabor(wo.id, laborID);
        }
        const suppliers = await this.supplierCtrl.getRaw(undefined);
        if (suppliers.length > 0) {
          const supplierID = suppliers[0].id;
          await this.workCtrl.addContractor(wo.id, supplierID);
        }
        const equipment = await this.ctrl.get_Raw();
        if (equipment.length > 0) {
          const equipmentID = equipment[0].id;
          await this.workCtrl.addTool(wo.id, equipmentID);
        }
        this.addedWO = true;
      }
    }
  }
  
  public updateSectionContextMenu(): any[] {
    return [
      // {
      //   text: 'Equipment Lists',
      //   icon: this.icons.subListIcon,
      //   template: 'contextMenuItemTemplate',
      //   disabled: false,
      //   danger: false,
      //   onItemClick: () => this.openSlider(Sliders.LISTS)
      // },
      // {
      //   text: 'Manage Custom Fields',
      //   icon: this.icons.rectangleListIcon,
      //   template: 'contextMenuItemTemplate',
      //   disabled: false,
      //   danger: false,
      //   onItemClick: () => this.openSlider(Sliders.MANAGE_CUSTOM_FIELDS)
      // },
      {
        text: this.viewType === MasterDetailViewTypes.TABLE ? 'Show Column Chooser' : 'Customize My View',
        icon: this.icons.subListIcon,
        template: 'contextMenuItemTemplate',
        disabled: false,
        beginGroup: false,
        danger: false,
        onItemClick: () => {
          if(this.viewType === MasterDetailViewTypes.TABLE) {
            this.showColumnChooser();
          } else {
            this.openSlider(Sliders.CUSTOMIZE_VIEW)
          }
        }
      },
      {
        text: 'Enter Instrument Readings',
        icon: this.icons.instrumentsIcon,
        template: 'contextMenuItemTemplate',
        disabled: false,
        danger: false,
        beginGroup: true,
        onItemClick: () => this.openSlider(Sliders.ENTER_READINGS)
      },
      {
        text: 'Group By',
        icon: this.icons.objectGroupIcon,
        template: 'contextMenuSlideoutItemTemplate',
        disabled: false,
        danger: false,
        beginGroup: true,
        subItems: this.listGroupByProps,
        onItemClick: (name: string) => this.groupBy(name)
      },
      {
        text: 'Expand All Groups',
        icon: this.icons.swneIcon,
        template: 'contextMenuItemTemplate',
        disabled: false,
        danger: false,
        onItemClick: () => this.expandAllGroups()
      },
      {
        text: 'Collapse All Groups',
        icon: this.icons.swneCenterIcon,
        template: 'contextMenuItemTemplate',
        disabled: false,
        danger: false,
        onItemClick: () => this.collapseAllGroups()
      },
      {
        text: 'Clear Grouping',
        icon: this.icons.ungroupIcon,
        template: 'contextMenuItemTemplate',
        disabled: false,
        danger: false,
        onItemClick: () => this.clearGrouping()
      },
      {
        text: this.includeRetired ? 'Exclude Retired' : 'Include Retired',
        icon: this.icons.zipIcon,
        template: 'contextMenuItemTemplate',
        disabled: false,
        danger: false,
        beginGroup: true,
        onItemClick: () => this.toggleRetired()
      }
    ]
  }

  // Previously i have been using the data tables row context menu for the list item right click menu but
  // because the list item restates the menu in its more button that would mean keeping the methods in both places
  // it would be best if the context menu was self contained within the list item.
}
