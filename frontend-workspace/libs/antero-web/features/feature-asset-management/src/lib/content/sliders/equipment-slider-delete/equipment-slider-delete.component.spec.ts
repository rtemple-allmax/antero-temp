import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentSliderDeleteComponent } from './equipment-slider-delete.component';

describe('EquipmentSliderDeleteComponent', () => {
  let component: EquipmentSliderDeleteComponent;
  let fixture: ComponentFixture<EquipmentSliderDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EquipmentSliderDeleteComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EquipmentSliderDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
