import { EquipmentControllerService } from '@allmax-angular/antero-web/data-access/equipment-controller';
import { CurrentWorkStoreService } from '@allmax-angular/antero-web/state-management/current-work-store';
import { WorkOrderData } from '@allmax-angular/antero-web/types';
import { Nullable } from '@allmax-angular/shared/types';
import { ModalWindowComponent } from '@allmax-angular/shared/ui/modal-window';
import { unsubscribe } from '@allmax-angular/shared/utils';
import { Component, AfterViewInit, Input, ViewChild, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ant-work-order-equipment-modal',
  templateUrl: './work-order-equipment-modal.component.html',
  styles: [],
})
export class WorkOrderEquipmentModalComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(ModalWindowComponent) public modal: Nullable<ModalWindowComponent>;

  @Input() public height = 'auto';

  @Output() public closed = new EventEmitter<undefined>();

  private subs: Subscription[] = [];

  public data: Nullable<WorkOrderData>;
  public primaryImage: any;

  public get heading(): string {
    return 'Equipment Details';
  }

  constructor(
    private ctrl: EquipmentControllerService,
    private workStore: CurrentWorkStoreService
  ) {}

  public ngOnInit(): void {
    this.subs.push(this.workStore.woData$.subscribe(async (x) => {
      this.data = x;
      if (this.data?.wo?.equipment) {
        this.primaryImage = await this.ctrl.getPrimaryImage(this.data.wo.equipment.id)
      }
    }));
  }

  public async ngAfterViewInit(): Promise<void> {
    this.modal?.open();
  }

  public ngOnDestroy(): void {
    unsubscribe(this.subs);
  }

  public closedHandler(): void {
    this.closed.emit();
  }
}
