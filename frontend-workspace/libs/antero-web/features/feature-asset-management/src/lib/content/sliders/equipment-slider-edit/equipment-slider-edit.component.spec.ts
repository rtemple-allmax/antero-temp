import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentSliderEditComponent } from './equipment-slider-edit.component';

describe('EquipmentSliderEditComponent', () => {
  let component: EquipmentSliderEditComponent;
  let fixture: ComponentFixture<EquipmentSliderEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EquipmentSliderEditComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EquipmentSliderEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
