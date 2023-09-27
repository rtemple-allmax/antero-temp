import { WorkSetupControllerService } from '@allmax-angular/antero-web/data-access/work-setup-controller';
import { WorkTemplate, WorkTemplatePart } from '@allmax-angular/antero-web/entities';
import { WorkSetupSectionStore } from '@allmax-angular/antero-web/state-management/work-setup-store';
import { Nullable } from '@allmax-angular/shared/types';
import { unsubscribe } from '@allmax-angular/shared/utils';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ant-work-templates-parts-panel',
  templateUrl: './work-templates-parts-panel.component.html',
  styleUrls: ['./work-templates-parts-panel.component.scss'],
})
export class WorkTemplatesPartsPanelComponent implements OnInit, OnDestroy {
  public subs: Subscription[] = [];

  public selectedTemplate: Nullable<WorkTemplate>;

  public wtParts: WorkTemplatePart[] = [];

  public itemSize = 90;

  public selectedPart: Nullable<WorkTemplatePart>;

  public get innerItemSize(): string {
    return `calc(${ this.itemSize }px - var(--space-md))`;
  }

  constructor(
    private workSetupCtrl: WorkSetupControllerService,
    private workSetupStore: WorkSetupSectionStore
  ) { }

  public ngOnInit(): void {
    this.subs.push(this.workSetupStore.selectedTemplate$.subscribe(async (x) => {
      this.selectedTemplate = x;
      if (this.selectedTemplate) {
        this.wtParts = await this.workSetupCtrl.getWorkTemplateParts(this.selectedTemplate?.id);
      }
    }));
    this.subs.push(this.workSetupStore.selectedWorkTemplatePart$.subscribe(x => this.selectedPart = x));
  }

  public ngOnDestroy(): void {
    unsubscribe(this.subs);
  }

  public selectionHandler(item: WorkTemplatePart): void {
    this.workSetupStore.selectedWorkTemplatePart = item;
  }

  public test(): void {
    // console.log('test in section')
  }
}
