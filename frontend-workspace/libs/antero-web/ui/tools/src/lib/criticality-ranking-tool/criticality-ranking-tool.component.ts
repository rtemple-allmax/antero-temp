import { EquipmentControllerService } from '@allmax-angular/antero-web/data-access/equipment-controller';
import { CriticalityRanking, Equipment } from '@allmax-angular/antero-web/entities';
import { EquipmentStatePropNames } from '@allmax-angular/antero-web/features/feature-asset-management';
import { AnteroService } from '@allmax-angular/antero-web/services/antero-service';
import { AnteroStoreService } from '@allmax-angular/antero-web/state-management/antero-store';
import { EquipmentSectionStore } from '@allmax-angular/antero-web/state-management/equipment-section-store';
import { DataStores, getContrastColor, Modals } from '@allmax-angular/antero-web/types';
import { StateManagementService } from '@allmax-angular/shared/features/state-management';
import { Nullable } from '@allmax-angular/shared/types';
import { unsubscribe } from '@allmax-angular/shared/utils';
import { Component, OnInit, Input, OnDestroy, inject } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ant-criticality-ranking-tool',
  templateUrl: './criticality-ranking-tool.component.html',
  styleUrls: ['./criticality-ranking-tool.component.scss'],
})
export class CriticalityRankingToolComponent implements OnInit, OnDestroy {
  public id = 'criticality-enblem';

  private subs: Subscription[] = [];

  public selection: Nullable<Equipment>

  private state = inject(StateManagementService);

  public visibility = false;
  public ranking: Nullable<CriticalityRanking>;

  public get score(): number {
    return (this.selection?.probabilityOfFailure || 1) * (this.selection?.consequenceOfFailure || 1); 
  }
  
  public get disabled(): boolean {
    return this.score === 0;
  }

  public get target(): string {
    return `#${ this.id }`;
  }

  public get color(): string {
    if (this.score > 20) {
      return '#ed1c23';
    } else if (this.score > 15) {
      return '#ed6c1c';
    } else if (this.score > 10) {
      return '#ffd300';
    } else if (this.score > 5) {
      return '#6ca600';
    } else {
      return '#00a550';
    }
  }
  
  constructor(
    private antero: AnteroService,
    private ctrl: EquipmentControllerService,
    private appStore: AnteroStoreService,
    private eqStore: EquipmentSectionStore
  ) { }

  public ngOnInit(): void {
    const sub = this.state.getStore(DataStores.EQUIPMENT)
    ?.observe(EquipmentStatePropNames.SELECTED_EQUIPMENT)
    ?.subscribe(x => {
      this.selection = x;
      this.update();
    });
    if (sub) { this.subs.push(sub); }
    // this.subs.push(this.eqStore.selection$.subscribe(x => {
    //   this.selection = x;
    //   this.update();
    // }));
    this.subs.push(this.appStore.refresh$.subscribe(x => { if (x) { this.update(); }}))
  }

  public ngOnDestroy(): void {
    unsubscribe(this.subs);
  }

  public async update():Promise<void> {
    this.ranking = await this.ctrl.getCriticalityByValue(this.score);
  }

  public mouseenterHandler(): void {
    if (this.disabled) { return; }
    this.visibility = true;
  }

  public mouseleaveHandler(): void {
    if (this.disabled) { return; }
    this.visibility = false;
  }

  public clickHandler(): void {
    this.antero.openModal(Modals.MANAGE_CRITICALITY);
  }

  public getContrastColor(hex: string): string {
    return getContrastColor(hex)
  }
}
