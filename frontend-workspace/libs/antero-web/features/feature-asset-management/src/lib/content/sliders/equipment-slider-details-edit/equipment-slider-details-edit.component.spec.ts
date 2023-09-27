import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentSliderDetailsEditComponent } from './equipment-slider-details-edit.component';

describe('EquipmentSliderDetailsEditComponent', () => {
  let component: EquipmentSliderDetailsEditComponent;
  let fixture: ComponentFixture<EquipmentSliderDetailsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EquipmentSliderDetailsEditComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EquipmentSliderDetailsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
