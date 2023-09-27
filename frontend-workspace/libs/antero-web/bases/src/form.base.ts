import { AnteroService } from '@allmax-angular/antero-web/services/antero-service';
import { PersistenceService } from '@allmax-angular/antero-web/services/persistence';
import { AnteroStoreService } from '@allmax-angular/antero-web/state-management/antero-store';
import { FormsStore } from '@allmax-angular/antero-web/state-management/forms-store';
import { CrudFunctions, CustomValidator, Nullable } from '@allmax-angular/shared/types';
import { allIcons } from '@allmax-angular/shared/ui/icons';
import { ModalWindowComponent } from '@allmax-angular/shared/ui/modal-window';
import { NotificationsService } from '@allmax-angular/shared/ui/notifications';
import { SearchableDropdownComponent } from '@allmax-angular/shared/ui/searchable-dropdown';
import { Component, inject, QueryList, ViewChild, ViewChildren, AfterViewInit } from '@angular/core';
import { SubscriberBaseComponent } from './subscriber.base';

@Component({ template: '' })
export class FormBaseComponent extends SubscriberBaseComponent implements AfterViewInit {
  @ViewChild(ModalWindowComponent) public modal: Nullable<ModalWindowComponent>; 
  @ViewChildren(SearchableDropdownComponent) public dropdownsQuery: Nullable<QueryList<SearchableDropdownComponent>>;
  
  protected antero = inject(AnteroService);
  protected notifications = inject(NotificationsService);
  protected persistence = inject(PersistenceService);
  protected appStore = inject(AnteroStoreService);
  protected formsStore = inject(FormsStore);

  public icons = { ...allIcons };

  public crudFunctions: typeof CrudFunctions = CrudFunctions;
  public crud = CrudFunctions.CREATE;

  public dropdowns: SearchableDropdownComponent[] = [];

  public customValidators: CustomValidator<string>[] = [ ];

  public ngAfterViewInit(): void {
    this.dropdowns = this.dropdownsQuery?.toArray() || [];
    this.dropdownsQuery?.changes.subscribe(q => this.dropdowns = q.toArray() || []);
    this.modal?.open();
  }
  
  public scrolledHandler(): void {
    this.dropdowns.forEach(d => {
      if (d.isOpen) {
        d.close();
      }
    })
  }

  public closedHandler(): void {
    this.antero.closeModal();
  }
}