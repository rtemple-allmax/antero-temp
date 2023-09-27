import { PartQuantity } from '@allmax-angular/antero-web/entities';
import { AnteroService } from '@allmax-angular/antero-web/services/antero-service';
import { PartStoreService } from '@allmax-angular/antero-web/state-management/part-store';
import { Nullable } from '@allmax-angular/shared/types';
import { ModalWindowComponent } from '@allmax-angular/shared/ui/modal-window';
import { unsubscribe } from '@allmax-angular/shared/utils';
import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ant-log-part-usage-tool',
  templateUrl: './log-part-usage-tool.component.html',
  styleUrls: ['./log-part-usage-tool.component.scss'],
})
export class LogPartUsageToolComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(ModalWindowComponent) public modal: Nullable<ModalWindowComponent>;

  private subs: Subscription[] = [];

  public record: Nullable<PartQuantity>;

  constructor(
    private antero: AnteroService,
    private partsStore: PartStoreService
  ) {}

  public ngOnInit(): void {
    this.subs.push(this.partsStore.selectedStockLocation$.subscribe(x => this.record = x));
  }

  public ngAfterViewInit(): void {
    this.modal?.open();
  }

  public ngOnDestroy(): void {
    unsubscribe(this.subs);
  }

  public closedHandler(): void {
    this.antero.closeModal();
  }
}
