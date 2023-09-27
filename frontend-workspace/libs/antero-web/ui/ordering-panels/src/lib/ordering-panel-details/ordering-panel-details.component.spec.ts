import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderingPanelDetailsComponent } from './ordering-panel-details.component';

describe('OrderingPanelDetailsComponent', () => {
  let component: OrderingPanelDetailsComponent;
  let fixture: ComponentFixture<OrderingPanelDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrderingPanelDetailsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OrderingPanelDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
