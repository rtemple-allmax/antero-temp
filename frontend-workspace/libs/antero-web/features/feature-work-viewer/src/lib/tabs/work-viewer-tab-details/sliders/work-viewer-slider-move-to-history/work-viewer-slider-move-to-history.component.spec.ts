import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkViewerSliderMoveToHistoryComponent } from './work-viewer-slider-move-to-history.component';

describe('WorkViewerSliderMoveToHistoryComponent', () => {
  let component: WorkViewerSliderMoveToHistoryComponent;
  let fixture: ComponentFixture<WorkViewerSliderMoveToHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkViewerSliderMoveToHistoryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkViewerSliderMoveToHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
