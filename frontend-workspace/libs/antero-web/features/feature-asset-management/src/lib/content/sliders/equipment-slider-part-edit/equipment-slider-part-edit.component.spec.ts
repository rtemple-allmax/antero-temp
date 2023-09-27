import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentSliderPartEditComponent } from './equipment-slider-part-edit.component';

describe('EquipmentSliderPartEditComponent', () => {
  let component: EquipmentSliderPartEditComponent;
  let fixture: ComponentFixture<EquipmentSliderPartEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EquipmentSliderPartEditComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EquipmentSliderPartEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
