import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkViewerSliderPartEditComponent } from './work-viewer-slider-part-edit.component';

describe('WorkViewerSliderPartEditComponent', () => {
  let component: WorkViewerSliderPartEditComponent;
  let fixture: ComponentFixture<WorkViewerSliderPartEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkViewerSliderPartEditComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkViewerSliderPartEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
