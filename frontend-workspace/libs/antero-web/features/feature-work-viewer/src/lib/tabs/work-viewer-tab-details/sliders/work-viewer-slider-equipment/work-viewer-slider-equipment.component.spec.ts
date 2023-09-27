import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkViewerSliderEquipmentComponent } from './work-viewer-slider-equipment.component';

describe('WorkViewerSliderEquipmentComponent', () => {
  let component: WorkViewerSliderEquipmentComponent;
  let fixture: ComponentFixture<WorkViewerSliderEquipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkViewerSliderEquipmentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkViewerSliderEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
