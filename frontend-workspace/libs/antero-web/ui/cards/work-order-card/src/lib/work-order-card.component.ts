import { WorkOrder } from '@allmax-angular/antero-web/entities';
import { Nullable } from '@allmax-angular/shared/types';
import { CardControl, CardIndicator, IndicatorTypes } from '@allmax-angular/shared/ui/card';
import { allIcons } from '@allmax-angular/shared/ui/icons';
import { getDateString, isNullOrEmpty } from '@allmax-angular/shared/utils';
import { Component, Input, TemplateRef, ViewChild, AfterViewInit } from '@angular/core';
import { AnteroService } from '@allmax-angular/antero-web/services/antero-service';
import { Modals } from '@allmax-angular/antero-web/types';
import { CurrentWorkStoreService } from '@allmax-angular/antero-web/state-management/current-work-store';

@Component({
  selector: 'ant-work-order-card',
  templateUrl: './work-order-card.component.html',
  styleUrls: ['./work-order-card.component.scss'],
})
export class WorkOrderCardComponent implements AfterViewInit{
  @ViewChild('dueDatePopoverTemplate') public dueDateTemplateRef: Nullable<TemplateRef<any>>;
  @ViewChild('needsAttentionPopoverTemplate') public needsAttentionTemplateRef: Nullable<TemplateRef<any>>;

  @Input() public source: Nullable<WorkOrder>;

  public icons = { ...allIcons };

  public get title(): string {
    if (this.source) {
      return `WO #${ this.source.workOrderNumber }`
    }
    return '';
  }

  public indicators: CardIndicator[] = [];
  public controls: CardControl[] = [];

  constructor(private antero: AnteroService, private workStore: CurrentWorkStoreService) { }

  public ngAfterViewInit(): void {
    this.indicators = [];
    this.controls = [];
    if (this.source) {
      if (this.source.isDue) {
        this.indicators.push({
          icon: this.icons.delinquentIcon,
          type: IndicatorTypes.POPOVER,
          color: 'var(--msg-danger)',
          template: this.dueDateTemplateRef
        })
      }
      if (this.source.needsAttention) {
        this.indicators.push({
          icon: this.icons.needsAttentionIcon,
          type: IndicatorTypes.POPOVER,
          color: 'var(--msg-warning)',
          template: this.needsAttentionTemplateRef
        })
      }
      if (!this.isComplete()) {
        this.controls.push({
          icon: this.icons.confirmIcon,
          color: 'var(--icon-color)',
          clickHandler: () => {
            this.workStore.selectedWorkOrderIDs = [ this.source?.id as number ];
            this.antero.openModal(Modals.WORK_ORDER_COMPLETE);
          }
        });
      } else {
        this.controls.push({
          icon: this.icons.workReviewIcon,
          color: 'var(--icon-color)',
          clickHandler: () => {
            this.workStore.selectedWorkOrderIDs = [ this.source?.id as number ];
            this.antero.openModal(Modals.WORK_ORDER_MOVE_TO_REVIEW);
          }
        });
        this.controls.push({
          icon: this.icons.workHistoryIcon,
          color: 'var(--icon-color)',
          clickHandler: () => {
            this.workStore.selectedWorkOrderIDs = [ this.source?.id as number ];
            this.antero.openModal(Modals.WORK_ORDER_MOVE_TO_HISTORY);
          }
        });
      }
    }
  }

  public getDateString(val: Nullable<Date>): string {
    if (val) {
      return getDateString(val)
    }
    return '';
  }

  public openInViewer(): void {
    this.antero.openModal(Modals.WORK_ORDER_VIEWER);
  }

  public isComplete(): boolean {
    return !!this.source && !isNullOrEmpty(this.source.completedNotes) && !isNullOrEmpty(this.source.dateCompleted)
  }
}
