import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderingPanelTransactionsComponent } from './ordering-panel-transactions.component';

describe('OrderingPanelTransactionsComponent', () => {
  let component: OrderingPanelTransactionsComponent;
  let fixture: ComponentFixture<OrderingPanelTransactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrderingPanelTransactionsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OrderingPanelTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
