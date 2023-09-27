import { ViewerBaseComponent } from '@allmax-angular/antero-web/bases';
import { WorkOrder } from '@allmax-angular/antero-web/entities';
import { DataStores } from '@allmax-angular/antero-web/types';
import { Nullable } from '@allmax-angular/shared/types';
import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { WorkViewerStorePropNames } from '../work-viewer.schema';
import { TabsComponent } from '@allmax-angular/shared/ui/tabs';
import { WindowComponent } from '@allmax-angular/shared/ui/window';

enum Sliders {
  NONE,
  ADMIN,
  CHECKLIST,
  COMPLETION,
  CONTRACTOR_ADD,
  CONTRACTOR_DELETE,
  CONTRACTOR_EDIT,
  EQUIPMENT,
  EQUIPMENT_DOCUMENTS,
  EQUIPMENT_DOWNTIME,
  EQUIPMENT_HISTORY,
  INSTRUCTIONS,
  INSTRUMENTS,
  LABOR_ADD,
  LABOR_DELETE,
  LABOR_EDIT,
  MISC_ADD,
  MISC_DELETE,
  MISC_EDIT,
  MOVE_TO_HISTORY,
  MOVE_TO_REVIEW,
  PART_ADD,
  PART_DELETE,
  PART_EDIT,
  TOOL_ADD,
  TOOL_DELETE,
  TOOL_EDIT,
}

@Component({
  selector: 'ant-work-viewer',
  templateUrl: './work-viewer.component.html',
  styleUrls: ['./work-viewer.component.scss'],
})
export class WorkViewerComponent extends ViewerBaseComponent implements OnInit, AfterViewInit  {
  @ViewChild(WindowComponent) public window: Nullable<WindowComponent>;
  @ViewChild(TabsComponent) public tabs: Nullable<TabsComponent>;

  public record: Nullable<WorkOrder>;
  public height = '600px';

  public sliders: typeof Sliders = Sliders;
  public slider = Sliders.NONE;
  
  public currentIndex = -1;

  public ngOnInit(): void {
    const store = this.state.getStore(DataStores.VIEWER_WORK);
    if (store) {
      const sub = store.observe(WorkViewerStorePropNames.SELECTED_WORK_ORDER)?.subscribe(x => {
        this.record = x;
      });
      if (sub) { this.subs.push(sub); }
    }
  }

  public ngAfterViewInit(): void {
    if (this.tabs) {
      this.subs.push(this.tabs.currentIndex$.subscribe(x => {
        if (this.currentIndex !== x) {
          this.currentIndex = x;
          this.closeSlideOutHandler();
        }
      }));
    }
  }

  public open(): void {
    this.window?.open();
  }

  public close(): void {
    this.window?.close();
  }

  public openSlider(slider: Sliders): void {
    this.slider = slider;
    this.window?.slideIn();
  }
  
  public closeSlideOutHandler(): void {
    if (this.window?.sliderIsOpen) {
      this.window?.slideOut();
    }
  }

  public sliderClosedHandler(): void {
    //setTimeout is cover time it takes for animation to finish
    setTimeout(() => this.slider = Sliders.NONE, 400)
    
  }
}
