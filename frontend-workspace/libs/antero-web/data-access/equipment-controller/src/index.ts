import { EquipmentActivityColumnDefinition, EquipmentColumnDefinition, EquipmentDocumentColumnDefinition, EquipmentInServiceHistoryColumnDefinition, EquipmentPartColumnDefinition, InstrumentColumnDefinition, PartColumnDefinition, PartQuantityColumnDefinition, ProcedureColumnDefinition, ReadingColumnDefinition, WorkHistoryColumnDefinition, WorkOrderColumnDefinition, WorkTemplateColumnDefinition } from '@allmax-angular/antero-web/column-definitions';
import { Category, CriticalityRanking, CustomFieldNames, Department, Document, Equipment, EquipmentCondition, EquipmentDocument, EquipmentImage, EquipmentInServiceHistory, EquipmentPart, EquipmentPriority, EquipmentType, Group, Instrument, Location, Part, Reading, SubLocation, Supplier, WorkHistory, WorkOrder, WorkTemplate } from '@allmax-angular/antero-web/entities';
import { AnteroService } from '@allmax-angular/antero-web/services/antero-service';
import { ErrorService } from '@allmax-angular/antero-web/services/error';
import { LayoutService, TableLayouts } from '@allmax-angular/antero-web/services/layout';
import { AnteroStoreService } from '@allmax-angular/antero-web/state-management/antero-store';
import { EquipmentSectionStore } from '@allmax-angular/antero-web/state-management/equipment-section-store';
import { AddEquipment, ApiResponse, ImageData, PartData } from '@allmax-angular/antero-web/types';
import { DataSourceConfiguratorService, FetchService } from '@allmax-angular/shared/services';
import { DataSourceConfig, GeoPoint, Nullable, TableData, TimeFrameParams } from '@allmax-angular/shared/types';
import { DataTableComponent } from '@allmax-angular/shared/ui/data-table';
import { downloadDocument, generateQueryStringFromObject, isNullOrEmpty, unsubscribe } from '@allmax-angular/shared/utils';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subscription } from 'rxjs';

enum Endpoints {
  EQUIPMENT_GET = '/equipment/all',
  EQUIPMENT_WITH_INSTRUMENTS = '/equipment/withinstruments',
  EQUIPMENT_ADD = '/equipment/add',
  EQUIPMENT_UPDATE = '/equipment/update',
  EQUIPMENT_DELETE = '/equipment/*/delete',
  EQUIPMENT_UPDATE_LATLONG = '/equipment/*/latlong/update',
  EQUIPMENT_CLEAR_LATLONG = '/equipment/*/latlong/clear',
  CUSTOM_FIELD_NAMES_GET = '/setuptools/customfield/all',
  CATEGORIES_GET = '/equipment/category/all',
  CATEGORY_ADD = '/equipment/category/add',
  CATEGORY_DELETE = '/equipment/category/*/delete',
  CATEGORY_UPDATE = '/equipment/category/update',
  CONDITIONS_GET = '/equipment/condition/all',
  CONDITION_ADD = '/equipment/condition/add',
  CONDITION_UPDATE = '/equipment/condition/update',
  CONDITION_DELETE = '/equipment/condition/*/delete',
  CRITICALITY_ALL = '/setuptools/criticality/all',
  CRITICALITY_ADD = '/setuptools/criticality/add',
  CRITICALITY_UPDATE = '/setuptools/criticality/update',
  CRITICALITY_DELETE = '/setuptools/criticality/*/delete',
  CRITICALITY_BY_VALUE = '/setuptools/criticality/forvalue/*',
  DEPARTMENTS_GET = '/equipment/department/all',
  DEPARTMENT_ADD = '/equipment/department/add',
  DEPARTMENT_UPDATE = '/equipment/department/update',
  DEPARTMENT_DELETE = '/equipment/department/*/delete',
  TYPES_GET = '/equipment/type/all',
  TYPE_ADD = '/equipment/type/add',
  TYPE_UPDATE = '/equipment/type/update',
  TYPE_DELETE = '/equipment/type/*/delete',
  GROUPS_GET = '/equipment/group/all',
  GROUP_ADD = '/equipment/group/add',
  GROUP_UPDATE = '/equipment/group/update',
  GROUP_DELETE = '/equipment/group/*/delete',
  PRIORITIES_GET = '/equipment/priority/all',
  PRIORITY_ADD = '/equipment/priority/add',
  PRIORITY_UPDATE = '/equipment/priority/update',
  PRIORITY_DELETE = '/equipment/priority/*/delete',
  LOCATIONS_GET = '/location/all',
  LOCATION_ADD = '/location/add',
  LOCATION_UPDATE = '/location/update',
  LOCATION_DELETE = '/location/*/delete',
  EQUIPMENT_GET_ONE = '/equipment/*',
  INSTRUMENTS_GET = '/equipment/*/instrument/all',
  INSTRUMENT_ADD = '/equipment/instrument/add',
  INSTRUMENT_DELETE = '/equipment/instrument/*/delete',
  INSTRUMENT_UPDATE = '/equipment/instrument/update',
  INSTRUMENT_GET_ONE = '/equipment/instrument/*',
  SUPPLIERS_GET = '/supplier/all',
  SUPPLIER_ADD = '/supplier/add',
  IMAGES_ADD = '/equipment/*/image/add/multiple',
  IMAGES_ALL = '/equipment/*/image/all',
  IMAGE_DELETE = '/equipment/image/*/delete',
  IMAGE_THUMBNAIL_GET_ONE = '/image/*/thumbnail',
  IMAGE_GET_ONE = '/image/*',
  IMAGES_REORDER = '/equipment/image/reorder',
  SET_PRIMARY_IMAGE = '/equipment/image/*/primary/update',
  GET_PRIMARY_IMAGE = '/equipment/*/image/primary',
  ADD_PRIMARY_IMAGE = '/equipment/*/image/primary/add',
  READINGS_ENTER = '/equipment/readings/add',
  READINGS_HISTORY = '/equipment/instrument/*/reading/all',
  READING_UPDATE = '/equipment/reading/update',
  READING_DELETE = '/equipment/reading/*/delete',
  EQUIPMENT_PART_ALL = '/equipment/*/part/all',
  EQUIPMENT_PART_ALL_BY_PART = '/part/*/equipment/all',
  EQUIPMENT_PART_ADD = '/equipment/part/add',
  EQUIPMENT_PART_UPDATE = '/equipment/part/update',
  EQUIPMENT_PART_DELETE = '/equipment/part/*/delete',
  PARTS_ALL = '/part/all',
  PART_GET_ONE = '/part/*',
  STOCK_LOCATIONS = '/part/*/quantity/all',
  SUBLOCATIONS_ALL = '/location/*/sublocation/all',
  SUBLOCATION_ADD = '/location/*/sublocation/add',
  SUBLOCATION_UPDATE = '/location/sublocation/update',
  SUBLOCATION_DELETE = '/location/sublocation/*/delete',
  TEMPLATES_GET = '/equipment/*/worktemplate/all',
  DOCUMENT_ALL = '/equipment/*/document/all',
  DOCUMENT_ADD = '/equipment/*/document/add/multiple',
  DOCUMENT_DELETE = '/equipment/document/*/delete',
  DOCUMENTS_DELETE = '/equipment/document/delete/multiple',
  WORK_ORDERS_GET = '/equipment/*/workorder/all',
  PROCEDURES_GET = '/equipment/*/procedure/all',
  WORK_HISTORY_GET = '/equipment/*/workhistory/recent',
  PROCEDURE_HISTORY_GET = '/equipment/*/procedure/history',
  DOCUMENT_RENAME = '/equipment/document/*/update',
  DOCUMENT_DOWNLOAD = '/document/*/data',
  REACTIVATE = '/equipment/*/reactivate',
  REPLACE = '/equipment/*/replace',
  RETIRE = '/equipment/*/retire',
  IN_SERVICE_HISTORY = '/equipment/*/inservicehistory/all',
  IN_SERVICE_HISTORY_UPDATE = '/equipment/inservicehistory/update',
  IN_SERVICE_TOGGLE = '/equipment/toggleinservice',
  EQUIPMENT_LISTS = '/equipment/formdata',
  EQUIPMENT_GET_ACTIVITY = '/application/audit/all?AnteroSectionType=17&ModelID=*',
  GET_PARTS_DATA = '/equipment/*/part/data'
}

