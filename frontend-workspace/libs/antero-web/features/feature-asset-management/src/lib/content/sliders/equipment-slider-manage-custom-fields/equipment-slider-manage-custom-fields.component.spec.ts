import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentSliderManageCustomFieldsComponent } from './equipment-slider-manage-custom-fields.component';

describe('EquipmentSliderManageCustomFieldsComponent', () => {
  let component: EquipmentSliderManageCustomFieldsComponent;
  let fixture: ComponentFixture<EquipmentSliderManageCustomFieldsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EquipmentSliderManageCustomFieldsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      EquipmentSliderManageCustomFieldsComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
