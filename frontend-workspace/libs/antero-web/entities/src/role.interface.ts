import { Nullable, SecurityLevels } from "@allmax-angular/shared/types";

export interface Role {
  id: number;
  name: Nullable<string>;
  description: Nullable<string>;
  equipmentSection: SecurityLevels;
  notesSection: SecurityLevels;
  orderingReceivingSection: SecurityLevels;
  partsSection: SecurityLevels;
  procedureHistory: SecurityLevels;
  proceduresSection: SecurityLevels;
  reportCenter: SecurityLevels;
  supplierSection: SecurityLevels;
  workManager: SecurityLevels;
  workHistorySection: SecurityLevels;
  workTemplatesSection: SecurityLevels;
  moveToHistory: SecurityLevels;
  opcDdeEditing: SecurityLevels;
  partsUsage: SecurityLevels;
  receiveInventory: SecurityLevels;
  reportManager: SecurityLevels;
  showAllWork: SecurityLevels;
  viewAuditTrail: SecurityLevels;
}