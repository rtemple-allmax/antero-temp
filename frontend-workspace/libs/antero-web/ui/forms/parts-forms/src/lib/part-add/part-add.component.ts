import { TrackingTypes, trackingTypesToLabelsMap } from '@allmax-angular/antero-web/types';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { PartFormBaseComponent } from '../parts-form.base';

@Component({
  selector: 'ant-part-add',
  templateUrl: './part-add.component.html',
  styleUrls: ['./part-add.component.scss'],
})
export class PartAddComponent extends PartFormBaseComponent implements AfterViewInit {
  public ngAfterViewInit(): void {
    this.trackingTypeBinding.set(trackingTypesToLabelsMap.get(TrackingTypes.TRACKED));
    this.cdr.detectChanges();
  }
}
