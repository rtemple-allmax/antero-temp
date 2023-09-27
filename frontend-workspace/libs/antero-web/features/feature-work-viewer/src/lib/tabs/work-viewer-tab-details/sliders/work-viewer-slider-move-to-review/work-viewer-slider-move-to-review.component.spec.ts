import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkViewerSliderMoveToReviewComponent } from './work-viewer-slider-move-to-review.component';

describe('WorkViewerSliderMoveToReviewComponent', () => {
  let component: WorkViewerSliderMoveToReviewComponent;
  let fixture: ComponentFixture<WorkViewerSliderMoveToReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkViewerSliderMoveToReviewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkViewerSliderMoveToReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
