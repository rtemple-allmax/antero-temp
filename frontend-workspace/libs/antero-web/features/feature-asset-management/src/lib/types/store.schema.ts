import { Equipment, EquipmentDocument, EquipmentInServiceHistory, EquipmentPart, Instrument, Reading, Task, WorkHistory } from "@allmax-angular/antero-web/entities";
import { ImageData } from "@allmax-angular/antero-web/types";
import { DataPoint } from "@allmax-angular/shared/features/state-management";
import { Sliders } from "./sliders.enum";

export enum EquipmentStatePropNames {
  OPEN_SLIDER = 'openSlider',
  SELECTED_EQUIPMENT = 'selectedEquipment',
  SELECTED_INSTRUMENT = 'selectedInstrument',
  SELECTED_READING = 'selectedReading',
  SELECTED_PART = 'selectedPart',
  SELECTED_WORK_HISTORY = 'selectedWorkHistory',
  SELECTED_TASK = 'selectedTask',
  SELECTED_DOCUMENTS = 'selectedDocuments',
  SELECTED_IMAGE = 'selectedImage',
  SELECTED_IN_SERVICE_HISTORY = 'selectedInServiceHistory',
  INCLUDE_RETIRED = 'includeRetired',
  REFRESH = 'refresh'
}

export const equipmentStoreSchema: DataPoint[] = [
  new DataPoint<Equipment>(EquipmentStatePropNames.SELECTED_EQUIPMENT),
  new DataPoint<Instrument>(EquipmentStatePropNames.SELECTED_INSTRUMENT),
  new DataPoint<Reading>(EquipmentStatePropNames.SELECTED_READING),
  new DataPoint<EquipmentPart>(EquipmentStatePropNames.SELECTED_PART),
  new DataPoint<WorkHistory>(EquipmentStatePropNames.SELECTED_WORK_HISTORY),
  new DataPoint<Task>(EquipmentStatePropNames.SELECTED_TASK),
  new DataPoint<EquipmentDocument[]>(EquipmentStatePropNames.SELECTED_DOCUMENTS, []),
  new DataPoint<ImageData>(EquipmentStatePropNames.SELECTED_IMAGE),
  new DataPoint<EquipmentInServiceHistory>(EquipmentStatePropNames.SELECTED_IN_SERVICE_HISTORY),
  new DataPoint<boolean>(EquipmentStatePropNames.INCLUDE_RETIRED, false),
  new DataPoint<Sliders>(EquipmentStatePropNames.OPEN_SLIDER, Sliders.NONE),
  new DataPoint<boolean>(EquipmentStatePropNames.REFRESH, false)
];

// Things that were in the old version of the Equipment Store but it doesnt seem to me like they will be necessary.
// selectedPartData - This should just be an equipmentPart and then the list item component should convert it to PartData.
// All of these table references probably should not be stored here
// Master Table
// Instruments Table
// Readings Table
// Parts Table
// Documents Table
// In Service History Table
// These history refs were in the old one.
// historyTimeFrame, dateStart, and dateEnd.  These should be combined into a single prop
// These props are for the Equipment Lists.  Should the equipment lists ui be in this feature or its own?

