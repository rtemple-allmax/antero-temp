import { WorkHistoryControllerService } from '@allmax-angular/antero-web/data-access/work-history-controller';
import { WorkHistory, WorkHistoryEquipment, WorkHistoryInstrument, WorkHistoryLabor, WorkHistoryMisc, WorkHistoryPart, WorkHistorySupplier } from '@allmax-angular/antero-web/entities';
import { WorkHistorySectionStore } from '@allmax-angular/antero-web/state-management/work-history-section-store';
import { Nullable } from '@allmax-angular/shared/types';
import { ModalWindowComponent } from '@allmax-angular/shared/ui/modal-window';
import { getDateString, numberToCurrencyFormatter, unsubscribe } from '@allmax-angular/shared/utils';
import { AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ant-work-history-viewer',
  templateUrl: './work-history-viewer.component.html',
  styleUrls: ['./work-history-viewer.component.scss'],
})
export class WorkHistoryViewerComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(ModalWindowComponent) public modal: Nullable<ModalWindowComponent>;

  @Output() closed = new EventEmitter<any>();

  public record: Nullable<WorkHistory>;
  public instruments: WorkHistoryInstrument[] = [];
  public labor: WorkHistoryLabor[] = [];
  public parts: WorkHistoryPart[] = [];
  public contractors: WorkHistorySupplier[] = [];
  public tools : WorkHistoryEquipment[] = [];
  public misc: WorkHistoryMisc[] = [];

  private subs: Subscription[] = [];

  public get instrumentsLabel(): string {
    return `Instruments (${ this.instruments.length })`;
  }

  public get laborLabel(): string {
    return `Labor (${ this.labor.length })`;
  }

  public get partsLabel(): string {
    return `Parts (${ this.parts.length })`;
  }

  public get contractorsLabel(): string {
    return `Contractors (${ this.contractors.length })`;
  }

  public get toolsLabel(): string {
    return `Tools (${ this.tools.length })`;
  }
  
  public get miscLabel(): string {
    return `Misc (${ this.misc.length })`;
  }
  
  constructor(
    private ctrl: WorkHistoryControllerService,
    private store: WorkHistorySectionStore
  ) { }

  public ngOnInit(): void {
    this.subs.push(this.store.selection$.subscribe(async (x) => {
      if (x && 'id' in x) {
        this.record = await this.ctrl.getByID(x.id);
        this.getInstruments(x.id);
        this.getLabor(x.id);
        this.getParts(x.id);
        this.getContractors(x.id);
        this.getTools(x.id);
        this.getMisc(x.id);
      }
    }));
  }

  public ngAfterViewInit(): void {
    this.modal?.open();
  }

  public ngOnDestroy(): void {
    unsubscribe(this.subs);
  }

  public closeHandler(): void {
    this.closed.emit();
  }

  public async getInstruments(id: number): Promise<void> {
    this.instruments = await this.ctrl.getInstrumentsByWorkHistoryID(id);
  }

  public async getLabor(id: number): Promise<void> {
    this.labor = await this.ctrl.getLaborByWorkHistoryID(id);
  }

  public async getParts(id: number): Promise<void> {
    this.parts = await this.ctrl.getPartsByWorkHistoryID(id);
  }

  public async getContractors(id: number): Promise<void> {
    this.contractors = await this.ctrl.getContractorsByWorkHistoryID(id);
  }

  public async getTools(id: number): Promise<void> {
    this.tools = await this.ctrl.getToolsByWorkHistoryID(id);
  }

  public async getMisc(id: number): Promise<void> {
    this.misc = await this.ctrl.getMiscByWorkHistoryID(id);
  }

  public getDateString(val: any): string {
    return getDateString(val);
  }

  public formatCurrency(val: number): string {
    return numberToCurrencyFormatter(val);
  }
}