@Injectable({ providedIn: 'root' })
export class EquipmentControllerService {
  private subs: Subscription[] = [];

  private masterTable: Nullable<DataTableComponent>;
  // private instrumentsTable: Nullable<DataTableComponent>;
  private readingsTable: Nullable<DataTableComponent>;
  // private partsTable: Nullable<DataTableComponent>;
  private documentsTable: Nullable<DataTableComponent>;
  // private inServiceHistoryTable: Nullable<DataTableComponent>;

  private readonly key = 'id';
  
  constructor(
    private antero: AnteroService,
    private anteroStore: AnteroStoreService,
    private datasources: DataSourceConfiguratorService,
    private equipmentStore: EquipmentSectionStore,
    private errors: ErrorService,
    private fetch: FetchService,
    private layouts: LayoutService,
    private spinner: NgxSpinnerService
  ) { }

  // public initialize(): void {
  //   this.subs.push(this.equipmentStore.masterTable$.subscribe(x => this.masterTable = x));
  //   this.subs.push(this.equipmentStore.instrumentsTable$.subscribe(x => this.instrumentsTable = x));
  //   this.subs.push(this.equipmentStore.readingsTable$.subscribe(x => this.readingsTable = x));
  //   this.subs.push(this.equipmentStore.partsTable$.subscribe(x => this.partsTable = x));
  //   this.subs.push(this.equipmentStore.documentsTable$.subscribe(x => this.documentsTable = x));
  //   this.subs.push(this.equipmentStore.inServiceHistoryTable$.subscribe(x => this.inServiceHistoryTable = x));
  // }

  // public finalize(): void {
  //   unsubscribe(this.subs);
  // }

// #region Equipment
  public async get(visibleCols: string[], showRetired: boolean = false): Promise<TableData> {
    const config: DataSourceConfig = {
      key: this.key,
      getUrl: Endpoints.EQUIPMENT_GET,
      getOneUrl: Endpoints.EQUIPMENT_GET_ONE,
      updateUrl: Endpoints.EQUIPMENT_UPDATE,
      deleteUrl: Endpoints.EQUIPMENT_DELETE,
      postUrl: Endpoints.EQUIPMENT_ADD,
      includeRetired: showRetired,
      includeData: { navigationProperties: [ 'all' ] },
      errorHandler: (err: any) => {
        if (err instanceof HttpErrorResponse) {
          this.errors.handleError(err);
        }
      }
    };

    const data = this.datasources.create(config);
    const initialColDef = new EquipmentColumnDefinition(); 
    
    if (visibleCols.length < 1) {
      const colDef = await this.layouts.applyLayoutTo<EquipmentColumnDefinition>({ layout: TableLayouts.EQUIPMENT_GRID, forceLayout: false }, initialColDef);
      return { data, colDef };
    } else {
      visibleCols.forEach(x => initialColDef.findByDataField(x)?.updateOptions({ visible: true }));
      return { data, colDef: initialColDef };
    }
  }

  public async get_Raw(): Promise<Equipment[]> {
    let res: Nullable<HttpResponse<ApiResponse<Equipment>>>;
    const path = Endpoints.EQUIPMENT_GET;

    try {
      res = await this.fetch.get<ApiResponse<Equipment>>(path);
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err);
      }
    }

    return res?.body?.data || [];
  }

  public async getByID(id: number): Promise<Nullable<Equipment>> {
    let res: Nullable<HttpResponse<Equipment>>;
    const path = Endpoints.EQUIPMENT_GET_ONE.replace('*', id.toString());
    const query = generateQueryStringFromObject({ includeData: 'all' })

    try {
      res = await this.fetch.get<Equipment>(`${ path }${ query }`)
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err);
      }
    }

    return res?.body;
  }

  public async getEquipmentWithInstruments(visibleCols: string[]): Promise<TableData> {
    const config: DataSourceConfig = {
      key: this.key,
      getUrl: Endpoints.EQUIPMENT_WITH_INSTRUMENTS,
      getOneUrl: Endpoints.EQUIPMENT_GET_ONE,
      updateUrl: Endpoints.EQUIPMENT_UPDATE,
      deleteUrl: Endpoints.EQUIPMENT_DELETE,
      postUrl: Endpoints.EQUIPMENT_ADD,
      includeRetired: false,
      includeData: { navigationProperties: [ 'all' ] },
      errorHandler: (err: any) => {
        if (err instanceof HttpErrorResponse) {
          this.errors.handleError(err);
        }
      }
    };

    const data = this.datasources.create(config);
    const initialColDef = new EquipmentColumnDefinition(); 
    
    if (visibleCols.length < 1) {
      const colDef = await this.layouts.applyLayoutTo<EquipmentColumnDefinition>({ layout: TableLayouts.EQUIPMENT_GRID, forceLayout: false }, initialColDef);
      return { data, colDef };
    } else {
      visibleCols.forEach(x => initialColDef.findByDataField(x)?.updateOptions({ visible: true }));
      return { data, colDef: initialColDef };
    }
  }

  public async addEquipment(record: AddEquipment): Promise<Nullable<Equipment>> {
    let res: Nullable<HttpResponse<Equipment>>;
    const query = generateQueryStringFromObject({ includedata: [ 'all' ]});
    const path = `${ Endpoints.EQUIPMENT_ADD }${ query }`;

    try {
      res = await this.fetch.post<AddEquipment, Equipment>(path, record)
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err, Endpoints.EQUIPMENT_ADD);
      }
    }
    return res?.body;
  }
  
  public async editEquipment(record: Equipment): Promise<Nullable<Equipment>> {
    let res: Nullable<HttpResponse<Equipment>>;
    const query = generateQueryStringFromObject({ includedata: [ 'all' ]});
    const path = `${ Endpoints.EQUIPMENT_UPDATE }${ query }`;

    try {
      res = await this.fetch.put<Equipment, Equipment>(path, record)
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err, Endpoints.EQUIPMENT_UPDATE);
      }
    }

    return res?.body;
  }

  public async deleteEquipment(record: Equipment): Promise<boolean> {
    let res: Nullable<HttpResponse<any>>;
    const path = Endpoints.EQUIPMENT_DELETE.replace('*', record.id.toString());
    try {
      res = await this.fetch.delete(path);
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err);
      }
    }
    return !!res;
  }

  public async retire(equipmentID: number): Promise<boolean> {
    let res: Nullable<HttpResponse<any>>;
    const path = Endpoints.RETIRE.replace('*', equipmentID.toString())

    try {
      res = await this.fetch.post<any, any>(path, null);
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err);
      }
    }
    
    return !!res?.body;
  }

  public async replace(equipmentID: number, newName: string): Promise<void> {
    let res: Nullable<HttpResponse<any>>;
    const path = Endpoints.REPLACE.replace('*', equipmentID.toString());

    try { 
      res = await this.fetch.post<string, any>(path, JSON.stringify(newName));
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err);
      }
    }

    if (res?.body && this.masterTable) {
      this.equipmentStore.selection = res.body;
      await this.masterTable.refresh();
      await this.masterTable.selectByIDs([ res.body.id ]);
      this.masterTable.focusedRowKey = res.body.id;
      this.masterTable.navigateToRow(res.body.id);
      this.antero.closeModal();
    }
  }

  public async reactivate(equipmentID: number): Promise<boolean> {
    let res: Nullable<HttpResponse<any>>;
    const path = Endpoints.REACTIVATE.replace('*', equipmentID.toString());

    try {
      res = await this.fetch.post<any, any>(path, null);
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err);
      }
    }

    if (res?.body) {
      this.masterTable?.refresh();
      this.masterTable?.selectByIDs(res.body.id);
      return true;
    }

    return false;
  }
