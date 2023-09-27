import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentSliderMyDataEditComponent } from './equipment-slider-my-data-edit.component';

describe('EquipmentSliderMyDataEditComponent', () => {
  let component: EquipmentSliderMyDataEditComponent;
  let fixture: ComponentFixture<EquipmentSliderMyDataEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EquipmentSliderMyDataEditComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EquipmentSliderMyDataEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
