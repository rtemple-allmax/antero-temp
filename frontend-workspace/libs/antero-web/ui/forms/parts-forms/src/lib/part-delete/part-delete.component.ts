import { Component, OnInit, AfterViewInit } from '@angular/core';
import { PartFormBaseComponent } from '../parts-form.base';

@Component({
  selector: 'ant-part-delete',
  templateUrl: './part-delete.component.html',
  styleUrls: ['./part-delete.component.scss'],
})
export class PartDeleteComponent extends PartFormBaseComponent implements AfterViewInit {
  public ngAfterViewInit(): void {
    this.subs.push(this.partsStore.selection$.subscribe(x => this.source = x));
  }
}
