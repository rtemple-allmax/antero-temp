import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkViewerSliderEquipmentHistoryComponent } from './work-viewer-slider-equipment-history.component';

describe('WorkViewerSliderEquipmentHistoryComponent', () => {
  let component: WorkViewerSliderEquipmentHistoryComponent;
  let fixture: ComponentFixture<WorkViewerSliderEquipmentHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkViewerSliderEquipmentHistoryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      WorkViewerSliderEquipmentHistoryComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
