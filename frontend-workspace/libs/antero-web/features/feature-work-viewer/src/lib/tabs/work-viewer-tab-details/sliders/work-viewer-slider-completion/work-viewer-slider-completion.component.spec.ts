import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkViewerSliderCompletionComponent } from './work-viewer-slider-completion.component';

describe('WorkViewerSliderCompletionComponent', () => {
  let component: WorkViewerSliderCompletionComponent;
  let fixture: ComponentFixture<WorkViewerSliderCompletionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkViewerSliderCompletionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkViewerSliderCompletionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
