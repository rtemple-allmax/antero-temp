import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkViewerSliderToolDeleteComponent } from './work-viewer-slider-tool-delete.component';

describe('WorkViewerSliderToolDeleteComponent', () => {
  let component: WorkViewerSliderToolDeleteComponent;
  let fixture: ComponentFixture<WorkViewerSliderToolDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkViewerSliderToolDeleteComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkViewerSliderToolDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
