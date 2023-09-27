import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentSliderEnterReadingsComponent } from './equipment-slider-enter-readings.component';

describe('EquipmentSliderEnterReadingsComponent', () => {
  let component: EquipmentSliderEnterReadingsComponent;
  let fixture: ComponentFixture<EquipmentSliderEnterReadingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EquipmentSliderEnterReadingsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EquipmentSliderEnterReadingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
