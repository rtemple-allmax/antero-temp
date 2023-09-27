import { Equipment, EquipmentDocument, EquipmentImage, EquipmentInServiceHistory, EquipmentPart, Instrument, Reading, Task, WorkHistory } from "@allmax-angular/antero-web/entities";
import { EquipmentLists, ImageData, PartData, StoreBase } from "@allmax-angular/antero-web/types";
import { Nullable } from "@allmax-angular/shared/types";
import { DataTableComponent } from "@allmax-angular/shared/ui/data-table";
import { HistoryTimeFrames, historyTimeFramesToLabelsMap, unsubscribe } from "@allmax-angular/shared/utils";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Subscription } from "rxjs";

@Injectable({ providedIn: 'root' })
export class EquipmentSectionStore extends StoreBase {
  private readonly selectionSubject = new BehaviorSubject<Nullable<Equipment>>(null);
  public readonly selection$ = this.selectionSubject.asObservable();
  public set selection(payload: Nullable<Equipment>) { this.selectionSubject.next(payload); }
  
  private readonly selectedInstrumentSubject = new BehaviorSubject<Nullable<Instrument>>(null);
  public readonly selectedInstrument$ = this.selectedInstrumentSubject.asObservable();
  public set selectedInstrument(payload: Nullable<Instrument>) { this.selectedInstrumentSubject.next(payload); }

  private readonly selectedReadingSubject = new BehaviorSubject<Nullable<Reading>>(null);
  public readonly selectedReading$ = this.selectedReadingSubject.asObservable();
  public set selectedReading(payload: Nullable<Reading>) { this.selectedReadingSubject.next(payload); }

  private readonly selectedPartSubject = new BehaviorSubject<Nullable<EquipmentPart>>(null);
  public readonly selectedPart$ = this.selectedPartSubject.asObservable();
  public set selectedPart(payload: Nullable<EquipmentPart>) { this.selectedPartSubject.next(payload); }

  private readonly selectedPartDataSubject = new BehaviorSubject<Nullable<PartData>>(null);
  public readonly selectedPartData$ = this.selectedPartDataSubject.asObservable();
  public set selectedPartData(payload: Nullable<PartData>) { this.selectedPartDataSubject.next(payload); }

  private readonly selectedWorkHistorySubject = new BehaviorSubject<Nullable<WorkHistory>>(null);
  public readonly selectedWorkHistory$ = this.selectedWorkHistorySubject.asObservable();
  public set selectedWorkHistory(payload: Nullable<WorkHistory>) { this.selectedWorkHistorySubject.next(payload); }

  private readonly selectedTaskSubject = new BehaviorSubject<Nullable<Task>>(null);
  public readonly selectedTask$ = this.selectedTaskSubject.asObservable();
  public set selectedTask(payload: Nullable<Task>) { this.selectedTaskSubject.next(payload); }

  private readonly selectedDocumentsSubject = new BehaviorSubject<EquipmentDocument[]>([]);
  public readonly selectedDocuments$ = this.selectedDocumentsSubject.asObservable();
  public set selectedDocuments(payload: EquipmentDocument[]) { this.selectedDocumentsSubject.next(payload); }

  private readonly selectedImageSubject = new BehaviorSubject<Nullable<ImageData>>(null);
  public readonly selectedImage$ = this.selectedImageSubject.asObservable();
  public set selectedImage(payload: ImageData) { this.selectedImageSubject.next(payload); }

  private readonly selectedInServiceHistorySubject = new BehaviorSubject<Nullable<EquipmentInServiceHistory>>(null);
  public readonly selectedInServiceHistory$ = this.selectedInServiceHistorySubject.asObservable();
  public set selectedInServiceHistory(payload: EquipmentInServiceHistory) { this.selectedInServiceHistorySubject.next(payload); }
  
  private readonly masterTableSubject = new BehaviorSubject<Nullable<DataTableComponent>>(null);
  public readonly masterTable$ = this.masterTableSubject.asObservable();
  public set masterTable(payload: Nullable<DataTableComponent>) { this.masterTableSubject.next(payload); }

  private readonly instrumentsTableSubject = new BehaviorSubject<Nullable<DataTableComponent>>(null);
  public readonly instrumentsTable$ = this.instrumentsTableSubject.asObservable();
  public set instrumentsTable(payload: Nullable<DataTableComponent>) { this.instrumentsTableSubject.next(payload); }

  private readonly readingsTableSubject = new BehaviorSubject<Nullable<DataTableComponent>>(null);
  public readonly readingsTable$ = this.readingsTableSubject.asObservable();
  public set readingsTable(payload: Nullable<DataTableComponent>) { this.readingsTableSubject.next(payload); }

  private readonly partsTableSubject = new BehaviorSubject<Nullable<DataTableComponent>>(null);
  public readonly partsTable$ = this.partsTableSubject.asObservable();
  public set partsTable(payload: Nullable<DataTableComponent>) { this.partsTableSubject.next(payload); }

