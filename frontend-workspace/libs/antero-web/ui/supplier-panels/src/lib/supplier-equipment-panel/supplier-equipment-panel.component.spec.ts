import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierEquipmentPanelComponent } from './supplier-equipment-panel.component';

describe('SupplierEquipmentPanelComponent', () => {
  let component: SupplierEquipmentPanelComponent;
  let fixture: ComponentFixture<SupplierEquipmentPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SupplierEquipmentPanelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SupplierEquipmentPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
