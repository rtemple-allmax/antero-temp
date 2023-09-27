import { Transaction } from '@allmax-angular/antero-web/entities';
import { Nullable } from '@allmax-angular/shared/types';
import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { ListItemBaseComponent } from '../list-item.base';

@Component({
  selector: 'ant-transaction-list-item',
  templateUrl: './transaction-list-item.component.html',
  styleUrls: ['./transaction-list-item.component.scss'],
})
export class TransactionListItemComponent extends ListItemBaseComponent implements OnInit {
  @Input() public record: Nullable<any>;

  public ngOnInit(): void {
    console.log('test')
      console.log('transaction list item', this.record)
  }
}