// #endregion

// #region Departments
  public async getDepartments(): Promise<Department[]> {
    let res: Nullable<HttpResponse<ApiResponse<Department>>>;

    try {
      res = await this.fetch.get<ApiResponse<Department>>(Endpoints.DEPARTMENTS_GET);
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err, Endpoints.DEPARTMENTS_GET);
      }
    }
    return res?.body?.data.map(x => ({ ...x, selected: false })) || [];
  }

  public async addDepartment(name: string): Promise<Nullable<Department>> {
    let res: Nullable<HttpResponse<Department>>;

    try {
      res = await this.fetch.post<string, Department>(Endpoints.DEPARTMENT_ADD, JSON.stringify(name));
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err, Endpoints.DEPARTMENT_ADD);
      }
    }
    return res?.body;
  }

  public async updateDepartment(record: Department): Promise<Nullable<Department>> {
    let res: Nullable<HttpResponse<any>>;

    try {
      res = await this.fetch.put<Department, Department>(Endpoints.DEPARTMENT_UPDATE, record);
    } catch(err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err);
      }
    }

    return res?.body;
  }

  public async deleteDepartment(record: Category): Promise<boolean> {
    let res: Nullable<HttpResponse<any>>;
    const path = Endpoints.DEPARTMENT_DELETE.replace('*', record.id.toString());

    try {
      res = await this.fetch.delete<any>(path)
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err);
      }
    }

    return !!res;
  } 
// #endregion

// #region Conditions
  public async getConditions(): Promise<EquipmentCondition[]> {
    let res: Nullable<HttpResponse<ApiResponse<EquipmentCondition>>>;

    try {
      res = await this.fetch.get<ApiResponse<EquipmentCondition>>(Endpoints.CONDITIONS_GET);
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err, Endpoints.CONDITIONS_GET);
      }
    }

    return res?.body?.data || [];
  }

  public async addCondition(name: string): Promise<Nullable<EquipmentCondition>> {
    let res: Nullable<HttpResponse<EquipmentCondition>>;

    try {
      res = await this.fetch.post<string, EquipmentCondition>(Endpoints.CONDITION_ADD, JSON.stringify(name));
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err, Endpoints.CONDITION_ADD);
      }
    }
    return res?.body;
  }

  public async updateCondition(record: EquipmentCondition): Promise<Nullable<EquipmentCondition>> {
    let res: Nullable<HttpResponse<any>>;

    try {
      res = await this.fetch.put<EquipmentCondition, EquipmentCondition>(Endpoints.CONDITION_UPDATE, record);
    } catch(err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err);
      }
    }

    return res?.body;
  }

  public async deleteCondition(record: EquipmentCondition): Promise<boolean> {
    let res: Nullable<HttpResponse<any>>;
    const path = Endpoints.CONDITION_DELETE.replace('*', record.id.toString());

    try {
      res = await this.fetch.delete<any>(path)
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err);
      }
    }

    return !!res;
  }
// #endregion

// #region Equipment Types 
  public async getTypes(): Promise<EquipmentType[]> {
    let res: Nullable<HttpResponse<ApiResponse<EquipmentType>>>;

    try {
      res = await this.fetch.get<ApiResponse<EquipmentType>>(Endpoints.TYPES_GET);
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err, Endpoints.TYPES_GET);
      }
    }

    return res?.body?.data || [];
  }

  public async addType(name: string): Promise<Nullable<EquipmentType>> {
    let res: Nullable<HttpResponse<EquipmentType>>;

    try {
      res = await this.fetch.post<string, EquipmentType>(Endpoints.TYPE_ADD, JSON.stringify(name));
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err, Endpoints.TYPE_ADD);
      }
    }
    return res?.body;
  }

  public async updateType(record: EquipmentType): Promise<Nullable<EquipmentType>> {
    let res: Nullable<HttpResponse<any>>;

    try {
      res = await this.fetch.put<EquipmentType, EquipmentType>(Endpoints.TYPE_UPDATE, record);
    } catch(err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err);
      }
    }

    return res?.body;
  }

  public async deleteType(record: EquipmentType): Promise<boolean> {
    let res: Nullable<HttpResponse<any>>;
    const path = Endpoints.TYPE_DELETE.replace('*', record.id.toString());

    try {
      res = await this.fetch.delete<any>(path)
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err);
      }
    }

    return !!res;
  }
// #endregion

// #region Groups
  public async getGroups(): Promise<Group[]> {
    let res: Nullable<HttpResponse<ApiResponse<Group>>>;

    try {
      res = await this.fetch.get<ApiResponse<Group>>(Endpoints.GROUPS_GET);
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err, Endpoints.GROUPS_GET);
      }
    }

    return res?.body?.data || [];
  }

  public async addGroup(name: string): Promise<Nullable<Group>> {
    let res: Nullable<HttpResponse<Group>>;

    try {
      res = await this.fetch.post<string, Group>(Endpoints.GROUP_ADD, JSON.stringify(name));
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err, Endpoints.GROUP_ADD);
      }
    }
    return res?.body;
  }

  public async updateGroup(record: Group): Promise<Nullable<Group>> {
    let res: Nullable<HttpResponse<any>>;

    try {
      res = await this.fetch.put<Group, Group>(Endpoints.GROUP_UPDATE, record);
    } catch(err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err);
      }
    }

    return res?.body;
  }

  public async deleteGroup(record: Group): Promise<boolean> {
    let res: Nullable<HttpResponse<any>>;
    const path = Endpoints.GROUP_DELETE.replace('*', record.id.toString());

    try {
      res = await this.fetch.delete<any>(path)
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err);
      }
    }

    return !!res;
  }
