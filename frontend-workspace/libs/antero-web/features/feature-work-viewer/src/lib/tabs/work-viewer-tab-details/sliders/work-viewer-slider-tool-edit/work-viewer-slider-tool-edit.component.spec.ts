import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkViewerSliderToolEditComponent } from './work-viewer-slider-tool-edit.component';

describe('WorkViewerSliderToolEditComponent', () => {
  let component: WorkViewerSliderToolEditComponent;
  let fixture: ComponentFixture<WorkViewerSliderToolEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkViewerSliderToolEditComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkViewerSliderToolEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
