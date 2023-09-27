import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentSliderAddComponent } from './equipment-slider-add.component';

describe('EquipmentSliderAddComponent', () => {
  let component: EquipmentSliderAddComponent;
  let fixture: ComponentFixture<EquipmentSliderAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EquipmentSliderAddComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EquipmentSliderAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
