import { HistoryTimeFrames, TimeFrameTypes } from '@allmax-angular/shared/utils';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'amx-date-range-box',
  templateUrl: './date-range-box.component.html',
  styles: []
})
export class DateRangeBoxComponent implements OnInit {
  public timeFrameType = TimeFrameTypes.HISTORY;

  public items: any[] = [];

  public value: number | string = 0;

  @Output() public rangeChanged = new EventEmitter<any>();

  public ngOnInit(): void {
    if (this.timeFrameType === TimeFrameTypes.HISTORY) {
      this.items = [
        { displayName: 'All', id: HistoryTimeFrames.ALL },
        { displayName: '30 days', id: HistoryTimeFrames.THIRTY_DAYS },
        { displayName: '3 months', id: HistoryTimeFrames.THREE_MONTHS },
        { displayName: '6 months', id: HistoryTimeFrames.SIX_MONTHS },
        { displayName: '1 year', id: HistoryTimeFrames.ONE_YEAR },
        { displayName: '3 years', id: HistoryTimeFrames.THREE_YEARS },
        { displayName: '5 years', id: HistoryTimeFrames.FIVE_YEARS },
        { displayName: 'Custom', id: HistoryTimeFrames.CUSTOM }
      ];
    }
  }

  public itemClickHandler(e: any): void {
    this.value = e.itemData.id;
    this.rangeChanged.emit(e.itemData);
  }

  public setValue(val: number | string): void {
    this.value = val;
  }
}
