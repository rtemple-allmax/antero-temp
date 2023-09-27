import { Equipment } from "@allmax-angular/antero-web/entities";
import { StoreBase } from "@allmax-angular/antero-web/types";
import { Nullable } from "@allmax-angular/shared/types";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({ providedIn: 'root' })
export class FormsStore extends StoreBase {
  private readonly equipmentAddEditFormSubject = new BehaviorSubject<Nullable<Equipment>>(null);
  public readonly equipmentAddEditForm$ = this.equipmentAddEditFormSubject.asObservable();
  public set equipmentAddEditForm(payload: Nullable<Equipment>) { this.equipmentAddEditFormSubject.next(payload); }

  public initialize(debug: boolean = false): void {
    this.prepare(debug, 'Forms Store', 'maroon');
    if (this.debug) {
      this.equipmentAddEditForm$.subscribe(x => this.log('Equipment Add Edit Form', x));
    }
  }
}