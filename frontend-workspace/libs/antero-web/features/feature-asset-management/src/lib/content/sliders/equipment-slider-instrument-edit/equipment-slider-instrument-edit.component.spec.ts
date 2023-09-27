import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentSliderInstrumentEditComponent } from './equipment-slider-instrument-edit.component';

describe('EquipmentSliderInstrumentEditComponent', () => {
  let component: EquipmentSliderInstrumentEditComponent;
  let fixture: ComponentFixture<EquipmentSliderInstrumentEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EquipmentSliderInstrumentEditComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EquipmentSliderInstrumentEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
