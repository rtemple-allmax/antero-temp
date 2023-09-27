import { AnteroService } from '@allmax-angular/antero-web/services/antero-service';
import { EquipmentSectionStore } from '@allmax-angular/antero-web/state-management/equipment-section-store';
import { EquipmentLists } from '@allmax-angular/antero-web/types';
import { Nullable } from '@allmax-angular/shared/types';
import { TabsComponent } from '@allmax-angular/shared/ui/tabs';
import { unsubscribe } from '@allmax-angular/shared/utils';
import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ant-equipment-lists',
  templateUrl: './equipment-lists.component.html',
  styleUrls: ['./equipment-lists.component.scss'],
})
export class EquipmentListsComponent implements AfterViewInit, OnDestroy {
  @ViewChild(TabsComponent) public tabs: Nullable<TabsComponent>;

  private subs: Subscription[] = [];

  public tabIndex = -1;

  public selectedList: EquipmentLists = EquipmentLists.CATEGORY;

  public get tabsHeight(): string {
    return `calc(600px - 35px)`;
  }

  public get panelHeight(): string {
    return `calc(600px - (35px + 25px)`;
  }
  
  constructor(
    private antero: AnteroService,
    private eqStore: EquipmentSectionStore
  ) { }

  public ngAfterViewInit(): void {
    if (this.tabs) {
      this.subs.push(this.tabs.currentIndex$.subscribe(x => this.tabIndex = x));
    }

    this.subs.push(this.eqStore.selectedList$.subscribe(x => {
      this.selectedList = x;
      this.switchToPanel();
    }));
  }

  public ngOnDestroy(): void {
    unsubscribe(this.subs);
  }

  public closedHandler() {
    this.antero.closeModal();
  }

  public switchToPanel(): void {
    let index = -1;

    switch(this.selectedList) {
      case EquipmentLists.CATEGORY:
        index = 0;
        break;
      case EquipmentLists.CONDITION:
        index = 1;
        break;
      case EquipmentLists.DEPARTMENT:
        index = 3;
        break;
      case EquipmentLists.GROUP:
        index = 4;
        break;
      case EquipmentLists.LOCATION:
        index = 5;
        break;
      case EquipmentLists.PRIORITY:
        index = 6;
        break;
      case EquipmentLists.TYPE:
        index = 7;
        break;
    }

    this.tabs?.changeToPanel(index);
  }
}
