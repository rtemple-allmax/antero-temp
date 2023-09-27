import { EquipmentControllerService } from "@allmax-angular/antero-web/data-access/equipment-controller";
import { Category, CriticalityRanking, CustomFieldNames, Department, Equipment, EquipmentCondition,  Location, EquipmentPriority, EquipmentType, Group, SubLocation, Supplier } from "@allmax-angular/antero-web/entities";
import { AnteroService } from "@allmax-angular/antero-web/services/antero-service";
import { PersistenceService } from "@allmax-angular/antero-web/services/persistence";
import { AnteroStoreService } from "@allmax-angular/antero-web/state-management/antero-store";
import { EquipmentSectionStore } from "@allmax-angular/antero-web/state-management/equipment-section-store";
import { FormsStore } from "@allmax-angular/antero-web/state-management/forms-store";
import { AddEquipment, EquipmentLists, Modals } from "@allmax-angular/antero-web/types";
import { CrudFunctions, CustomValidator, Nullable, ObservableBinding, ValidationData } from "@allmax-angular/shared/types";
import { allIcons } from "@allmax-angular/shared/ui/icons";
import { ModalWindowComponent } from "@allmax-angular/shared/ui/modal-window";
import { NotificationsService } from "@allmax-angular/shared/ui/notifications";
import { SearchableDropdownComponent } from "@allmax-angular/shared/ui/searchable-dropdown";
import { isNullOrEmpty, unsubscribe } from "@allmax-angular/shared/utils";
import { Component, OnInit, AfterViewInit, OnDestroy, ViewChildren, QueryList, ViewChild } from "@angular/core";
import { combineLatest, Subscription } from 'rxjs';