// #endregion

// #region Priorities
  public async getPriorities(): Promise<EquipmentPriority[]> {
    let res: Nullable<HttpResponse<ApiResponse<EquipmentPriority>>>;

    try {
      res = await this.fetch.get<ApiResponse<EquipmentPriority>>(Endpoints.PRIORITIES_GET);
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err, Endpoints.PRIORITIES_GET);
      }
    }

    return res?.body?.data || [];
  }

  public async addPriority(name: string): Promise<Nullable<EquipmentPriority>> {
    let res: Nullable<HttpResponse<EquipmentPriority>>;

    try {
      res = await this.fetch.post<string, EquipmentPriority>(Endpoints.PRIORITY_ADD, JSON.stringify(name));
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err, Endpoints.PRIORITY_ADD);
      }
    }
    return res?.body;
  }

  public async updatePriority(record: EquipmentPriority): Promise<Nullable<EquipmentPriority>> {
    let res: Nullable<HttpResponse<any>>;

    try {
      res = await this.fetch.put<EquipmentPriority, EquipmentPriority>(Endpoints.PRIORITY_UPDATE, record);
    } catch(err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err);
      }
    }

    return res?.body;
  }

  public async deletePriority(record: EquipmentPriority): Promise<boolean> {
    let res: Nullable<HttpResponse<any>>;
    const path = Endpoints.PRIORITY_DELETE.replace('*', record.id.toString());

    try {
      res = await this.fetch.delete<any>(path)
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err);
      }
    }

    return !!res;
  }
// #endregion

// #region Categories
  public async getCategories(): Promise<Category[]> {
    let res: Nullable<HttpResponse<ApiResponse<Category>>>;

    try {
      res = await this.fetch.get<ApiResponse<Category>>(Endpoints.CATEGORIES_GET);
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err, Endpoints.CATEGORIES_GET);
      }
    }

    return res?.body?.data || [];
  }

  public async addCategory(name: string): Promise<Nullable<Category>> {
    let res: Nullable<HttpResponse<Category>>;

    try {
      res = await this.fetch.post<string, Category>(Endpoints.CATEGORY_ADD, JSON.stringify(name));
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err, Endpoints.CATEGORY_ADD);
      }
    }
    return res?.body;
  }

  public async updateCategory(record: Category): Promise<Nullable<Category>> {
    let res: Nullable<HttpResponse<any>>;

    try {
      res = await this.fetch.put<Category, Category>(Endpoints.CATEGORY_UPDATE, record);
    } catch(err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err);
      }
    }

    return res?.body;
  }

  public async deleteCategory(record: Category): Promise<boolean> {
    let res: Nullable<HttpResponse<any>>;
    const path = Endpoints.CATEGORY_DELETE.replace('*', record.id.toString());

    try {
      res = await this.fetch.delete<any>(path)
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err);
      }
    }

    return !!res;
  } 
// #endregion

// #region Locations
  public async getLocations(): Promise<Location[]> {
    let res: Nullable<HttpResponse<ApiResponse<Location>>>;

    try {
      res = await this.fetch.get<ApiResponse<Location>>(Endpoints.LOCATIONS_GET);
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err, Endpoints.LOCATIONS_GET);
      }
    }

    return res?.body?.data || [];
  }
  public async addLocation(name: string): Promise<Nullable<Location>> {
    let res: Nullable<HttpResponse<Location>>;

    try {
      res = await this.fetch.post<string, Location>(Endpoints.LOCATION_ADD, JSON.stringify(name));
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err, Endpoints.LOCATION_ADD);
      }
    }
    return res?.body;
  }

  public async updateLocation(record: Location): Promise<Nullable<Location>> {
    let res: Nullable<HttpResponse<Location>>;
    
    try {
      res = await this.fetch.put<Location, Location>(Endpoints.LOCATION_UPDATE, record);
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err);
      }
    }

    return res?.body;
  }

  public async deleteLocation(record: Location): Promise<boolean> {
    let res: Nullable<HttpResponse<any>>;
    const path = Endpoints.LOCATION_DELETE.replace('*', record.id.toString());

    try {
      res = await this.fetch.delete<any>(path);
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err);
      }
    }

    return !!res;
  }
// #endregion

// #region Sublocations
// public async getSubLocations(locationID: number): Promise<SubLocation[]> {
//   let res: Nullable<HttpResponse<ApiResponse<SubLocation>>>;
//   const path = Endpoints.SUBLOCATIONS_ALL.replace('*', locationID.toString());

//   try {
//     res = await this.fetch.get<ApiResponse<SubLocation>>(path);
//   } catch (err) {
//     if (err instanceof HttpErrorResponse) {
//       this.errors.handleError(err);
//     }
//   }

//   return res?.body?.data || [];
// }

// public async addSubLocation(locationID: number, name: string): Promise<Nullable<SubLocation>> {
//   let res: Nullable<HttpResponse<SubLocation>>;
//   const path = Endpoints.SUBLOCATION_ADD.replace('*', locationID.toString());

//   try {
//     res = await this.fetch.post<string, SubLocation>(path, JSON.stringify(name));
//   } catch (err) {
//     if (err instanceof HttpErrorResponse) {
//       this.errors.handleError(err);
//     }
//   }

//   console.log('add sublocation', res)
 
//   return res?.body;
// }

// public async updateSubLocation(record: SubLocation): Promise<Nullable<SubLocation>> {
//   console.log('update sublocation', record)
//   let res: Nullable<HttpResponse<SubLocation>>;

//   try {
//     res = await this.fetch.put<SubLocation, SubLocation>(Endpoints.SUBLOCATION_UPDATE, record);
//   } catch (err) {
//     if (err instanceof HttpErrorResponse) {
//       this.errors.handleError(err);
//     }
//   }

//   return res?.body;
// }

// public async deleteSubLocation(record: SubLocation): Promise<boolean> {
//   let res: Nullable<HttpResponse<any>>;
//   const path = Endpoints.SUBLOCATION_DELETE.replace('*', record.id.toString());

//   try {
//     res = await this.fetch.delete<any>(path);
//   } catch (err) {
//     if (err instanceof HttpErrorResponse) {
//       this.errors.handleError(err);
//     }
//   }

//   return !!res;
// }
// #endregion

// #region Criticality
public async getCritiality(): Promise<CriticalityRanking[]> {
  let res: Nullable<HttpResponse<ApiResponse<CriticalityRanking>>>;

  try {
    res = await this.fetch.get<ApiResponse<CriticalityRanking>>(Endpoints.CRITICALITY_ALL);
  } catch (err) {
    if (err instanceof HttpErrorResponse) {
      this.errors.handleError(err, Endpoints.CRITICALITY_ALL);
    }
  }

  return res?.body?.data || [];
}

