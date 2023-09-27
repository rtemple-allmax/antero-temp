import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderingTabActivityComponent } from './ordering-tab-activity.component';

describe('OrderingTabActivityComponent', () => {
  let component: OrderingTabActivityComponent;
  let fixture: ComponentFixture<OrderingTabActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrderingTabActivityComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OrderingTabActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
