import { ErrorService } from "@allmax-angular/antero-web/services/error";
import { LayoutService, TableLayouts } from "@allmax-angular/antero-web/services/layout";
// import { PartsSectionStore } from "@allmax-angular/antero-web/state-management/parts-section-store";
import { DataSourceConfiguratorService, FetchService } from "@allmax-angular/shared/services";
import { DataSourceConfig, ExcludeExpression, Nullable, TableData } from "@allmax-angular/shared/types";
import { Injectable } from "@angular/core";
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Subscription } from "rxjs";
import { EquipmentPartColumnDefinition, PartAuditColumnDefinition, PartColumnDefinition, PartQuantityColumnDefinition, PartTransferColumnDefinition, PurchaseOrderPartColumnDefinition, SupplierPartColumnDefinition, WorkHistoryPartColumnDefinition } from "@allmax-angular/antero-web/column-definitions";
import { Area, EquipmentType, Part, PartImage, PartQuantity, ProductGroup, ProductType, Warehouse } from "@allmax-angular/antero-web/entities";
import { generateQueryStringFromObject } from "@allmax-angular/shared/utils";
import { ApiResponse } from "@allmax-angular/antero-web/types";
import { ImageService } from '@allmax-angular/antero-web/services/image-service';
import { ImageData } from '@allmax-angular/antero-web/types'

enum Endpoints {
  GET = '/part/all',
  GET_ONE = '/part/*',
  GET_STOCK_LOCATIONS = '/part/quantity/all',
  GET_STOCK_LOCATIONS_BY_ID = '/part/*/quantity/all',
  ADD_STOCK_LOCATION = '/part/quantity/add',
  GET_PRIMARY_IMAGE = '/part/*/primaryimage',
  GET_SUPPLIERS = '/part/*/supplier/all',
  GET_EQUIPMENT = '/part/*/equipment/all',
  GET_PRODUCT_TYPES = '/product/type/all',
  GET_PRODUCT_GROUPS = '/product/group/all',
  GET_EQUIPMENT_TYPES = '/equipment/type/all',
  GET_WAREHOUSES = '/warehouse/all',
  GET_AREAS_BY_WAREHOUSE = '/warehouse/*/area/all',
  GET_PO_PARTS_BY_PART_QUANTITY = '/purchaseorder/part/byquantity/*',
  GET_WO_ALLOCATION_BY_PART_QUANTITY = '/workorderviewer/usage/bypartquantity/*',
  GET_ORDER_HISTORY = '/part/*/orderhistory',
  GET_TRANSFER_HISTORY = '/part/*/transfer/all',
  GET_WORK_HISTORY = '/part/*/workhistory/recent',
  IMAGES_ALL = '/part/*/image/all',
  IMAGE_THUMBNAIL_GET_ONE = '/image/*/thumbnail',
  IMAGE_GET_ONE = '/image/*',
  IMAGES_ADD = '/part/*/image/add/multiple',
  IMAGE_DELETE = '/part/*/image/delete/multiple',
  SET_PRIMARY_IMAGE = '/part/image/*/primary/update',
  IMAGES_REORDER = '/part/image/reorder',
  AUDIT_ALL = '/part/*/audit/all'
}

@Injectable({ providedIn: 'root' })
export class PartsControllerService {
  private readonly key = 'id';
  private subs: Subscription[] = [];

  constructor(
    private datasources: DataSourceConfiguratorService,
    // private store: PartsSectionStore,
    private errors: ErrorService,
    private fetch: FetchService,
    private layouts: LayoutService,
    private imageService: ImageService
  ) { }

  public initialize(): void { console.log('parts controller init'); }
  public finalize(): void { console.log('parts controller finalize'); }

  public async get(visibleCols: string[], exclude: Nullable<ExcludeExpression> = null): Promise<Nullable<TableData>> {
    let config: Nullable<DataSourceConfig>;
    if (exclude) {
      config = {
        key: this.key,
        getUrl: Endpoints.GET,
        getOneUrl: Endpoints.GET_ONE,
        excludeData: exclude,
        includeData: { navigationProperties: [ 'all' ] },
        errorHandler: (err: any) => {
          if (err instanceof HttpErrorResponse) {
            this.errors.handleError(err);
          }
        }
      }
    } else {
      config = {
        key: this.key,
        getUrl: Endpoints.GET,
        getOneUrl: Endpoints.GET_ONE,
        includeData: { navigationProperties: [ 'all' ] },
        errorHandler: (err: any) => {
          if (err instanceof HttpErrorResponse) {
            this.errors.handleError(err);
          }
        }
      }
    }

    if (config) {
      const data = this.datasources.create(config);
      const initialColDef = new PartColumnDefinition(visibleCols);

      if (visibleCols.length < 1) {
        const colDef = await this.layouts.applyLayoutTo<PartColumnDefinition>({ layout: TableLayouts.PART_GRID, forceLayout: false }, initialColDef);
        return { data, colDef };
      } else {
        visibleCols.forEach(x => initialColDef.findByDataField(x)?.updateOptions({ visible: true }));
        return { data, colDef: initialColDef };
      }
    }

    return null;
  }

