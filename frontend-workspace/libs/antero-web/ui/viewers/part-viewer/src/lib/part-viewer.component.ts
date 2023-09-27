import { PartsControllerService } from '@allmax-angular/antero-web/data-access/parts-controller';
import { Part } from '@allmax-angular/antero-web/entities';
import { AnteroService } from '@allmax-angular/antero-web/services/antero-service';
import { PartStoreService } from '@allmax-angular/antero-web/state-management/part-store';
import { Nullable, TableData } from '@allmax-angular/shared/types';
import { ModalWindowComponent } from '@allmax-angular/shared/ui/modal-window';
import { unsubscribe } from '@allmax-angular/shared/utils';
import { Component, OnInit, OnDestroy, ViewChild, AfterViewInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ant-part-viewer',
  templateUrl: './part-viewer.component.html',
  styleUrls: ['./part-viewer.component.scss'],
})
export class PartViewerComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(ModalWindowComponent) public modal: Nullable<ModalWindowComponent>;

  private subs: Subscription[] = [];

  public record: Nullable<Part>;
  public stockData: Nullable<TableData>;
  public primaryImage: any;

  constructor(
    private antero: AnteroService,
    private partStore: PartStoreService,
    private partController: PartsControllerService
  ) { }

  public ngOnInit(): void {
    this.subs.push(this.partStore.selection$.subscribe(async (x) => {
      if (x) {
        this.record = await this.partController.getByID(x.id)
        if (this.record) {
          this.primaryImage = await this.partController.getPrimaryImage(x.id);
          this.stockData = await this.partController.getStockLocationsByID(this.record, ['part.name']);
        }
      }
    }));
  }

  public ngOnDestroy(): void {
    unsubscribe(this.subs);
  }

  public ngAfterViewInit(): void {
    this.modal?.open();
  }

  public closedHandler(): void {
    this.antero.closeModal();
  }
}
