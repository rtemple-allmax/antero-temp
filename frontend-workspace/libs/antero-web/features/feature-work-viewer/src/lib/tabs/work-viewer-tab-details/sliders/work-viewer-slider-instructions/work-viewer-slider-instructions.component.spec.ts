import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkViewerSliderInstructionsComponent } from './work-viewer-slider-instructions.component';

describe('WorkViewerSliderInstructionsComponent', () => {
  let component: WorkViewerSliderInstructionsComponent;
  let fixture: ComponentFixture<WorkViewerSliderInstructionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkViewerSliderInstructionsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkViewerSliderInstructionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
