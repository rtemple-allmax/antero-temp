import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentEditPurchasingComponent } from './equipment-edit-purchasing.component';

describe('EquipmentEditPurchasingComponent', () => {
  let component: EquipmentEditPurchasingComponent;
  let fixture: ComponentFixture<EquipmentEditPurchasingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EquipmentEditPurchasingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EquipmentEditPurchasingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