  private readonly documentsTableSubject = new BehaviorSubject<Nullable<DataTableComponent>>(null);
  public readonly documentsTable$ = this.documentsTableSubject.asObservable()
  public set documentsTable(payload: Nullable<DataTableComponent>) { this.documentsTableSubject.next(payload); }

  private readonly inServiceHistoryTableSubject = new BehaviorSubject<Nullable<DataTableComponent>>(null);
  public readonly inServiceHistoryTable$ = this.inServiceHistoryTableSubject.asObservable();
  public set inServiceHistoryTable(payload: Nullable<DataTableComponent>) { this.inServiceHistoryTableSubject.next(payload); }

  public readonly includeRetiredSubject = new BehaviorSubject<boolean>(false);
  public readonly includeRetired$ = this.includeRetiredSubject.asObservable();
  public set includeRetired(payload: boolean) { this.includeRetiredSubject.next(payload); }

  private readonly historyTimeFrameSubject = new BehaviorSubject<HistoryTimeFrames>(HistoryTimeFrames.ALL);
  public readonly historyTimeFrame$ = this.historyTimeFrameSubject.asObservable();
  public set historyTimeFrame(payload: HistoryTimeFrames) { this.historyTimeFrameSubject.next(payload); }

  private readonly dateStartSubject = new BehaviorSubject<Nullable<Date>>(null);
  public readonly dateStart$ = this.dateStartSubject.asObservable();
  public set dateStart(payload: Nullable<Date>) { this.dateStartSubject.next(payload); }

  private readonly dateEndSubject = new BehaviorSubject<Nullable<Date>>(null);
  public readonly dateEnd$ = this.dateEndSubject.asObservable();
  public set dateEnd(payload: Nullable<Date>) { this.dateEndSubject.next(payload); }

  private readonly selectedListSubject = new BehaviorSubject<EquipmentLists>(EquipmentLists.CATEGORY);
  public readonly selectedList$ = this.selectedListSubject.asObservable();
  public set selectedList(payload: EquipmentLists) { this.selectedListSubject.next(payload); }

  private newListItemNameSubject = new BehaviorSubject<Nullable<string>>(null);
  public readonly newListItemName$ = this.newListItemNameSubject.asObservable();
  public set newListItemName(payload: Nullable<string>) { this.newListItemNameSubject.next(payload); }
  
  public initialize(debug: boolean = false): void {
    this.prepare(debug, 'Equipment Store', 'blue');
    if (this.debug) {
      this.subs.push(this.selection$.subscribe(x => this.log('selection', x)));
      this.subs.push(this.selectedInstrument$.subscribe(x => this.log('selectedInstrument', x)));
      this.subs.push(this.selectedReading$.subscribe(x => this.log('selectedReading', x)));
      this.subs.push(this.selectedPart$.subscribe(x => this.log('selectedPart', x)));
      this.subs.push(this.selectedDocuments$.subscribe(x => this.log('selectedDocuments', x)));
      this.subs.push(this.selectedImage$.subscribe(x => this.log('selectedImage', x)));
      this.subs.push(this.selectedInServiceHistory$.subscribe(x => this.log('selectedInServiceHistory', x)));
      this.subs.push(this.masterTable$.subscribe(x => this.log('masterTable', x)));
      this.subs.push(this.instrumentsTable$.subscribe(x => this.log('instrumentsTable', x)));
      this.subs.push(this.readingsTable$.subscribe(x => this.log('readingsTable', x)));
      this.subs.push(this.partsTable$.subscribe(x => this.log('partsTable', x)));
      this.subs.push(this.documentsTable$.subscribe(x => this.log('documentsTable', x)));
      this.subs.push(this.inServiceHistoryTable$.subscribe(x => this.log('inServiceHistoryTable', x)));
      this.subs.push(this.includeRetired$.subscribe(x => this.log('includeRetired', x)));
      this.subs.push(this.historyTimeFrame$.subscribe(x => this.log('historyTimeFrame', historyTimeFramesToLabelsMap.get(x))));
      this.subs.push(this.dateStart$.subscribe(x => this.log('dateStart', x)));
      this.subs.push(this.dateEnd$.subscribe(x => this.log('dateEnd', x)));
      this.subs.push(this.selectedWorkHistory$.subscribe(x => this.log('selectedWorkHistory', x)));
      this.subs.push(this.selectedTask$.subscribe(x => this.log('selectedTask', x)));
      this.subs.push(this.selectedList$.subscribe(x => this.log('selected list', x)));
      this.subs.push(this.newListItemName$.subscribe(x => this.log('new list item name', x)));  
    }
  }
  
  public reset(): void {
    this.selection = null;
    this.selectedInstrument = null;
    this.selectedReading = null;
    this.selectedPart = null;
    this.masterTable = null;
    this.instrumentsTable = null;
    this.readingsTable = null;
    this.partsTable = null;
  }
}