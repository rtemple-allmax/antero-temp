import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentSliderPurchasingEditComponent } from './equipment-slider-purchasing-edit.component';

describe('EquipmentSliderPurchasingEditComponent', () => {
  let component: EquipmentSliderPurchasingEditComponent;
  let fixture: ComponentFixture<EquipmentSliderPurchasingEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EquipmentSliderPurchasingEditComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EquipmentSliderPurchasingEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