public async addCriticality(record: CriticalityRanking): Promise<Nullable<CriticalityRanking>> {
  let res: Nullable<HttpResponse<CriticalityRanking>>;

  try {
    res = await this.fetch.post<CriticalityRanking, CriticalityRanking>(Endpoints.CRITICALITY_ADD, record);
  } catch (err) {
    if (err instanceof HttpErrorResponse) {
      this.errors.handleError(err, Endpoints.CRITICALITY_ADD);
    }
  }
  return res?.body;
}

public async updateCriticality(record: CriticalityRanking): Promise<Nullable<CriticalityRanking>> {
  let res: Nullable<HttpResponse<any>>;

  try {
    res = await this.fetch.put<CriticalityRanking, CriticalityRanking>(Endpoints.CRITICALITY_UPDATE, record);
  } catch(err) {
    if (err instanceof HttpErrorResponse) {
      this.errors.handleError(err);
    }
  }

  return res?.body;
}

public async deleteCriticality(record: CriticalityRanking): Promise<boolean> {
  let res: Nullable<HttpResponse<any>>;
  const path = Endpoints.CRITICALITY_DELETE.replace('*', record.id.toString());

  try {
    res = await this.fetch.delete<any>(path)
  } catch (err) {
    if (err instanceof HttpErrorResponse) {
      this.errors.handleError(err);
    }
  }

  return !!res;
}

public async getCriticalityByValue(value: number): Promise<Nullable<CriticalityRanking>> {
  let res: Nullable<HttpResponse<CriticalityRanking>>;
  const path = Endpoints.CRITICALITY_BY_VALUE.replace('*', value.toString());

  try {
    res = await this.fetch.get<CriticalityRanking>(path);
  } catch (err) {
    if (err instanceof HttpErrorResponse) {
      this.errors.handleError(err);
    }
  }

  return res?.body;
}
// #endregion

// #region Instruments
  public async getInstruments(equipmentID: number, visibleColumns: string[]): Promise<TableData> {
    const config: DataSourceConfig = {
      key: 'id',
      getUrl: Endpoints.INSTRUMENTS_GET.replace('*', equipmentID.toString()),
      getOneUrl: Endpoints.INSTRUMENT_GET_ONE,
      updateUrl: Endpoints.INSTRUMENT_UPDATE,
      deleteUrl: Endpoints.INSTRUMENT_DELETE,
      postUrl: Endpoints.INSTRUMENT_ADD,
    };

    const data = this.datasources.create(config);
    const colDef = new InstrumentColumnDefinition(visibleColumns);
    // visibleColumns.forEach(x => colDef.findByDataField(x)?.updateOptions({ visible: true }));
    return { data, colDef };
  }

  public async getInstruments_Raw(equipmentID: number): Promise<Instrument[]> {
    let res: Nullable<HttpResponse<ApiResponse<Instrument>>>;

    try {
      res = await this.fetch.get<ApiResponse<Instrument>>(Endpoints.INSTRUMENTS_GET.replace('*', equipmentID.toString()))
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err);
      }
    }

    return res?.body?.data || [];
  }

  public async addInstrument(record: Instrument): Promise<Nullable<Instrument>> {
    let res: Nullable<HttpResponse<Instrument>>;

    try {
      res = await this.fetch.post<Instrument, Instrument>(Endpoints.INSTRUMENT_ADD, record);
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err);
      }
    }

    return res?.body;
  }

  public async editInstrument(record: Instrument): Promise<Nullable<Instrument>> {
    let res: Nullable<HttpResponse<Instrument>>;

    try {
      res = await this.fetch.put<Instrument, Instrument>(Endpoints.INSTRUMENT_UPDATE, record);
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err);
      }
    }

    return res?.body;
    // if (record && this.instrumentsTable) {
    //   const result = await this.instrumentsTable.update(record);
    //   if (result) {
    //     this.instrumentsTable.refresh();
    //     this.antero.closeModal();
    //   }
    // }
  }

  public async deleteInstrument(record: Instrument): Promise<boolean> {
    let res: Nullable<HttpResponse<any>>;
    const path = Endpoints.INSTRUMENT_DELETE.replace('*', record.id.toString());

    try {
      res = await this.fetch.delete<any>(path);
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err);
      }
    }

    return !!res;
    // if (record && this.instrumentsTable) {
    //   const result = await this.instrumentsTable.delete(record);
    //   if (result) {
    //     this.instrumentsTable.refresh();
    //     this.antero.closeModal();
    //   }
    // }
  }

  public async enterReadings(readings: Reading[]): Promise<boolean> {
    let res: Nullable<HttpResponse<Reading[]>>;

    try {
      res = await this.fetch.post<Reading[], Reading[]>(Endpoints.READINGS_ENTER, readings);
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err);
      }
    }

    return !!res?.body;
  }

  public getReadingsHistory(id: number, visibleCols: string[]): TableData {
    const path = Endpoints.READINGS_HISTORY.replace('*', id.toString())

    const config: DataSourceConfig = {
      key: 'id',
      getUrl: path,
      updateUrl: Endpoints.READING_UPDATE,
      deleteUrl: Endpoints.READING_DELETE
    };

    const data = this.datasources.create(config);
    const colDef = new ReadingColumnDefinition(visibleCols)
    return { data, colDef };
  }

  public async getReadingsHistory_Raw(record: Instrument): Promise<Reading[]> {
    let res: Nullable<HttpResponse<ApiResponse<Reading>>>;
    const path = Endpoints.READINGS_HISTORY.replace('*', record.id.toString())

    try {
      res = await this.fetch.get<ApiResponse<Reading>>(path);
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err);
      }
    }

    return res?.body?.data || [];
  }

  public async editReading(record: Reading): Promise<void> {
    console.log('edit reading', { reading: record, table: this.readingsTable })
    if (record && this.readingsTable) {
      const result = await this.fetch.put<Reading, Reading>(Endpoints.READING_UPDATE, record)
      if (result) {
        this.anteroStore.refresh = true;
        // this.instrumentsTable?.refresh();
        // this.readingsTable.refresh()
        this.antero.closeModal();
      }
    }
  }

  public async deleteReading(record: Reading): Promise<void> {
    if (record && this.readingsTable) {
      const result = await this.fetch.delete<any>(Endpoints.READING_DELETE.replace('*', record.id.toString()));
      if (result) {
        this.anteroStore.refresh = true;
        // this.instrumentsTable?.refresh();
        // this.readingsTable.refresh();
        this.antero.closeModal();
      }
    }
  }
// #endregion

