import { Component, OnInit } from '@angular/core';
import { SupplierPartFormBaseComponent } from '../supplier-part-form.base';

@Component({
  selector: 'ant-supplier-part-edit',
  templateUrl: './supplier-part-edit.component.html',
  styleUrls: ['./supplier-part-edit.component.scss'],
})
export class SupplierPartEditComponent extends SupplierPartFormBaseComponent implements OnInit {

  public heading = 'Edit Supplier';

  public ngOnInit(): void {
    this.subs.push(this.partsStore.selectedSupplier$.subscribe(x => {
      this.source = x;
      if (this.source) {
        this.heading = `Edit ${ this.source.supplier?.name }`;
      }
      this.populate();
    }))
  }
}
