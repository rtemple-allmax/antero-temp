import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkViewerSliderEquipmentDowntimeComponent } from './work-viewer-slider-equipment-downtime.component';

describe('WorkViewerSliderEquipmentDowntimeComponent', () => {
  let component: WorkViewerSliderEquipmentDowntimeComponent;
  let fixture: ComponentFixture<WorkViewerSliderEquipmentDowntimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkViewerSliderEquipmentDowntimeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      WorkViewerSliderEquipmentDowntimeComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
