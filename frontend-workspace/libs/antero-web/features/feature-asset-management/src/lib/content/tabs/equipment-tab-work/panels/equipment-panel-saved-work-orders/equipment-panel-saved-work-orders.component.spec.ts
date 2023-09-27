import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentPanelSavedWorkOrdersComponent } from './equipment-panel-saved-work-orders.component';

describe('EquipmentPanelSavedWorkOrdersComponent', () => {
  let component: EquipmentPanelSavedWorkOrdersComponent;
  let fixture: ComponentFixture<EquipmentPanelSavedWorkOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EquipmentPanelSavedWorkOrdersComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EquipmentPanelSavedWorkOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
