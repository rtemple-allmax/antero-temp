import { WorkHistory } from '@allmax-angular/antero-web/entities';
import { AnteroService } from '@allmax-angular/antero-web/services/antero-service';
import { Modals } from '@allmax-angular/antero-web/types';
import { Nullable } from '@allmax-angular/shared/types';
import { CardControl, CardIndicator, CardOption } from '@allmax-angular/shared/ui/card';
import { getDateString } from '@allmax-angular/shared/utils';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ant-work-history-card',
  templateUrl: './work-history-card.component.html',
  styleUrls: ['./work-history-card.component.scss'],
})
export class WorkHistoryCardComponent {
  @Input() public source: Nullable<WorkHistory>;

  public options: CardOption[] = [];
  public controls: CardControl[] = [];
  public indicators: CardIndicator[] = [];

  public get title(): string {
    if (this.source) {
      return `WO# ${ this.source.workOrderNumber}`;
    }
    return '';
  }

  constructor(private antero: AnteroService) { }

  public showWorkHistoryViewer(): void {
    this.antero.openModal(Modals.WORK_HISTORY_VIEWER);
  }

  public getDateString(val: any): string {
    if (val) {
      return getDateString(val);
    }
    return '';
  }
}