// #region Parts
  public getParts(): TableData {
    const config: DataSourceConfig = {
      key: this.key,
      getUrl: Endpoints.PARTS_ALL,
      getOneUrl: Endpoints.PART_GET_ONE,
    };
    const data = this.datasources.create(config);
    const colDef = new PartColumnDefinition([ 'name' ])
    return { data, colDef };
  } 

  public async getEquipmentParts(equipmentID: number, visibleCols: string[]): Promise<TableData> {
    const config: DataSourceConfig = {
      key: this.key,
      getUrl: Endpoints.EQUIPMENT_PART_ALL.replace('*', equipmentID.toString()),
      postUrl: Endpoints.EQUIPMENT_PART_ADD,
      updateUrl: Endpoints.EQUIPMENT_PART_UPDATE,
      deleteUrl: Endpoints.EQUIPMENT_PART_DELETE,
      includeData: { navigationProperties: [ 'all' ] },
      errorHandler: (err: any) => {
        if (err instanceof HttpErrorResponse) {
          this.errors.handleError(err);
        }
      }
    };
    const colDef = new EquipmentPartColumnDefinition(visibleCols)
    const data = this.datasources.create(config);

    return { data, colDef };
  }

  public async getEquipmentParts_Raw(equipmentID: number): Promise<EquipmentPart[]> {
    let res: Nullable<HttpResponse<ApiResponse<EquipmentPart>>>;
    const path = Endpoints.EQUIPMENT_PART_ALL.replace('*', equipmentID.toString());
    const query = generateQueryStringFromObject({ includeData: 'all' });
    try {
      res = await this.fetch.get<ApiResponse<EquipmentPart>>(`${path}${query}`);
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err);
      }
    }

    return res?.body?.data || [];
  }

  public async addPart(record: EquipmentPart): Promise<void> {
    console.log('add part', record)
    if (record) {
      const result = await this.fetch.post<EquipmentPart, EquipmentPart>(Endpoints.EQUIPMENT_PART_ADD, record)
      if (result) {
        this.anteroStore.refresh = true;
        this.antero.closeModal();
      }
    }
  }

  public async updatePart(record: EquipmentPart): Promise<boolean> {
    // console.log('part', record)
    // if (record) {
    //   const result = await this.fetch.put<EquipmentPart, EquipmentPart>(Endpoints.EQUIPMENT_PART_UPDATE, record)
    //   if (result) {
    //     this.anteroStore.refresh = true;
    //     this.antero.closeModal();
    //   }
    // }
    let res: Nullable<HttpResponse<EquipmentPart>>;
    const path = Endpoints.EQUIPMENT_PART_UPDATE;
    try {
      res = await this.fetch.put<EquipmentPart, EquipmentPart>(path, record);
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err);
      }
    } 
    return !!res?.body;
  }

  public async deletePart(record: PartData): Promise<void> {
    if (record) {
      const result = await this.fetch.delete<any>(Endpoints.EQUIPMENT_PART_DELETE.replace('*', record.id.toString()));
      if (result) {
        this.anteroStore.refresh = true;
        this.antero.closeModal();
      }
    }
  }

  public async getStockLocations(record: EquipmentPart): Promise<Nullable<TableData>> {
    if (!record) { return null; }
    const config: DataSourceConfig = {
      key: 'id',
      getUrl: Endpoints.STOCK_LOCATIONS.replace('*', record.partID.toString()),
      includeData: { navigationProperties: [ 'all' ] }
    }

    const data = this.datasources.create(config);
    const colDef = new PartQuantityColumnDefinition([ 'warehouse.name', 'area.name', 'currentQuantity' ])

    return { data, colDef };
  }

  public async getPartsData(equipmentID: number): Promise<any> {
    let res: Nullable<HttpResponse<any>>;
    const path = Endpoints.GET_PARTS_DATA.replace('*', equipmentID.toString());

    try {
      res = await this.fetch.get<any>(path);
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err);
      }
    }
    console.log(res?.body?.data);
    return res?.body?.data;
  }
// #endregion

// #region Templates
public async getTemplates(equipmentID: number, raw: boolean = false): Promise<TableData | WorkTemplate[]> {
  if (!raw) {
    const config: DataSourceConfig = {
      key: this.key,
      getUrl: Endpoints.TEMPLATES_GET.replace('*', equipmentID.toString()),
      includeData: { navigationProperties: [ 'all' ] }
    };
  
    const data = this.datasources.create(config);
    const colDef = new WorkTemplateColumnDefinition([
      'task.name',
      'workScheduleType',
      'dateLastScheduled',
      'dateLastCompleted'
    ]);
  
    return { data, colDef };
  } else {
    let res: Nullable<HttpResponse<ApiResponse<WorkTemplate>>>;
    const path = Endpoints.TEMPLATES_GET.replace('*', equipmentID.toString());
    const query = generateQueryStringFromObject({ includeDate: 'all' });
    try {
      res = await this.fetch.get(`${path}${query}`);
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err);
      }
    }

    return res?.body?.data || [];
  }
  
}
// #endregion

// #region Active Work
public async getActiveWorkOrders(equipmentID: number, visibleCols: string[], raw: boolean = false): Promise<TableData | WorkOrder[]> {
  if (!raw) {
    const config: DataSourceConfig = {
      key: this.key,
      getUrl: Endpoints.WORK_ORDERS_GET.replace('*', equipmentID.toString()),
      includeData: { navigationProperties: [ 'all' ]}
    };
  
    const data = this.datasources.create(config);
    const colDef = new WorkOrderColumnDefinition(visibleCols)
    return { data, colDef };
  } else {
    let res: Nullable<HttpResponse<ApiResponse<WorkOrder>>>;
    const path = Endpoints.WORK_ORDERS_GET.replace('*', equipmentID.toString());
    const query = generateQueryStringFromObject({ includeData: 'all' })
    try {
      res = await this.fetch.get<ApiResponse<WorkOrder>>(`${path}${query}`);
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err);
      }
    }
    return res?.body?.data || [];
  } 
}
// #endregion

// #region Active Procedures
public getProcedures(equipmentID: number): TableData {
  const config: DataSourceConfig = {
    key: this.key,
    getUrl: Endpoints.PROCEDURES_GET.replace('*', equipmentID.toString()),
    includeData: { navigationProperties: [ 'all' ]}
  };

  const data = this.datasources.create(config);
  const colDef = new ProcedureColumnDefinition([
    'isDelinquent',
    'procedureNumber',
    'name',
    'maintenanceGroup.name',
    'dateScheduled'
  ])

  return { data, colDef };
}
// #endregion

// #region Work History
public async getWorkHistory(equipmentID: number, visibleCols: string[], timeFrame: [ Nullable<Date>, Nullable<Date>] , raw: boolean = false): Promise<TableData | WorkHistory[]> {
  if (!raw) {
    const config: DataSourceConfig = {
      key: this.key,
      getUrl: Endpoints.WORK_HISTORY_GET.replace('*', equipmentID.toString()),
      includeData: { navigationProperties: [ 'all' ]},
      dateStart: timeFrame[0] ? timeFrame[0] : null,
      dateEnd: timeFrame[1] ? timeFrame[1] : null,
    };
    const data = this.datasources.create(config);
    const colDef = new WorkHistoryColumnDefinition(visibleCols);
    return { data, colDef };
  } else {
    let res: Nullable<HttpResponse<ApiResponse<WorkHistory>>>;
    const path = Endpoints.WORK_HISTORY_GET.replace('*', equipmentID.toString());
    const query = generateQueryStringFromObject({ includeData: 'all', take: 30 })
    try {
      res = await this.fetch.get<ApiResponse<WorkHistory>>(`${path}${query}`);
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err);
      } 
    }
    return res?.body?.data || [];
  }
}

