import { Supplier } from "@allmax-angular/antero-web/entities";
import { StoreBase } from "@allmax-angular/antero-web/types";
import { Nullable } from "@allmax-angular/shared/types";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({ providedIn: 'root' })
export class SuppliersSectionStore extends StoreBase {
  private readonly selectionSubject = new BehaviorSubject<Nullable<Supplier>>(null);
  public readonly selection$ = this.selectionSubject.asObservable();
  public set selection(payload: Nullable<Supplier>) { this.selectionSubject.next(payload); }

  public initialize(debug: boolean = false) {
    this.prepare(debug, 'Supplier Store', 'navy');
    this.subs.push(this.selection$.subscribe(x => this.log('selection', x)));
  }
}