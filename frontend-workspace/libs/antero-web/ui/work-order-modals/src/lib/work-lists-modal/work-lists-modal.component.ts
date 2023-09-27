import { AnteroService } from '@allmax-angular/antero-web/services/antero-service';
import { Nullable } from '@allmax-angular/shared/types';
import { AccordionContainerComponent } from '@allmax-angular/shared/ui/accordion';
import { TabsComponent } from '@allmax-angular/shared/ui/tabs';
import { Component, ViewChild, AfterViewInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ant-work-lists-modal',
  templateUrl: './work-lists-modal.component.html',
  styleUrls: ['./work-lists-modal.component.scss'],
})
export class WorkListsModalComponent implements AfterViewInit, OnDestroy {
  @ViewChild(TabsComponent) public tabs: Nullable<TabsComponent>;

  private subs: Subscription[] = [];
  
  public tabIndex = -1;
  public height = '800px';

  constructor(private antero: AnteroService, private cdr: ChangeDetectorRef) {}

  public ngAfterViewInit(): void {
    if (this.tabs) {
      this.subs.push(this.tabs.currentIndex$.subscribe(x => {
        this.tabIndex = x;
        this.cdr.detectChanges();
      }));
    }
  }

  public ngOnDestroy(): void {
    this.cdr.detach();
  }

  public closedHandler(): void {
    this.antero.closeModal();
  }
}
