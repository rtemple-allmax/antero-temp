import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderingActivityPanelComponent } from './ordering-activity-panel.component';

describe('OrderingActivityPanelComponent', () => {
  let component: OrderingActivityPanelComponent;
  let fixture: ComponentFixture<OrderingActivityPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrderingActivityPanelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OrderingActivityPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
