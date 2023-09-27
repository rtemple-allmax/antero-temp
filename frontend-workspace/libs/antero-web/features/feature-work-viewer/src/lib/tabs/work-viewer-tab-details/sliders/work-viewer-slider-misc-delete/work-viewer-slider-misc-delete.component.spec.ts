import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkViewerSliderMiscDeleteComponent } from './work-viewer-slider-misc-delete.component';

describe('WorkViewerSliderMiscDeleteComponent', () => {
  let component: WorkViewerSliderMiscDeleteComponent;
  let fixture: ComponentFixture<WorkViewerSliderMiscDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkViewerSliderMiscDeleteComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkViewerSliderMiscDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