  public async get_Raw(): Promise<Part[]> {
    let res: Nullable<HttpResponse<ApiResponse<Part>>>;
    const path = Endpoints.GET;

    try {
      res = await this.fetch.get<ApiResponse<Part>>(path)
    } catch(err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err);
      }
    }
    return res?.body?.data || [];
  }

  public async getByID(id: number): Promise<Nullable<Part>> {
    let res: Nullable<HttpResponse<Part>>;
    const path = Endpoints.GET_ONE.replace('*', id.toString());
    const query = generateQueryStringFromObject({ includeData: 'all' })
    try {
      res = await this.fetch.get<Part>(`${ path }${ query }`);
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err);
      }
    }

    return res?.body;
  }

  public async getPrimaryImage(partID: number): Promise<Nullable<ImageData>> {
    let res: Nullable<HttpResponse<ImageData>>
    
    try {
      res = await this.fetch.get<ImageData>(Endpoints.GET_PRIMARY_IMAGE.replace('*', partID.toString()));
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err);
      }
    }

    if (res?.body) {
      const result = await this.imageService.hydrateImage(res.body);
      return result;
    }

    return null;
  }

  public async getStockLocationsByID(record: Part, visibleCols: string[]): Promise<TableData> {
    const config: DataSourceConfig = {
      key: 'id',
      getUrl: Endpoints.GET_STOCK_LOCATIONS_BY_ID.replace('*', record.id.toString()),
      includeData: { navigationProperties: [ 'all' ]}
    };

    const data = this.datasources.create(config)
    const colDef = new PartQuantityColumnDefinition(visibleCols);
    return { data, colDef };
  }

  public async getStockLocationsByID_Raw(partID: number): Promise<PartQuantity[]> {
    let res: Nullable<HttpResponse<ApiResponse<PartQuantity>>>;
    const path = Endpoints.GET_STOCK_LOCATIONS_BY_ID.replace('*', partID.toString());
    const query = generateQueryStringFromObject({ includedata: 'all' })

    try {
      res = await this.fetch.get<ApiResponse<PartQuantity>>(`${ path }${ query }`);
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err);
      }
    }

    return res?.body?.data || [];
  }

  public async getStockLocations(): Promise<TableData> {
    const config: DataSourceConfig = {
      key: 'id',
      getUrl: Endpoints.GET_STOCK_LOCATIONS,
      includeData: { navigationProperties: [ 'all' ]}
    };

    const cols = [
      'part.name',
      'part.description',
      'warehouse.name',
      'area.name',
      'currentQuantity',
      'part.stockingUnit'
    ];

    const data = this.datasources.create(config)
    const colDef = new PartQuantityColumnDefinition(cols);
    return { data, colDef };
  }

  public async getStockLocations_Raw(): Promise<PartQuantity[]> {
    let res: Nullable<HttpResponse<ApiResponse<PartQuantity>>>;
    const path = Endpoints.GET_STOCK_LOCATIONS;

    try {
      res = await this.fetch.get<ApiResponse<PartQuantity>>(path);
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err);
      }
    }

    return res?.body?.data || [];
  }

  public async addStockLocation(record: PartQuantity): Promise<boolean> {
    let res: Nullable<HttpResponse<PartQuantity>>;

    try {
      res = await this.fetch.post<PartQuantity, PartQuantity>(Endpoints.ADD_STOCK_LOCATION, record)
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err);
      }
    }

    return !!res?.body;
  }
  
  public async getSupplierParts(record: Part, visibleCols: string[]): Promise<TableData> {
    const config: DataSourceConfig = {
      key: 'id',
      getUrl: Endpoints.GET_SUPPLIERS.replace('*', record.id.toString()),
      includeData: { navigationProperties: [ 'all' ]}
    }

    const data = this.datasources.create(config);
    const colDef = new SupplierPartColumnDefinition(visibleCols);

    return { data, colDef };
  }

  public async getEquipmentParts(record: Part, visibleCols: string[]): Promise<TableData> {
    const config: DataSourceConfig = {
      key: 'id',
      getUrl: Endpoints.GET_EQUIPMENT.replace('*', record.id.toString()),
      includeData: { navigationProperties: [ 'all,equipment.department,equipment.location' ]}
    }

    const data = this.datasources.create(config);
    const colDef = new EquipmentPartColumnDefinition(visibleCols);

    return { data, colDef };
  }

  public async getProductTypes(): Promise<ProductType[]> {
    let res: Nullable<HttpResponse<ApiResponse<ProductType>>>;

    try { 
      res = await this.fetch.get<ApiResponse<ProductType>>(Endpoints.GET_PRODUCT_TYPES);
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err);
      }
    }

    return res?.body?.data || [];
  }

  public async getProductGroups(): Promise<ProductGroup[]> {
    let res: Nullable<HttpResponse<ApiResponse<ProductGroup>>>;

    try { 
      res = await this.fetch.get<ApiResponse<ProductGroup>>(Endpoints.GET_PRODUCT_GROUPS);
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err);
      }
    }

    return res?.body?.data || [];
  }

  public async getEquipmentTypes(): Promise<EquipmentType[]> {
    let res: Nullable<HttpResponse<ApiResponse<EquipmentType>>>;

    try { 
      res = await this.fetch.get<ApiResponse<EquipmentType>>(Endpoints.GET_EQUIPMENT_TYPES);
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err);
      }
    }

    return res?.body?.data || [];
  }

  public async getWarehouses(): Promise<Warehouse[]> {
    let res: Nullable<HttpResponse<ApiResponse<Warehouse>>>;

    try {
      res = await this.fetch.get<ApiResponse<Warehouse>>(Endpoints.GET_WAREHOUSES);
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err);
      }
    }

    return res?.body?.data || [];
  }

  public async getAreasByWarehouse(id: number): Promise<Area[]> {
    let res: Nullable<HttpResponse<ApiResponse<Area>>>;
    const path = Endpoints.GET_AREAS_BY_WAREHOUSE.replace('*', id.toString());

    try {
      res = await this.fetch.get<ApiResponse<Area>>(path);
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err);
      }
    }

    return res?.body?.data || [];
  }

  public async getPOPartsByPartQuantity(id: number): Promise<any[]> {
    let res: Nullable<HttpResponse<any>>;
    const path = Endpoints.GET_PO_PARTS_BY_PART_QUANTITY.replace('*', id.toString());
    const query = generateQueryStringFromObject({ includeData: 'partQuantity.part,purchaseOrder.supplier' });

    try {
      res = await this.fetch.get<any>(`${ path }${ query }`);
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err);
      } 
    }

    return res?.body || [];
  }

  public async getWOAllocationByPartQuantity(id: number): Promise<any> {
    let res: Nullable<HttpResponse<any>>;
    const path = Endpoints.GET_WO_ALLOCATION_BY_PART_QUANTITY.replace('*', id.toString());

    try {
      res = await this.fetch.get<any>(path);
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err);
      }
    }

    return res?.body || [];
  }
  
  public async getOrderHistoryByID(id: number, visibleCols: string[]): Promise<any> {
    const config: DataSourceConfig = {
      key: 'id',
      getUrl: Endpoints.GET_ORDER_HISTORY.replace('*', id.toString()),
      includeData: { navigationProperties: [ 'all,purchaseOrder.supplier' ]}
    };

    const data = this.datasources.create(config)
    const colDef = new PurchaseOrderPartColumnDefinition(visibleCols);
    return { data, colDef };
  }

  public async getTransferHistoryByID(id: number, visibleCols: string[]): Promise<any> {
    const config: DataSourceConfig = {
      key: 'id',
      getUrl: Endpoints.GET_TRANSFER_HISTORY.replace('*', id.toString()),
      includeData: { navigationProperties: [ 'all' ]}
    };

    const data = this.datasources.create(config)
    const colDef = new PartTransferColumnDefinition(visibleCols);
    return { data, colDef };
  }

  public async getWorkHistoryByID(id: number, visibleCols: string[]): Promise<any> {
    const config: DataSourceConfig = {
      key: 'id',
      getUrl: Endpoints.GET_WORK_HISTORY.replace('*', id.toString()),
      includeData: { navigationProperties: [ 'all,workHistory.equipment' ]}
    };

    const data = this.datasources.create(config)
    const colDef = new WorkHistoryPartColumnDefinition(visibleCols);
    return { data, colDef };
  }

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
  
  public async deleteImage(img: PartImage): Promise<boolean> {
    let res: Nullable<HttpResponse<any>>;

    try {
      res = await this.fetch.post(Endpoints.IMAGE_DELETE.replace('*', img.partID.toString()), [ img.imageID ])
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err);
      }
    }

    return !!res;
  }
  
  public async setPrimaryImage(id: number): Promise<boolean> {
    if (id > 0) {
      let res: Nullable<HttpResponse<any>>;

      try {
        res = await this.fetch.post<any, any>(Endpoints.SET_PRIMARY_IMAGE.replace('*', id.toString()), null);
      } catch (err) {
        if (err instanceof HttpErrorResponse) {
          this.errors.handleError(err);
        }
      }

      return !!res?.body;
    }
    return false;
  }

  public async reorderImages(records: PartImage[]): Promise<ImageData[]> {
    let res: Nullable<HttpResponse<ImageData[]>>;

    try {
       res = await this.fetch.post<PartImage[], ImageData[]>(Endpoints.IMAGES_REORDER, records);
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err);
      }
    }

    return res?.body || [];
  }

  public async getAudit(id: number, visibleCols: string[]): Promise<TableData> {
    const config: DataSourceConfig = {
      key: 'id',
      getUrl: Endpoints.AUDIT_ALL.replace('*', id.toString()),
      includeData: { navigationProperties: [ 'all' ]}
    };

    const data = this.datasources.create(config)
    const colDef = new PartAuditColumnDefinition(visibleCols);
    return { data, colDef };
  }
}