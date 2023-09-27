import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkViewerSliderToolAddComponent } from './work-viewer-slider-tool-add.component';

describe('WorkViewerSliderToolAddComponent', () => {
  let component: WorkViewerSliderToolAddComponent;
  let fixture: ComponentFixture<WorkViewerSliderToolAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkViewerSliderToolAddComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkViewerSliderToolAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
