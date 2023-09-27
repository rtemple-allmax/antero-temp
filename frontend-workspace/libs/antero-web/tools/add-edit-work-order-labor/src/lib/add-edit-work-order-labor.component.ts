import { LaborControllerService } from '@allmax-angular/antero-web/data-access/labor-controller';
import { WorkManagementControllerService } from '@allmax-angular/antero-web/data-access/work-management-controller';
import { LaborClass } from '@allmax-angular/antero-web/entities';
import { AnteroService } from '@allmax-angular/antero-web/services/antero-service';
import { AnteroStoreService } from '@allmax-angular/antero-web/state-management/antero-store';
import { CrudFunctions, Nullable } from '@allmax-angular/shared/types';
import { miscIcons } from '@allmax-angular/shared/ui/icons';
import { ModalWindowComponent } from '@allmax-angular/shared/ui/modal-window';
import { unsubscribe } from '@allmax-angular/shared/utils';
import { Component, AfterViewInit, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ant-add-edit-work-order-labor',
  templateUrl: './add-edit-work-order-labor.component.html',
  styles: [],
})
export class AddEditWorkOrderLaborComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(ModalWindowComponent) public modal: Nullable<ModalWindowComponent>;

  private subs: Subscription[] = [];
  public crud: CrudFunctions = CrudFunctions.CREATE;

  public laborClasses: LaborClass[] = [];

  public icons = { ...miscIcons };

  public get heading(): string {
    return `${ this.crud === CrudFunctions.UPDATE ? 'Edit' : 'Add' } Labor`;
  }

  constructor(
    private antero: AnteroService,
    private appStore: AnteroStoreService,
    private ctrl: WorkManagementControllerService,
    private laborCtrl: LaborControllerService
  ) {}

  public ngOnInit(): void {
    this.subs.push(this.appStore.crud$.subscribe(x => this.crud = x));
  }

  public ngAfterViewInit(): void {
    this.modal?.open();
  }

  public ngOnDestroy(): void {
    unsubscribe(this.subs);
  }

  public async getLaborClasses(): Promise<void> {
    this.laborClasses = await this.laborCtrl.getLaborClasses();
  }

  public closedHandler(): void {
    this.antero.closeModal();
  }
}
