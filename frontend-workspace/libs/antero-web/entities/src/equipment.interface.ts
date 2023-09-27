import { Nullable } from "@allmax-angular/shared/types";
import { Category } from "./category.interface";
import { CriticalityRanking } from "./criticality-ranking.interface";
import { Department } from "./department.interface";
import { EquipmentCondition } from "./equipment-condition.interface";
import { EquipmentPriority } from "./equipment-priority.interface";
import { EquipmentType } from "./equipment-type.interface";
import { Group } from "./group.interface";
import { Location } from "./location.interface";
import { SubLocation } from "./sub-location.interface";
import { Supplier } from "./supplier.interface";
import { WorkOrder } from "./work-order.interface";

export interface Equipment {
  [key: string]: 
  number | Nullable<string> | Nullable<Department> | boolean | Nullable<EquipmentCondition> |
  Nullable<Location> | Nullable<SubLocation> | Nullable<Supplier> | Nullable<EquipmentType> |
  Nullable<EquipmentPriority> | Nullable<Group> | Nullable<Category> | Nullable<Date> |
  Nullable<CriticalityRanking> | WorkOrder[] | any;
  id: number;
  
  // Required / MaxLength(50)
  name: Nullable<string>;

  // MaxLength(50)
  description?: Nullable<string>;

  departmentID?: number;
  department?: Nullable<Department>;
  retired?: boolean;
  inServiceStatus?: boolean;
  equipmentConditionID?: number;
  equipmentCondition?: Nullable<EquipmentCondition>;
  locationID?: number;
  location?: Nullable<Location>;
  subLocationID?: number;
  subLocation?: Nullable<SubLocation>;
  latitude?: number;
  longitude?: number;
  mapImageID?: number;
  mapZoomLevel?: number;
  vendorID?: number;
  vendor?: Nullable<Supplier>;
  manufacturerID?: number;
  manufacturer?: Nullable<Supplier>;
  equipmentTypeID?: number;
  equipmentType?: Nullable<EquipmentType>;
  equipmentPriorityID?: number;
  equipmentPriority?: Nullable<EquipmentPriority>;
  groupID?: number;
  group?: Nullable<Group>;
  categoryID?: number;
  category?: Nullable<Category>;

  // MaxLength(50)
  modelNumber?: Nullable<string>;
  
  // MaxLength(50)
  serialNumber?: Nullable<string>;
  
  // MaxLength(50)
  assetNumber?: Nullable<string>;
  
  datePurchased?: Nullable<Date>;

  // Precision(14, 2)
  purchasePrice?: Nullable<number>;

  // Precision(14, 2)
  salvageValue?: Nullable<number>;
  

  dateInService?: Nullable<Date>;
  warrantyDays?: Nullable<number>;
  warrantyMeter?: Nullable<number>;

  // Precision(14, 2)
  lifeExpectancy?: Nullable<number>;

  // MaxLength(4000)
  notes?: Nullable<string>;

  // Precision(14, 2)
  workOrderRate?: Nullable<number>;

  // MaxLength(25)
  workOrderUnits?: Nullable<string>;
  
  primaryImageID?: number;

  primaryImage?: Nullable<any>;

  // Precision(14, 2)
  probabilityOfFailure?: Nullable<number>;
  
  // Precision(14, 2)
  consequenceOfFailure?: Nullable<number>;
  
  criticalityRankingID?: number;
  criticalityRanking?: Nullable<CriticalityRanking>;
  
  // MaxLength(255)
  custom01?: Nullable<string>;
  
  // MaxLength(255)
  custom02?: Nullable<string>;
  
  // MaxLength(255)
  custom03?: Nullable<string>;
  
  // MaxLength(255)
  custom04?: Nullable<string>;
  
  // MaxLength(255)
  custom05?: Nullable<string>;
  
  // MaxLength(255)
  custom06?: Nullable<string>;
  
  // MaxLength(255)
  custom07?: Nullable<string>;
  
  // MaxLength(255)
  custom08?: Nullable<string>;
  
  // MaxLength(255)
  custom09?: Nullable<string>;
  
  // MaxLength(255)
  custom10?: Nullable<string>;
  
  // MaxLength(255)
  custom11?: Nullable<string>;
  
  // MaxLength(255)
  custom12?: Nullable<string>;
  
  // MaxLength(255)
  custom13?: Nullable<string>;
  
  // MaxLength(255)
  custom14?: Nullable<string>;
  
  // MaxLength(255)
  custom15?: Nullable<string>;
  
  // MaxLength(255)
  custom16?: Nullable<string>;
  
  // MaxLength(255)
  custom17?: Nullable<string>;
  
  // MaxLength(255)
  custom18?: Nullable<string>;
  
  // MaxLength(255)
  custom19?: Nullable<string>;
  
  // MaxLength(255)
  custom20?: Nullable<string>;
  
  workOrders?: WorkOrder[];
}