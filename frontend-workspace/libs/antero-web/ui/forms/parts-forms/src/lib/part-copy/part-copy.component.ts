import { Component, OnInit, AfterViewInit } from '@angular/core';
import { PartFormBaseComponent } from '../parts-form.base';

@Component({
  selector: 'ant-part-copy',
  templateUrl: './part-copy.component.html',
  styleUrls: ['./part-copy.component.scss'],
})
export class PartCopyComponent extends PartFormBaseComponent implements AfterViewInit {

  public get heading (): string  {
    return `Copy from ${ this.source ? this.source.name : 'Part' }`
  }

  public ngAfterViewInit(): void {
    this.subs.push(this.partsStore.selection$.subscribe(x => {
      this.source = x;
      this.populate(false);
    }))
  }
}
