import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentSliderInServiceComponent } from './equipment-slider-in-service.component';

describe('EquipmentSliderInServiceComponent', () => {
  let component: EquipmentSliderInServiceComponent;
  let fixture: ComponentFixture<EquipmentSliderInServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EquipmentSliderInServiceComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EquipmentSliderInServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
