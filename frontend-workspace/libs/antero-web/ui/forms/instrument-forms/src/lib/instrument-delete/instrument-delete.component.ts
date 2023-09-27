import { CrudFunctions } from '@allmax-angular/shared/types';
import { Component, OnInit } from '@angular/core';
import { InstrumentFormBaseComponent } from '../instrument-form.base';

@Component({
  selector: 'ant-instrument-delete',
  templateUrl: './instrument-delete.component.html',
  styleUrls: ['./instrument-delete.component.scss'],
})
export class InstrumentDeleteComponent extends InstrumentFormBaseComponent implements OnInit {
  public ngOnInit(): void {
    this.crud = CrudFunctions.DELETE;
  }

  public submit(): void {
    if (this.source) {
      this.deleteRequested.emit(this.source);
    }
  }
}
