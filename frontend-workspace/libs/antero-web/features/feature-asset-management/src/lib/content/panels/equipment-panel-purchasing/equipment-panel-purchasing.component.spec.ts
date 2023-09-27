import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentPanelPurchasingComponent } from './equipment-panel-purchasing.component';

describe('EquipmentPanelPurchasingComponent', () => {
  let component: EquipmentPanelPurchasingComponent;
  let fixture: ComponentFixture<EquipmentPanelPurchasingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EquipmentPanelPurchasingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EquipmentPanelPurchasingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