@Component({ template: '' })
export class EquipmentFormBaseComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(ModalWindowComponent) public modal: Nullable<ModalWindowComponent>; 
  @ViewChildren(SearchableDropdownComponent) public dropdownsQuery: Nullable<QueryList<SearchableDropdownComponent>>;

  public persisted: Nullable<Equipment>;
  public source: Nullable<Equipment>;

  public usePersisted = false;

  private subs: Subscription[] = [];

  public icons = { ...allIcons };

  public lists: typeof EquipmentLists = EquipmentLists;

  public categories: Category[] = [];
  public departments: Department[] = [];
  public conditions: EquipmentCondition[] = [];
  public types: EquipmentType[] = [];
  public groups: Group[] = [];
  public priorities: EquipmentPriority[] = [];
  public locations: Location[] = [];
  public subLocations: SubLocation[] = [];
  public suppliers: Supplier[] = [];

  public crudFunctions: typeof CrudFunctions = CrudFunctions;
  public crud = CrudFunctions.CREATE;

  public customFieldNames: Nullable<CustomFieldNames>;
  public ranking: Nullable<CriticalityRanking>;

  public dropdowns: SearchableDropdownComponent[] = [];

  public copyFromBinding = new ObservableBinding<Equipment>(null);
  public nameBinding = new ObservableBinding<string>();
  public descriptionBinding = new ObservableBinding<string>();
  public departmentBinding = new ObservableBinding<Department>(null);
  public conditionBinding = new ObservableBinding<EquipmentCondition>(null);
  public typeBinding = new ObservableBinding<EquipmentType>(null);
  public groupBinding = new ObservableBinding<Group>(null);
  public priorityBinding = new ObservableBinding<EquipmentPriority>(null);
  public categoryBinding = new ObservableBinding<Category>(null);
  public locationBinding = new ObservableBinding<Location>(null);
  public sublocationBinding = new ObservableBinding<SubLocation>(null);
  public assetNumberBinding = new ObservableBinding<string>();
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

  public customValidators: CustomValidator<string>[] = [
    new CustomValidator<string>((val: any) => this.antero.checkIfNameExists(new ValidationData(
      this.crud === CrudFunctions.UPDATE ? this.source as any : null,
      val,
      this.crud,
      { model: 'equipment', columns: [ 'name' ], values: [ val ]})), `Equipment name alreadys exists`)
  ];

  public get heading(): string {
    switch(this.crud) {
      case CrudFunctions.COPY:
        return `Copy From ${ this.source?.name }`;
      case CrudFunctions.UPDATE:
        return `Edit ${ this.source?.name }`;
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
    private eqCtrl: EquipmentControllerService,
    private eqStore: EquipmentSectionStore,
    private appStore: AnteroStoreService,
    private notifications: NotificationsService,
    protected persistence: PersistenceService,
    private formsStore: FormsStore 
  ) { }

  public ngOnInit(): void {
    this.subs.push(combineLatest([ this.appStore.crud$, this.eqStore.selection$, this.formsStore.equipmentAddEditForm$ ]).subscribe(([crud, source, form]) => {
      console.log('in combine latest', { crud, form, source })
      this.crud = crud;
      if (form) {
        this.persisted = form;
        if (this.persisted) {
          this.usePersisted = true;
        }
      }
      this.source = source;
      this.populate();
    }))

    // this.subs.push(this.appStore.crud$.subscribe(x => {
    //   this.crud = x;
    //   this.populate();
    // }));

    // this.subs.push(this.eqStore.selection$.subscribe(x => {
    //   this.source = x;
    //   this.populate();
    // }))

    // this.subs.push(this.formsStore.equipmentAddEditForm$.subscribe(x => ))
  }

  public ngAfterViewInit(): void {
    this.dropdowns = this.dropdownsQuery?.toArray() || [];
    this.dropdownsQuery?.changes.subscribe(q => this.dropdowns = q.toArray() || []);
    this.modal?.open();
  }

  public ngOnDestroy(): void {
    unsubscribe(this.subs);
  }

  public scrolledHandler(): void {
    this.dropdowns.forEach(d => {
      if (d.isOpen) {
        d.close();
      }
    })
  }

  public async populate(): Promise<void> {
    let record: Nullable<Equipment>;

    if (this.usePersisted && this.persisted) {
      record = this.persisted;
    } else if ((this.crud === CrudFunctions.UPDATE || this.crud === CrudFunctions.COPY) && this.source) {
      record = this.source;
    }
    
    if (record) {
      this.nameBinding.set(this.crud === CrudFunctions.COPY ? null : record.name);
      this.descriptionBinding.set(record.description);
      this.departmentBinding.set(record.department);
      this.conditionBinding.set(record.equipmentCondition);
      this.typeBinding.set(record.equipmentType);
      this.groupBinding.set(record.group);
      this.priorityBinding.set(record.equipmentPriority);
      this.categoryBinding.set(record.category);
      this.locationBinding.set(record.location);
      this.sublocationBinding.set(record.subLocation);
      this.assetNumberBinding.set(record.assetNumber);
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
  }

  public updateNameValidity(state: boolean): void {
    this.nameBinding.validity = state;
  }

  public buildRecord(): Equipment {
    const record = {
      id: 0,
      name: this.nameBinding.value,
      description: this.descriptionBinding.value,
      departmentID: this.departmentBinding.value?.id,
      department: this.departmentBinding.value,
      equipmentConditionID: this.conditionBinding.value?.id,
      equipmentCondition: this.conditionBinding.value,
      locationID: this.locationBinding.value?.id,
      location: this.locationBinding.value,
      vendorID: this.vendorBinding.value?.id,
      vendor: this.vendorBinding.value,
      manufacturerID: this.manufacturerBinding.value?.id,
      manufacturer: this.manufacturerBinding.value,
      equipmentTypeID: this.typeBinding.value?.id,
      equipmentType: this.typeBinding.value,
      equipmentPriorityID: this.priorityBinding.value?.id,
      equipmentPriority: this.priorityBinding.value,
      groupID: this.groupBinding.value?.id,
      group: this.groupBinding.value,
      categoryID: this.categoryBinding.value?.id,
      category: this.categoryBinding.value,
      modelNumber: this.modelNumberBinding.value,
      serialNumber: this.serialNumberBinding.value,
      assetNumber: this.assetNumberBinding.value,
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

    if ((this.crud === CrudFunctions.COPY || this.crud === CrudFunctions.UPDATE) && this.source) {
      record.id = this.source.id;
    }

    return record;
   }

  public async submit(): Promise<void> {
    const record: Equipment = this.buildRecord();

    switch(this.crud) {
      case CrudFunctions.CREATE:
      case CrudFunctions.COPY:
        this.addHandler(record);
        break;
      case CrudFunctions.UPDATE:
        this.editHandler(record);
        break;
      case CrudFunctions.DELETE:
        this.deleteHandler();
    }
    this.formsStore.equipmentAddEditForm = null;
  }

  public async addHandler(record: Equipment): Promise<void> {
    const recordToAdd = {
      newEquipment: record,
      includeDocuments: this.includeDocumentsBinding.value || false,
      includeImages: this.includeImagesBinding.value || false,
      includeInstruments: this.includeInstrumentsBinding.value || false,
      includeParts: this.includePartsBinding.value || false,
      includeTemplates: this.includeTemplatesBinding.value || false
    }

    const result = await this.eqCtrl.addEquipment(recordToAdd);
    console.log('add equipment result', result);
    if (result) {
      this.appStore.refresh = true;
      // this.eqStore.selection = result;
      this.closedHandler();
    }
  }

  public async editHandler(record: Equipment): Promise<void> {
    const result = await this.eqCtrl.editEquipment(record);
    if (result) {
      this.appStore.refresh = true;
      this.eqStore.selection = await this.eqCtrl.getByID(record.id);
      this.closedHandler();
    }
  }

  public async deleteHandler(): Promise<void> {
    if (this.source) {
      const result = await this.eqCtrl.deleteEquipment(this.source);
      if (result) {
        this.appStore.refresh = true;
        this.closedHandler();
      }
    }
  }

  public closedHandler(): void {
    this.antero.closeModal();
  }

  public async getDepartments(): Promise<void> {
    this.departments = await this.eqCtrl.getDepartments();
  }

  public async addDepartment(name: string): Promise<void>{
    const record = await this.eqCtrl.addDepartment(name);
    if (record) {
      this.departments.push(record)
      this.notifications.notify(`The Department ${ name } has been added.`)
    }
  }

  public async getConditions(): Promise<void> {
    this.conditions = await this.eqCtrl.getConditions();
  }

  public async addCondition(name: string): Promise<void>{
    const record = await this.eqCtrl.addCondition(name);
    if (record) {
      this.conditions.push(record)
      this.notifications.notify(`The Condition ${ name } has been added.`)
    }
  }

  public async getTypes(): Promise<void> {
    this.types = await this.eqCtrl.getTypes();
  }

  public async addType(name: string): Promise<void>{
    const record = await this.eqCtrl.addType(name);
    if (record) {
      this.types.push(record)
      this.notifications.notify(`The Type ${ name } has been added.`)
    }
  }

  public async getGroups(): Promise<void> {
    this.groups = await this.eqCtrl.getGroups();
  }

  public async addGroup(name: string): Promise<void>{
    const record = await this.eqCtrl.addGroup(name);
    if (record) {
      this.groups.push(record)
      this.notifications.notify(`The Group ${ name } has been added.`)
    }
  }

  public async getPriorities(): Promise<void> {
    this.priorities = await this.eqCtrl.getPriorities();
  }

  public async addPriority(name: string): Promise<void>{
    const record = await this.eqCtrl.addPriority(name);
    if (record) {
      this.priorities.push(record)
      this.notifications.notify(`The Priority ${ name } has been added.`)
    }
  }

  public async getCategories(): Promise<void> {
    this.categories = await this.eqCtrl.getCategories();
  }

  public async addCategory(name: string): Promise<void>{
    const record = await this.eqCtrl.addCategory(name);
    if (record) {
      this.categories.push(record)
      this.notifications.notify(`The Category ${ name } has been added.`)
    }
  }

  public async getLocations(): Promise<void> {
    this.locations = await this.eqCtrl.getLocations();
  }

  public async addLocation(name: string): Promise<void>{
    const record = await this.eqCtrl.addLocation(name);
    if (record) {
      this.locations.push(record)
      this.notifications.notify(`The Location ${ name } has been added.`)
    }
  }

  public async getSuppliers(): Promise<void> {
    this.suppliers = await this.eqCtrl.getSuppliers();
  }

  public async addSupplier(name: string, typeName: string = 'Vendor'): Promise<void> {
    const record = await this.eqCtrl.addSupplier(name);
    if (record) {
      this.suppliers.push(record)
      this.notifications.notify(`The ${ typeName } ${ name } has been added.`)
    }
  }

  public equipmentListAddRequestHandler(list: EquipmentLists, val: string): void {
    this.formsStore.equipmentAddEditForm = this.buildRecord();
    this.eqStore.selectedList = list;
    this.eqStore.newListItemName = val;
    this.antero.openModal(Modals.EQUIPMENT_LISTS);
  }
}