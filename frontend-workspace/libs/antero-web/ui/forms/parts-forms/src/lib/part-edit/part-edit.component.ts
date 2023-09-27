import { Component, AfterViewInit } from '@angular/core';
import { PartFormBaseComponent } from '../parts-form.base';

@Component({
  selector: 'ant-part-edit',
  templateUrl: './part-edit.component.html',
  styleUrls: ['./part-edit.component.scss'],
})
export class PartEditComponent extends PartFormBaseComponent implements AfterViewInit {
  public ngAfterViewInit(): void {
    this.subs.push(this.partsStore.selection$.subscribe(x => {
      this.source = x;
      this.populate();
    }))
  }
}
