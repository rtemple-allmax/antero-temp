import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentPurchasingPanelComponent } from './equipment-purchasing-panel.component';

describe('EquipmentPurchasingPanelComponent', () => {
  let component: EquipmentPurchasingPanelComponent;
  let fixture: ComponentFixture<EquipmentPurchasingPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EquipmentPurchasingPanelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EquipmentPurchasingPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
