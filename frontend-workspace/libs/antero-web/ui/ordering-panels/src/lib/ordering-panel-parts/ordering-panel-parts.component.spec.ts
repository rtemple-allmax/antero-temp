import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderingPanelPartsComponent } from './ordering-panel-parts.component';

describe('OrderingPanelPartsComponent', () => {
  let component: OrderingPanelPartsComponent;
  let fixture: ComponentFixture<OrderingPanelPartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrderingPanelPartsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OrderingPanelPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
