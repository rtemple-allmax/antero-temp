import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentSliderInServiceHistoryComponent } from './equipment-slider-in-service-history.component';

describe('EquipmentSliderInServiceHistoryComponent', () => {
  let component: EquipmentSliderInServiceHistoryComponent;
  let fixture: ComponentFixture<EquipmentSliderInServiceHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EquipmentSliderInServiceHistoryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EquipmentSliderInServiceHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
