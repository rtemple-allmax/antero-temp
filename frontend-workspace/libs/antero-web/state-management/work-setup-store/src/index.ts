import { Injectable } from '@angular/core';
import { WorkTemplate, WorkTemplateEquipment, WorkTemplateLabor, WorkTemplatePart, WorkTemplateSupplier } from "@allmax-angular/antero-web/entities";
import { Nullable } from "@allmax-angular/shared/types";
import { BehaviorSubject } from "rxjs";
import { StoreBase } from '@allmax-angular/antero-web/types';

@Injectable({ providedIn: 'root' })
export class WorkSetupSectionStore extends StoreBase {
  private readonly selectedTemplateSubject = new BehaviorSubject<Nullable<WorkTemplate>>(null);
  public readonly selectedTemplate$ = this.selectedTemplateSubject.asObservable();
  public set selectedTemplate(payload: Nullable<WorkTemplate>) { this.selectedTemplateSubject.next(payload); }

  private readonly selectedWorkTemplatePartSubject = new BehaviorSubject<Nullable<WorkTemplatePart>>(null);
  public readonly selectedWorkTemplatePart$ = this.selectedWorkTemplatePartSubject.asObservable();
  public set selectedWorkTemplatePart(payload: Nullable<WorkTemplatePart>) { this.selectedWorkTemplatePartSubject.next(payload); }

  private readonly selectedWorkTemplateEquipmentSubject = new BehaviorSubject<Nullable<WorkTemplateEquipment>>(null);
  public readonly selectedWorkTemplateEquipment$ = this.selectedWorkTemplateEquipmentSubject.asObservable();
  public set selectedWorkTemplateEquipment(payload: Nullable<WorkTemplateEquipment>) { this.selectedWorkTemplateEquipmentSubject.next(payload); }

  private readonly selectedWorkTemplateLaborSubject = new BehaviorSubject<Nullable<WorkTemplateLabor>>(null);
  public readonly selectedWorkTemplateLabor$ = this.selectedWorkTemplateLaborSubject.asObservable();
  public set selectedWorkTemplateLabor(payload: Nullable<WorkTemplateLabor>) { this.selectedWorkTemplateLaborSubject.next(payload); }

  private readonly selectedWorkTemplateSupplierSubject = new BehaviorSubject<Nullable<WorkTemplateSupplier>>(null);
  public readonly selectedWorkTemplateSupplier$ = this.selectedWorkTemplateSupplierSubject.asObservable();
  public set selectedWorkTemplateSupplier(payload: Nullable<WorkTemplateSupplier>) { this.selectedWorkTemplateSupplierSubject.next(payload); }

  public initialize(debug: boolean = false): void {
    this.prepare(debug, 'Work Setup Store', '#64B6AC', 'black');
    if (this.debug) {
      this.subs.push(this.selectedTemplate$.subscribe(x => this.log('selectedTemplate', x)));
      this.subs.push(this.selectedWorkTemplatePart$.subscribe(x => this.log('selectedWorkTemplatePart', x)));
      this.subs.push(this.selectedWorkTemplateEquipment$.subscribe(x => this.log('selectedWorkTemplateEquipment', x)));
      this.subs.push(this.selectedWorkTemplateLabor$.subscribe(x => this.log('selectedWorkTemplateLabor', x)));
      this.subs.push(this.selectedWorkTemplateSupplier$.subscribe(x => this.log('selectedWorkTemplateSupplier', x)));
    }
  }
}