import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentSliderInstrumentAddComponent } from './equipment-slider-instrument-add.component';

describe('EquipmentSliderInstrumentAddComponent', () => {
  let component: EquipmentSliderInstrumentAddComponent;
  let fixture: ComponentFixture<EquipmentSliderInstrumentAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EquipmentSliderInstrumentAddComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EquipmentSliderInstrumentAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
