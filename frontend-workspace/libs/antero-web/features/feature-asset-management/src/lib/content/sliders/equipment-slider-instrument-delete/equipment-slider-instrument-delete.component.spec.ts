import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentSliderInstrumentDeleteComponent } from './equipment-slider-instrument-delete.component';

describe('EquipmentSliderInstrumentDeleteComponent', () => {
  let component: EquipmentSliderInstrumentDeleteComponent;
  let fixture: ComponentFixture<EquipmentSliderInstrumentDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EquipmentSliderInstrumentDeleteComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EquipmentSliderInstrumentDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
