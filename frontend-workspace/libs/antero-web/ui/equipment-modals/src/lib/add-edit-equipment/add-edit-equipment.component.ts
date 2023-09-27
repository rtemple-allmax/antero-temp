import { EquipmentControllerService } from '@allmax-angular/antero-web/data-access/equipment-controller';
import { Category, CriticalityRanking, CustomFieldNames, Department, Equipment, EquipmentCondition, EquipmentPriority, EquipmentType, Group, Location, SubLocation, Supplier } from '@allmax-angular/antero-web/entities';
import { AnteroService } from '@allmax-angular/antero-web/services/antero-service';
import { AnteroStoreService } from '@allmax-angular/antero-web/state-management/antero-store';
import { EquipmentSectionStore } from '@allmax-angular/antero-web/state-management/equipment-section-store';
import { EquipmentLists, Modals } from '@allmax-angular/antero-web/types';
import { CrudFunctions, CustomValidator, DropdownItem, Nullable, ObservableBinding, TableData, ValidationData } from '@allmax-angular/shared/types';
import { miscIcons } from '@allmax-angular/shared/ui/icons';
import { ModalWindowComponent } from '@allmax-angular/shared/ui/modal-window';
import { NotificationsService } from '@allmax-angular/shared/ui/notifications';
import { SearchableDropdownComponent } from '@allmax-angular/shared/ui/searchable-dropdown';
import { isNullOrEmpty, unsubscribe } from '@allmax-angular/shared/utils';
import { Component, OnInit, AfterViewInit, OnDestroy, ViewChild, ViewChildren, QueryList, Input, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ant-add-edit-equipment',
  templateUrl: './add-edit-equipment.component.html',
  styleUrls: ['./add-edit-equipment.component.scss'],
})
export class AddEditEquipmentComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(ModalWindowComponent) public modal: Nullable<ModalWindowComponent>;
  @ViewChildren(SearchableDropdownComponent) public dropdownsQuery: Nullable<QueryList<SearchableDropdownComponent>>;
  
  @Input() public categories: Category[] = [];
  @Input() public departments: Department[] = [];
  @Input() public conditions: EquipmentCondition[] = [];
  @Input() public types: EquipmentType[] = [];
  @Input() public groups: Group[] = [];
  @Input() public priorities: EquipmentPriority[] = [];
  @Input() public locations: Location[] = [];
  @Input() public subLocations: SubLocation[] = [];
  @Input() public suppliers: Supplier[] = [];
  @Input() public sourceRecord: Nullable<Equipment>;

  @Output() public opened = new EventEmitter<undefined>();

  public eqData: Nullable<TableData>;
  
  private subs: Subscription[] = [];

  public lists: typeof EquipmentLists = EquipmentLists;
  public crudFunctions: typeof CrudFunctions = CrudFunctions;
  public crud = CrudFunctions.CREATE;
  public showAllFields = false;
  public customFieldNames: Nullable<CustomFieldNames> = null;

  public dropdowns: SearchableDropdownComponent[] = [];

  public copyFromBinding = new ObservableBinding<Equipment>();
  
  public nameBinding = new ObservableBinding<string>();
  public descriptionBinding = new ObservableBinding<string>();
  public departmentBinding = new ObservableBinding<Department>(null);
  public conditionBinding = new ObservableBinding<EquipmentCondition>(null);
  public typeBinding = new ObservableBinding<EquipmentType>(null);
  public groupBinding = new ObservableBinding<Group>(null);
  public priorityBinding = new ObservableBinding<EquipmentPriority>(null);
  public categoryBinding = new ObservableBinding<Category>(null);
  public locationBinding = new ObservableBinding<Location>(null);
  public assetNumberinding = new ObservableBinding<string>();
  public modelNumberBinding = new ObservableBinding<string>();
  public workOrderRateBinding = new ObservableBinding<number>(null);
  public serialNumberBinding = new ObservableBinding<string>();
  public workOrderUnitsBinding = new ObservableBinding<string>();
  public notesBinding = new ObservableBinding<string>();
  public probabilityOfFailureBinding = new ObservableBinding<number>(null);
  public consequenceOfFailureBinding = new ObservableBinding<number>(null);
  public criticalityRankingBinding = new ObservableBinding<CriticalityRanking>(null);
  public vendorBinding = new ObservableBinding<Supplier>(null);
  public manufacturerBinding = new ObservableBinding<Supplier>(null);
  public datePurchasedBinding = new ObservableBinding<Date>();
  public placedInServiceBinding = new ObservableBinding<Date>();
  public warrantyDaysBinding = new ObservableBinding<number>(null);
  public warrantyMeterBinding = new ObservableBinding<number>(null);
  public purchasePriceBinding = new ObservableBinding<number>(null);
  public lifeExpectancyBinding = new ObservableBinding<number>(null);
  public salvageValueBinding = new ObservableBinding<number>(null);
  public includeInstrumentsBinding = new ObservableBinding<boolean>(false);
  public includePartsBinding = new ObservableBinding<boolean>(false);
  public includeTemplatesBinding = new ObservableBinding<boolean>(false);
  public includeDocumentsBinding = new ObservableBinding<boolean>(false);
  public includeImagesBinding = new ObservableBinding<boolean>(false);
  public custom01Binding = new ObservableBinding<string>();
  public custom02Binding = new ObservableBinding<string>();
  public custom03Binding = new ObservableBinding<string>();
  public custom04Binding = new ObservableBinding<string>();
  public custom05Binding = new ObservableBinding<string>();
  public custom06Binding = new ObservableBinding<string>();
  public custom07Binding = new ObservableBinding<string>();
  public custom08Binding = new ObservableBinding<string>();
  public custom09Binding = new ObservableBinding<string>();
  public custom10Binding = new ObservableBinding<string>();
  public custom11Binding = new ObservableBinding<string>();
  public custom12Binding = new ObservableBinding<string>();
  public custom13Binding = new ObservableBinding<string>();
  public custom14Binding = new ObservableBinding<string>();
  public custom15Binding = new ObservableBinding<string>();
  public custom16Binding = new ObservableBinding<string>();
  public custom17Binding = new ObservableBinding<string>();
  public custom18Binding = new ObservableBinding<string>();
  public custom19Binding = new ObservableBinding<string>();
  public custom20Binding = new ObservableBinding<string>();

  public ranking: Nullable<CriticalityRanking>;

  public copying = true;

  public icons = { ...miscIcons };

  public customValidators: CustomValidator<string>[] = [
    new CustomValidator<string>((val: any) => this.antero.checkIfNameExists(new ValidationData(
      this.crud === CrudFunctions.UPDATE ? this.sourceRecord as any : null,
      val,
      this.crud,
      { model: 'equipment', columns: [ 'name' ], values: [ val ]})), `Equipment name alreadys exists`)
  ];

  public get heading(): string {
    switch(this.crud) {
      case CrudFunctions.COPY:
        return `Copy From ${ this.sourceRecord?.name }`;
      case CrudFunctions.UPDATE:
        return `Edit ${ this.sourceRecord?.name }`;
      default:
        return 'Add Equipment'
    }
  }

  public get ready(): boolean {
    return this.nameBinding.validity;
  }

  public get locationHasBeenSelected(): boolean {
    return !isNullOrEmpty(this.locationBinding.value);
  }

  public get criticalityScore(): string {
    const p = this.probabilityOfFailureBinding.value || 0;
    const c = this.consequenceOfFailureBinding.value || 0;
    return (p * c) > 0 ? (p * c).toString() : '';
  }

  constructor(
    private antero: AnteroService,
    private ctrl: EquipmentControllerService,
    private eqStore: EquipmentSectionStore,
    private appStore: AnteroStoreService,
    private notifications: NotificationsService
  ) { }
  
  public async ngOnInit(): Promise<void> {
    this.subs.push(this.appStore.crud$.subscribe(x => {
      this.crud = x;
      if (this.crud === CrudFunctions.UPDATE) {
        this.copying = false;
        this.populate(this.sourceRecord);
      } else if (this.crud === CrudFunctions.COPY) {
        this.copying = true;
        this.populate(this.sourceRecord);
      }
    }));
  }

  public ngAfterViewInit(): void {
    this.dropdowns = this.dropdownsQuery?.toArray() || [];
    this.dropdownsQuery?.changes.subscribe(q => this.dropdowns = q.toArray() || []);
  }

  public ngOnDestroy(): void {
    unsubscribe(this.subs);
  }

  public toggleAllFields(): void {
    this.showAllFields = !this.showAllFields;
  }

  public closedHandler(): void {
    this.antero.closeModal();
  }

  public scrolledHandler(): void {
    this.dropdowns.forEach(d => {
      if (d.isOpen) {
        d.close();
      }
    })
  }
    
  public async populate(record: Nullable<Equipment>): Promise<void> {
    if (!record) { return; }
    this.nameBinding.set(this.copying ? null : record?.name);
    this.descriptionBinding.set(record.description);
    this.departmentBinding.set(record.department);
    this.conditionBinding.set(record.equipmentCondition);
    this.typeBinding.set(record.equipmentType);
    this.groupBinding.set(record.group);
    this.priorityBinding.set(record.equipmentPriority);
    this.categoryBinding.set(record.category);
    this.locationBinding.set(record.location);
    this.assetNumberinding.set(record.assetNumber);
    this.modelNumberBinding.set(record.modelNumber);
    this.workOrderRateBinding.set(record.workOrderRate && record.workOrderRate > 0 ? record.workOrderRate : null);
    this.serialNumberBinding.set(record.serialNumber);
    this.workOrderUnitsBinding.set(record.workOrderUnits);
    this.notesBinding.set(record.notes);
    this.probabilityOfFailureBinding.set(record.probabilityOfFailure && record.probabilityOfFailure > 0 ? record.probabilityOfFailure : null);
    this.consequenceOfFailureBinding.set(record.consequenceOfFailure && record.consequenceOfFailure > 0 ? record.consequenceOfFailure : null);
    this.criticalityRankingBinding.set(record.criticalityRanking);
    this.vendorBinding.set(record.vendor);
    this.manufacturerBinding.set(record.manufacturer);
    this.datePurchasedBinding.set(record.datePurchased);
    this.placedInServiceBinding.set(record.dateInService);
    this.warrantyDaysBinding.set(record.warrantyDays && record.warrantyDays > 0 ? record.warrantyDays : null);
    this.warrantyMeterBinding.set(record.warrantyMeter && record.warrantyMeter > 0 ? record.warrantyMeter : null);
    this.purchasePriceBinding.set(record.purchasePrice && record.purchasePrice > 0 ? record.purchasePrice : null);
    this.lifeExpectancyBinding.set(record.lifeExpectancy && record.lifeExpectancy > 0 ? record.lifeExpectancy : null);
    this.salvageValueBinding.set(record.salvageValue && record.salvageValue > 0 ? record.salvageValue : null);
    this.custom01Binding.set(record.custom01);
    this.custom02Binding.set(record.custom02);
    this.custom03Binding.set(record.custom03);
    this.custom04Binding.set(record.custom04);
    this.custom05Binding.set(record.custom05);
    this.custom06Binding.set(record.custom06);
    this.custom07Binding.set(record.custom07);
    this.custom08Binding.set(record.custom08);
    this.custom09Binding.set(record.custom09);
    this.custom10Binding.set(record.custom10);
    this.custom11Binding.set(record.custom11);
    this.custom12Binding.set(record.custom12);
    this.custom13Binding.set(record.custom13);
    this.custom14Binding.set(record.custom14);
    this.custom15Binding.set(record.custom15);
    this.custom16Binding.set(record.custom16);
    this.custom17Binding.set(record.custom17);
    this.custom18Binding.set(record.custom18);
    this.custom19Binding.set(record.custom19);
    this.custom20Binding.set(record.custom20);
  }

  public updateNameValidity(state: boolean): void {
    this.nameBinding.validity = state;
  }

  public async submit(): Promise<void> {
    const record: Equipment = {
      id: 0,
      name: this.nameBinding.value,
      description: this.descriptionBinding.value,
      departmentID: this.departmentBinding.value?.id,
      equipmentConditionID: this.conditionBinding.value?.id,
      locationID: this.locationBinding.value?.id,
      vendorID: this.vendorBinding.value?.id,
      manufacturerID: this.manufacturerBinding.value?.id,
      equipmentTypeID: this.typeBinding.value?.id,
      equipmentPriorityID: this.priorityBinding.value?.id,
      groupID: this.groupBinding.value?.id,
      categoryID: this.categoryBinding.value?.id,
      modelNumber: this.modelNumberBinding.value,
      serialNumber: this.serialNumberBinding.value,
      assetNumber: this.assetNumberinding.value,
      datePurchased: this.datePurchasedBinding.value,
      purchasePrice: this.purchasePriceBinding.value || 0,
      salvageValue: this.salvageValueBinding.value || 0,
      dateInService: this.placedInServiceBinding.value,
      warrantyDays: this.warrantyDaysBinding.value || 0,
      warrantyMeter: this.warrantyMeterBinding.value || 0,
      lifeExpectancy: this.lifeExpectancyBinding.value || 0,
      notes: this.notesBinding.value,
      workOrderRate: this.workOrderRateBinding.value,
      workOrderUnits: this.workOrderUnitsBinding.value,
      probabilityOfFailure: this.probabilityOfFailureBinding.value || 0,
      consequenceOfFailure: this.consequenceOfFailureBinding.value || 0,
      custom01: this.custom01Binding.value,
      custom02: this.custom02Binding.value,
      custom03: this.custom03Binding.value,
      custom04: this.custom04Binding.value,
      custom05: this.custom05Binding.value,
      custom06: this.custom06Binding.value,
      custom07: this.custom07Binding.value,
      custom08: this.custom08Binding.value,
      custom09: this.custom09Binding.value,
      custom10: this.custom10Binding.value,
      custom11: this.custom11Binding.value,
      custom12: this.custom12Binding.value,
      custom13: this.custom13Binding.value,
      custom14: this.custom14Binding.value,
      custom15: this.custom15Binding.value,
      custom16: this.custom16Binding.value,
      custom17: this.custom17Binding.value,
      custom18: this.custom18Binding.value,
      custom19: this.custom19Binding.value,
      custom20: this.custom20Binding.value 
    }

    switch(this.crud) {
      case CrudFunctions.CREATE:
      case CrudFunctions.COPY:
        this.handleAdd(record);
        break;
      case CrudFunctions.UPDATE:
        this.handleEdit(record);
        break;
    }
  }

  public async handleAdd(record: Equipment): Promise<void> {
    const recordToAdd = {
      newEquipment: record,
      includeDocuments: this.includeDocumentsBinding.value || false,
      includeImages: this.includeImagesBinding.value || false,
      includeInstruments: this.includeInstrumentsBinding.value || false,
      includeParts: this.includePartsBinding.value || false,
      includeTemplates: this.includeTemplatesBinding.value || false
    }

    if (this.copying && this.sourceRecord) {
      recordToAdd.newEquipment.id = this.sourceRecord.id;
    }

    const result = await this.ctrl.addEquipment(recordToAdd);
    if (result) {
      this.appStore.refresh = true;
      // this.eqStore.selection = result;
      this.modal?.close();
    }
  }

  public async handleEdit(record: Equipment): Promise<void> {
    record.id = this.sourceRecord?.id  || 0;
    const result = await this.ctrl.editEquipment(record);
    if (result) {
      this.appStore.refresh = true;
      this.eqStore.selection = await this.ctrl.getByID(record.id);
      this.modal?.close();
    }
  }
  
  public async addCategory(item: DropdownItem): Promise<void>{
    const record = await this.ctrl.addCategory(item.displayName);
    if (record) {
      this.categories.push(record)
      this.categoryBinding.set(record);
      this.notifications.notify(`The Category ${ item.displayName } has been added.`)
    }
  }
  
  public async addDepartment(name: string): Promise<void>{
    const record = await this.ctrl.addDepartment(name);
    if (record) {
      this.departments.push(record)
      this.departmentBinding.set(record);
      this.notifications.notify(`The Department ${ name } has been added.`)
    }
  }
  
  public async addCondition(name: string): Promise<void>{
    const record = await this.ctrl.addCondition(name);
    if (record) {
      this.conditions.push(record)
      this.conditionBinding.set(record);
      this.notifications.notify(`The Condiiton ${ name } has been added.`)
    }
  }
  
  public async addType(name: string): Promise<void>{
    const record = await this.ctrl.addType(name);
    if (record) {
      this.types.push(record)
      this.typeBinding.set(record);
      this.notifications.notify(`The Type ${ name } has been added.`)
    }
  }
  
  public async addGroup(name: string): Promise<void>{
    const record = await this.ctrl.addGroup(name);
    if (record) {
      this.groups.push(record)
      this.groupBinding.set(record);
      this.notifications.notify(`The Group ${ name } has been added.`)
    }
  }
  
  public async addPriority(name: string): Promise<void>{
    const record = await this.ctrl.addPriority(name);
    if (record) {
      this.priorities.push(record)
      this.priorityBinding.set(record);
      this.notifications.notify(`The Priority ${ name } has been added.`)
    }
  }
  
  public async addLocation(name: string): Promise<void>{
    const record = await this.ctrl.addLocation(name);
    if (record) {
      this.locations.push(record)
      this.locationBinding.set(record);
      this.notifications.notify(`The Location ${ name } has been added.`)
    }
  }

  public async addSupplier(name: string, propName: string = 'manufacturer'): Promise<void> {
    const record = await this.ctrl.addSupplier(name);
    if (record) {
      this.suppliers.push(record);
      if (propName === 'vendor') {
        this.vendorBinding.set(record);
      } else {
        this.manufacturerBinding.set(record);
      }
      this.notifications.notify(`The Supplier ${ name } has been added.`)
    }
  }

  public equipmentListAddRequestHandler(list: EquipmentLists, val: string): void {
    this.eqStore.selectedList = list;
    this.eqStore.newListItemName = val;
    this.antero.openModal(Modals.EQUIPMENT_LISTS);
  }
}
