import { Part } from '@allmax-angular/antero-web/entities';
import { AnteroService } from '@allmax-angular/antero-web/services/antero-service';
import { PartStoreService } from '@allmax-angular/antero-web/state-management/part-store';
import { Nullable } from '@allmax-angular/shared/types';
import { ModalWindowComponent } from '@allmax-angular/shared/ui/modal-window';
import { unsubscribe } from '@allmax-angular/shared/utils';
import { Component, OnDestroy, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ant-adjust-inventory-tool',
  templateUrl: './adjust-inventory-tool.component.html',
  styleUrls: ['./adjust-inventory-tool.component.scss'],
})
export class AdjustInventoryToolComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(ModalWindowComponent) public modal: Nullable<ModalWindowComponent>;
  private subs: Subscription[] = [];
  
  public record: Nullable<Part>;

  constructor(
    private antero: AnteroService,
    private partsStore: PartStoreService
  ) {}

  public ngOnInit(): void {
    this.subs.push(this.partsStore.selection$.subscribe(x => this.record = x));
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
