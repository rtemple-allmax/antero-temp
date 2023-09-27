import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentSliderImageDeleteComponent } from './equipment-slider-image-delete.component';

describe('EquipmentSliderImageDeleteComponent', () => {
  let component: EquipmentSliderImageDeleteComponent;
  let fixture: ComponentFixture<EquipmentSliderImageDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EquipmentSliderImageDeleteComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EquipmentSliderImageDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
