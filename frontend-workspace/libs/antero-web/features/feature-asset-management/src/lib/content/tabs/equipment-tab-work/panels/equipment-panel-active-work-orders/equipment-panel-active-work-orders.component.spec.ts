import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentPanelActiveWorkOrdersComponent } from './equipment-panel-active-work-orders.component';

describe('EquipmentPanelActiveWorkOrdersComponent', () => {
  let component: EquipmentPanelActiveWorkOrdersComponent;
  let fixture: ComponentFixture<EquipmentPanelActiveWorkOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EquipmentPanelActiveWorkOrdersComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EquipmentPanelActiveWorkOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
