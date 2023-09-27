import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentSliderCustomFieldsEditComponent } from './equipment-slider-custom-fields-edit.component';

describe('EquipmentSliderCustomFieldsEditComponent', () => {
  let component: EquipmentSliderCustomFieldsEditComponent;
  let fixture: ComponentFixture<EquipmentSliderCustomFieldsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EquipmentSliderCustomFieldsEditComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EquipmentSliderCustomFieldsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
