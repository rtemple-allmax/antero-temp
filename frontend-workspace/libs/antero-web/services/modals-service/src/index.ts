import { AnteroStoreService } from "@allmax-angular/antero-web/state-management/antero-store";
import { Modals } from "@allmax-angular/antero-web/types";
import { CrudFunctions, Nullable } from "@allmax-angular/shared/types";
import { Injectable } from "@angular/core";

export interface ModalData {
  modal: Modals;
  crud: CrudFunctions;
}

@Injectable({ providedIn: 'root' })
export class ModalsService {
  private history: ModalData[] = [];

  private current: Nullable<ModalData>;

  constructor(private store: AnteroStoreService) { }

  public openModal(modal: Modals, crud: CrudFunctions = CrudFunctions.CREATE): void {
    if (this.current) {
      const found = this.history.find(x => x.modal === this.current?.modal);
      if (this.current.modal === modal || found) {
        return; 
      } else {
        this.history.push(this.current);     
      }
    }
    
    this.store.modal = modal;
    this.store.crud = crud;
    this.current = { modal, crud };
  }

  public closeModal(): void {
    if (this.history.length > 0) {
      const data = this.history.pop();
      if (data) {
        this.store.modal = data.modal;
        this.store.crud = data.crud;
        this.current = data;
      }
    } else {
      this.store.modal = Modals.NONE;
      this.store.crud = CrudFunctions.READ;
      this.current = null;
    }
  }
}