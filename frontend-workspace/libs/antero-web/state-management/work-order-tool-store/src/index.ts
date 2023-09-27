import { WorkOrderToolStates } from '@allmax-angular/antero-web/types';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class WorkOrderToolStoreService {
  private readonly stateSubject = new BehaviorSubject<WorkOrderToolStates>(WorkOrderToolStates.NONE);
  public readonly state$ = this.stateSubject.asObservable();
  public set state(payload: WorkOrderToolStates) { this.stateSubject.next(payload); }
}