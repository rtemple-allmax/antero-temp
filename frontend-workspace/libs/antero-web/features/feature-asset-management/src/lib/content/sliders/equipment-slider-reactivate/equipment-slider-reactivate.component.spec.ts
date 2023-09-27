import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentSliderReactivateComponent } from './equipment-slider-reactivate.component';

describe('EquipmentSliderReactivateComponent', () => {
  let component: EquipmentSliderReactivateComponent;
  let fixture: ComponentFixture<EquipmentSliderReactivateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EquipmentSliderReactivateComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EquipmentSliderReactivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
