import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentSliderReadingHistoryComponent } from './equipment-slider-reading-history.component';

describe('EquipmentSliderReadingHistoryComponent', () => {
  let component: EquipmentSliderReadingHistoryComponent;
  let fixture: ComponentFixture<EquipmentSliderReadingHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EquipmentSliderReadingHistoryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EquipmentSliderReadingHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
