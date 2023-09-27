import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderingTabDetailsComponent } from './ordering-tab-details.component';

describe('OrderingTabDetailsComponent', () => {
  let component: OrderingTabDetailsComponent;
  let fixture: ComponentFixture<OrderingTabDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrderingTabDetailsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OrderingTabDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
