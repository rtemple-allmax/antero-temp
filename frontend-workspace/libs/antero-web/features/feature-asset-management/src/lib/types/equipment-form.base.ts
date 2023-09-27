import { Category, CriticalityRanking, Department, Equipment, EquipmentCondition, EquipmentPriority, EquipmentType, Group, Location, SubLocation, Supplier } from '@allmax-angular/antero-web/entities';
import { AddEquipment } from '@allmax-angular/antero-web/types';
import { CrudFunctions, ObservableBinding } from '@allmax-angular/shared/types';
import { Component } from '@angular/core';
import { EquipmentSliderBaseComponent } from './equipment-slider.base';

@Component({ template: '' })
export class EquipmentFormBaseComponent extends EquipmentSliderBaseComponent {
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

  public categories: Category[] = [];
  public departments: Department[] = [];
  public conditions: EquipmentCondition[] = [];
  public types: EquipmentType[] = [];
  public groups: Group[] = [];
  public priorities: EquipmentPriority[] = [];
  public locations: Location[] = [];
  public subLocations: SubLocation[] = [];
  public suppliers: Supplier[] = [];
  
  public async populate(crud: CrudFunctions): Promise<void> {
    if (this.source) {
      this.nameBinding.set(crud === CrudFunctions.COPY ? null : this.source.name);
      this.descriptionBinding.set(this.source.description);
      this.departmentBinding.set(this.source.department);
      this.conditionBinding.set(this.source.equipmentCondition);
      this.typeBinding.set(this.source.equipmentType);
      this.groupBinding.set(this.source.group);
      this.priorityBinding.set(this.source.equipmentPriority);
      this.categoryBinding.set(this.source.category);
      this.locationBinding.set(this.source.location);
      this.sublocationBinding.set(this.source.subLocation);
      this.assetNumberBinding.set(this.source.assetNumber);
      this.modelNumberBinding.set(this.source.modelNumber);
      this.workOrderRateBinding.set(this.source.workOrderRate && this.source.workOrderRate > 0 ? this.source.workOrderRate : null);
      this.serialNumberBinding.set(this.source.serialNumber);
      this.workOrderUnitsBinding.set(this.source.workOrderUnits);
      this.notesBinding.set(this.source.notes);
      this.probabilityOfFailureBinding.set(this.source.probabilityOfFailure && this.source.probabilityOfFailure > 0 ? this.source.probabilityOfFailure : null);
      this.consequenceOfFailureBinding.set(this.source.consequenceOfFailure && this.source.consequenceOfFailure > 0 ? this.source.consequenceOfFailure : null);
      this.criticalityRankingBinding.set(this.source.criticalityRanking);
      this.vendorBinding.set(this.source.vendor);
      this.manufacturerBinding.set(this.source.manufacturer);
      this.datePurchasedBinding.set(this.source.datePurchased);
      this.placedInServiceBinding.set(this.source.dateInService);
      this.warrantyDaysBinding.set(this.source.warrantyDays && this.source.warrantyDays > 0 ? this.source.warrantyDays : null);
      this.warrantyMeterBinding.set(this.source.warrantyMeter && this.source.warrantyMeter > 0 ? this.source.warrantyMeter : null);
      this.purchasePriceBinding.set(this.source.purchasePrice && this.source.purchasePrice > 0 ? this.source.purchasePrice : null);
      this.lifeExpectancyBinding.set(this.source.lifeExpectancy && this.source.lifeExpectancy > 0 ? this.source.lifeExpectancy : null);
      this.salvageValueBinding.set(this.source.salvageValue && this.source.salvageValue > 0 ? this.source.salvageValue : null);
    }
  }

  public updateNameValidity(state: boolean): void {
    this.nameBinding.validity = state;
  }

  public buildRecord(crud: CrudFunctions): Equipment | AddEquipment {
    const record: Equipment = {
      id: (crud === CrudFunctions.COPY || crud === CrudFunctions.UPDATE) && this.source ? this.source.id : 0,
      name: this.nameBinding.value,
      description: this.descriptionBinding.value,
      departmentID: this.departmentBinding.value?.id,
      department: null,
      equipmentConditionID: this.conditionBinding.value?.id,
      equipmentCondition: null,
      locationID: this.locationBinding.value?.id,
      location: null,
      vendorID: this.vendorBinding.value?.id,
      vendor: null,
      manufacturerID: this.manufacturerBinding.value?.id,
      manufacturer: null,
      equipmentTypeID: this.typeBinding.value?.id,
      equipmentType: null,
      equipmentPriorityID: this.priorityBinding.value?.id,
      equipmentPriority: null,
      groupID: this.groupBinding.value?.id,
      group: null,
      categoryID: this.categoryBinding.value?.id,
      category: null,
      modelNumber: this.modelNumberBinding.value,
      serialNumber: this.serialNumberBinding.value,
      assetNumber: this.assetNumberBinding.value,
      datePurchased: this.datePurchasedBinding.value,
      purchasePrice: this.purchasePriceBinding.value,
      salvageValue: this.salvageValueBinding.value,
      dateInService: this.placedInServiceBinding.value,
      warrantyDays: this.warrantyDaysBinding.value,
      warrantyMeter: this.warrantyMeterBinding.value,
      lifeExpectancy: this.lifeExpectancyBinding.value,
      notes: this.notesBinding.value,
      workOrderRate: this.workOrderRateBinding.value,
      workOrderUnits: this.workOrderUnitsBinding.value
    }
    if (crud === CrudFunctions.CREATE || crud === CrudFunctions.COPY) {
      const recordToAdd: AddEquipment = {
        newEquipment: record,
        includeDocuments: this.includeDocumentsBinding.value || false,
        includeImages: this.includeImagesBinding.value || false,
        includeInstruments: this.includeInstrumentsBinding.value || false,
        includeParts: this.includePartsBinding.value || false,
        includeTemplates: this.includeTemplatesBinding.value || false
      }
      return recordToAdd;
    } 
    return record;
  }

  public async getDepartments(): Promise<void> {
    this.departments = await this.eqCtrl.getDepartments();
  }

  public async getConditions(): Promise<void> {
    this.conditions = await this.eqCtrl.getConditions();
  }

  public async getTypes(): Promise<void> {
    this.types = await this.eqCtrl.getTypes();
  }

  public async getGroups(): Promise<void> {
    this.groups = await this.eqCtrl.getGroups();
  }

  public async getPriorities(): Promise<void> {
    this.priorities = await this.eqCtrl.getPriorities();
  }

  public async getCategories(): Promise<void> {
    this.categories = await this.eqCtrl.getCategories();
  }

  public async getLocations(): Promise<void> {
    this.locations = await this.eqCtrl.getLocations();
  }

  public async getSubLocations(): Promise<void> {
    this.locations = await this.eqCtrl.getLocations();
  }

  public async getSuppliers(): Promise<void> {
    this.suppliers = await this.eqCtrl.getSuppliers();
  }
}