public getHistory(equipmentID: number, visibleCols: string[]): TableData {
  const config: DataSourceConfig = {
    key: this.key,
    getUrl: Endpoints.WORK_HISTORY_GET.replace('*', equipmentID.toString()),
    includeData: { navigationProperties: [ 'all' ]}
  };
  const data = this.datasources.create(config);
  const colDef = new WorkHistoryColumnDefinition(visibleCols);
  return { data, colDef };
}
// #endregion

// #region Procedure History
public getProcedureHistory(equipmentID: number, timeParams: TimeFrameParams): TableData {
  const { timeFrameType, historyTimeFrame, dateStart, dateEnd } = timeParams;
  const config: DataSourceConfig = {
    key: this.key,
    getUrl: Endpoints.PROCEDURE_HISTORY_GET.replace('*', equipmentID.toString()),
    includeData: { navigationProperties: [ 'all' ]},
    timeFrame: timeFrameType,
    historyTimeFrame: historyTimeFrame ? historyTimeFrame : undefined,
    dateStart: dateStart ? dateStart : undefined,
    dateEnd: dateEnd ? dateEnd : undefined
  }

  const data = this.datasources.create(config);
  const colDef = new ProcedureColumnDefinition([
    'procedureNumber',
    'name',
    'dateCompleted',
    'maintenanceGroup.name'
  ])

  return { data, colDef };
}
// #endregion

// #region Documents
public async getDocuments(equipmentID: number): Promise<TableData> {
  const config: DataSourceConfig = {
    key: this.key,
    getUrl: Endpoints.DOCUMENT_ALL.replace('*', equipmentID.toString()),
    updateUrl: Endpoints.DOCUMENT_RENAME,
    deleteUrl: Endpoints.DOCUMENT_DELETE,
    includeData: { navigationProperties: [ 'all' ] }
  }
  const data = this.datasources.create(config);
  const colDef = new EquipmentDocumentColumnDefinition([
    'document.name',
    'document.extension',
    'document.fileType',
    'document.modifiedBy',
    'document.dateModified'
  ]);
  return { data, colDef };
}

public async getDocuments_Raw(equipmentID: number): Promise<EquipmentDocument[]> {
  let res: Nullable<HttpResponse<ApiResponse<EquipmentDocument>>>;
  const path = Endpoints.DOCUMENT_ALL.replace('*', equipmentID.toString());
  const query = generateQueryStringFromObject({ includeData: 'all' });
  try {
    res = await this.fetch.get<ApiResponse<EquipmentDocument>>(`${path}${query}`);
  } catch (err) {
    if (err instanceof HttpErrorResponse) {
      this.errors.handleError(err);
    }
  }
  return res?.body?.data || [];
}

public async addDocuments(equipmentID: number, files: File[]): Promise<boolean> {
  let res: Nullable<HttpResponse<any>>;
    
  const formData = new FormData();
  for (const f of files) {
    formData.append(f.name, f, f.name);
  }

  this.fetch.preUpload();
  
  try {
    res = await this.fetch.post<FormData, any[]>(Endpoints.DOCUMENT_ADD.replace('*', equipmentID.toString()), formData);
  } catch (err) {
    if (err instanceof HttpErrorResponse) {
      this.errors.handleError(err);
    }
  } finally {
    this.fetch.postUpload();
  }
  
  return !!res;
}

public async renameDocument(equipmentDocumentID: number, displayName: string): Promise<void> {
  let res: Nullable<HttpResponse<EquipmentDocument>>;

  const endpoint = Endpoints.DOCUMENT_RENAME.replace('*', equipmentDocumentID.toString());
  const query = generateQueryStringFromObject({ includeData: 'all' })
  const path = `${endpoint}${query}`;

  try {
    res = await this.fetch.put<string, EquipmentDocument>(path, JSON.stringify(displayName));
  } catch (err) {
    if (err instanceof HttpErrorResponse) {
      this.errors.handleError(err);
    }
  }

  if (res?.body) {
    this.anteroStore.refresh = true;
    this.equipmentStore.selectedDocuments = [ res.body ];
    this.antero.closeModal();
  }
}

public async deleteDocument(record: EquipmentDocument): Promise<void> {
  if (record && this.documentsTable) {
    const result = await this.documentsTable.delete(record);
    if (result) {
      this.documentsTable.refresh();
      this.antero.closeModal()
    }
  }
}

public async deleteDocuments(ids: number[]): Promise<boolean> {
  if (ids.length > 0) {
    let res: Nullable<HttpResponse<any>>;

    try {
      res = await this.fetch.post<number[], any>(Endpoints.DOCUMENTS_DELETE, ids);
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err);
      }
    }

    return !!res;
  }
  return false;
}

public async downloadDocument(record: Document): Promise<void> {
  if (!record) { return; }
  const path = Endpoints.DOCUMENT_DOWNLOAD.replace('*', record?.id.toString());
  const blob = await this.fetch.getAsBlob(path);
  downloadDocument(record, blob)
  // if (blob) {
  //   const data = URL.createObjectURL(blob);
  //   const link = document.createElement('a');
  //   link.href = data;
  //   link.download = record.name || 'download';
  //   link.target = '_blank'
  //   // this is necessary as link.click() does not work on Firefox
  //   link.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));
  //   setTimeout(() => {
  //     URL.revokeObjectURL(data);
  //     link.remove();
  //   }, 100);
  // }
}
// #endregion

// #region Suppliers
public async getSuppliers(): Promise<Supplier[]> {
  let res: Nullable<HttpResponse<ApiResponse<Supplier>>>;

  try {
    res = await this.fetch.get<ApiResponse<Supplier>>(Endpoints.SUPPLIERS_GET);
  } catch (err) {
    if (err instanceof HttpErrorResponse) {
      this.errors.handleError(err, Endpoints.SUPPLIERS_GET);
    }
  }

  return res?.body?.data || [];
}

public async addSupplier(name: string): Promise<Nullable<Supplier>> {
  let res: Nullable<HttpResponse<Supplier>>;

  try {
    res = await this.fetch.post<{ name: string }, Supplier>(Endpoints.SUPPLIER_ADD, { name })
  } catch (err) {
    if (err instanceof HttpErrorResponse) {
      this.errors.handleError(err);
    }
  }

  return res?.body;
}
// #endregion

// #region Custom Fields
  public async getCustomFieldLabels(): Promise<Nullable<CustomFieldNames>> {
    let res: Nullable<HttpResponse<ApiResponse<CustomFieldNames>>>;

    try {
      res = await this.fetch.get<ApiResponse<CustomFieldNames>>(Endpoints.CUSTOM_FIELD_NAMES_GET)
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err, Endpoints.CUSTOM_FIELD_NAMES_GET);
      }
    }    
    return res?.body?.data[0] || null;
  }
// #endregion

