import { Equipment } from "@allmax-angular/antero-web/entities";

export interface AddEquipment {
  newEquipment: Equipment;
  includeInstruments: boolean;
  includeParts: boolean;
  includeTemplates: boolean;
  includeDocuments: boolean;
  includeImages: boolean;
}
