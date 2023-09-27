import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkViewerSliderChecklistComponent } from './work-viewer-slider-checklist.component';

describe('WorkViewerSliderChecklistComponent', () => {
  let component: WorkViewerSliderChecklistComponent;
  let fixture: ComponentFixture<WorkViewerSliderChecklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkViewerSliderChecklistComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkViewerSliderChecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
