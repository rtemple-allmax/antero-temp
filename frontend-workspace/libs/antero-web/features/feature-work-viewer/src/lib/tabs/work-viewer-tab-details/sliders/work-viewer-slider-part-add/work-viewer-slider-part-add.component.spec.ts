import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkViewerSliderPartAddComponent } from './work-viewer-slider-part-add.component';

describe('WorkViewerSliderPartAddComponent', () => {
  let component: WorkViewerSliderPartAddComponent;
  let fixture: ComponentFixture<WorkViewerSliderPartAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkViewerSliderPartAddComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkViewerSliderPartAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
