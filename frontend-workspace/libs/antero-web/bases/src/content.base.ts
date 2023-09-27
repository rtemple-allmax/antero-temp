import { Nullable } from "@allmax-angular/shared/types";
import { allIcons } from "@allmax-angular/shared/ui/icons";
import { TabsComponent } from "@allmax-angular/shared/ui/tabs";
import { getDateString } from "@allmax-angular/shared/utils";
import { Component, OnDestroy, inject, ChangeDetectorRef, ViewChild, AfterViewInit } from "@angular/core";
import { WidgetBaseComponent } from "./widget.base";

@Component({ template: '' })
export class ContentBaseComponent extends WidgetBaseComponent implements AfterViewInit, OnDestroy {
  @ViewChild(TabsComponent) public tabs: Nullable<TabsComponent>;
  
  public icons = { ...allIcons };

  public currentIndex = -1;

  public cdr = inject(ChangeDetectorRef);

  public get height(): string {
    return 'calc(100vh - 200px)';
  }

  public ngAfterViewInit(): void {
    if (this.tabs) {
      this.subs.push(this.tabs.currentIndex$.subscribe(x => this.currentIndex = x));
    }
    this.cdr.detectChanges();
  }

  public override ngOnDestroy(): void {
    super.ngOnDestroy();
    this.cdr.detach();
  }

  public getDateString(val: any): string {
    return getDateString(val);
  }
}