// #region Images
  public async getImagesData(id: number): Promise<ImageData[]> {
    let res: Nullable<HttpResponse<ImageData[]>>;
    const array = [];

    try {
      res = await this.fetch.get<any[]>(Endpoints.IMAGES_ALL.replace('*', id.toString()));
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err);
      }
    }
    
    return res?.body || [];
  }

  public async hydrateImage(data: ImageData): Promise<Nullable<ImageData>> {
    if (data) {
        const t = await this.fetch.getAsBlob(Endpoints.IMAGE_THUMBNAIL_GET_ONE.replace('*', data.imageID.toString()));
        const i = await this.fetch.getAsBlob(Endpoints.IMAGE_GET_ONE.replace('*', data.imageID.toString()));

        if (t) {
          data.thumbnailUrl = URL.createObjectURL(t);
        } else {
          data.thumbnailUrl = null;
        }
        
        if (i) {
          data.imageUrl = URL.createObjectURL(i);
        } else {
          data.imageUrl = null;
        }
        data.hydrated = true;
        return data;
    }
    return null;
  }

  public async addImages(id: number, files: File[]): Promise<boolean> {
    let res: Nullable<HttpResponse<any>>;
    
    const formData = new FormData();
    for (const f of files) {
      formData.append(f.name, f, f.name);
    }

    this.fetch.preUpload();
    
    try {
      res = await this.fetch.post<FormData, any[]>(Endpoints.IMAGES_ADD.replace('*', id.toString()), formData);
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err);
      }
    } finally {
      this.fetch.postUpload();
    }
    
    return res?.body;
  }

  public async deleteImage(equipmentImageID: number): Promise<boolean> {
    if (equipmentImageID > 0) {
      let res: Nullable<HttpResponse<any>>;

      try {
        res = await this.fetch.delete(Endpoints.IMAGE_DELETE.replace('*', equipmentImageID.toString()))
      } catch (err) {
        if (err instanceof HttpErrorResponse) {
          this.errors.handleError(err);
        }
      }

      return !!res;
    }
    return false;
  }

  public async setPrimaryImage(equipmentImageID: number): Promise<boolean> {
    if (equipmentImageID > 0) {
      let res: Nullable<HttpResponse<any>>;

      try {
        res = await this.fetch.post<any, any>(Endpoints.SET_PRIMARY_IMAGE.replace('*', equipmentImageID.toString()), null);
      } catch (err) {
        if (err instanceof HttpErrorResponse) {
          this.errors.handleError(err);
        }
      }

      return !!res?.body;
    }
    return false;
  }
  
  public async getPrimaryImage(equipmentID: number): Promise<Nullable<ImageData>> {
    let res: Nullable<HttpResponse<ImageData>>
    
    try {
      res = await this.fetch.get<ImageData>(Endpoints.GET_PRIMARY_IMAGE.replace('*', equipmentID.toString()));
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err);
      }
    }
    
    return res?.body ? this.hydrateImage(res.body) : null;
  }

  public async addPrimaryImage(equipmentID: number, file: File): Promise<any> {
    let res: Nullable<HttpResponse<any>>;
    
    const formData = new FormData();
    formData.append(file.name, file, file.name);
    
    this.fetch.preUpload();
    
    try {
      res = await this.fetch.post<FormData, any>(Endpoints.ADD_PRIMARY_IMAGE.replace('*', equipmentID.toString()), formData);
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err);
      }
    } finally {
      this.fetch.postUpload();
    }
    
    return res?.body;
  }

  public async reorderImages(records: EquipmentImage[]): Promise<ImageData[]> {
    let res: Nullable<HttpResponse<ImageData[]>>;

    try {
       res = await this.fetch.post<EquipmentImage[], ImageData[]>(Endpoints.IMAGES_REORDER, records);
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err);
      }
    }

    return res?.body || [];
  }
 // #endregion

// #region Mapping
public async setMapLocation(equipmentID: number, point: GeoPoint): Promise<boolean> {
  let res: Nullable<HttpResponse<any>>;
  const path = Endpoints.EQUIPMENT_UPDATE_LATLONG.replace('*', equipmentID.toString());

  try {
    res = await this.fetch.put<any, any>(path, point);
  } catch (err) {
    if (err instanceof HttpErrorResponse) {
      this.errors.handleError(err);
    }
  }

  return !!res?.body;
}

public async clearMapLocation(equipmentID: number): Promise<boolean> {
  let res: Nullable<HttpResponse<any>>;
  const path = Endpoints.EQUIPMENT_CLEAR_LATLONG.replace('*', equipmentID.toString());

  try {
    res = await this.fetch.put<any, any>(path, null);
  } catch (err) {
    if (err instanceof HttpErrorResponse) {
      this.errors.handleError(err);
    }
  }

  return !!res;
}
// #endregion

// #region In Service Status
public getInserviceHistory(equipmentID: number, visibleCols: string[]): TableData {
  const endpoint = Endpoints.IN_SERVICE_HISTORY.replace('*', equipmentID.toString());
  const query = generateQueryStringFromObject({ includedata: 'equipment' })
  const config: DataSourceConfig = {
    key: 'id',
    getUrl: `${ endpoint }${ query }`,
    updateUrl: Endpoints.IN_SERVICE_HISTORY
  };

  const data = this.datasources.create(config);
  const colDef = new EquipmentInServiceHistoryColumnDefinition(visibleCols);

  return { data, colDef };
}

public async updateInServiceHistory(record: EquipmentInServiceHistory): Promise<boolean> {
  let res: Nullable<HttpResponse<EquipmentInServiceHistory>>;
  const path = Endpoints.IN_SERVICE_HISTORY_UPDATE;
  
  try {
    res = await this.fetch.put<EquipmentInServiceHistory, EquipmentInServiceHistory>(path, record);
  } catch (err) {
    if (err instanceof HttpErrorResponse) {
      this.errors.handleError(err);
    }
  }
  return !!res?.body;
}

public async toggleInServiceStatus(record: EquipmentInServiceHistory): Promise<Nullable<EquipmentInServiceHistory>> {
  if (record) {
    let res: Nullable<HttpResponse<EquipmentInServiceHistory>>;

    const query = generateQueryStringFromObject({ includedata: 'all' });
    const path = `${ Endpoints.IN_SERVICE_TOGGLE }${ query }`

    try {
      res = await this.fetch.post<EquipmentInServiceHistory, EquipmentInServiceHistory>(path, record);
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err);
      }
    }

    return res?.body;
  }
  return null;
}
// #endregion

  public async getEquipmentListsData(): Promise<any> {
    let res: Nullable<HttpResponse<any>>;

    try {
      res = await this.fetch.get<any>(Endpoints.EQUIPMENT_LISTS);
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err);
      }  
    }
    
    return res?.body;
  }

  // #region Activity
  public async getActivity(id: number, visibleCols: string[]): Promise<TableData> {
    const config: DataSourceConfig = {
      key: this.key,
      getUrl: Endpoints.EQUIPMENT_GET_ACTIVITY.replace('*', id.toString()),
      take: 10,
      errorHandler: (err: any) => {
        if (err instanceof HttpErrorResponse) {
          this.errors.handleError(err);
        }
      }
    };

    const data = this.datasources.create(config);
    const initialColDef = new EquipmentActivityColumnDefinition();

    visibleCols.forEach(x => initialColDef.findByDataField(x)?.updateOptions({ visible: true }));
    return { data, colDef: initialColDef };
  }
  // #endregion
}