import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkViewerSliderMiscAddComponent } from './work-viewer-slider-misc-add.component';

describe('WorkViewerSliderMiscAddComponent', () => {
  let component: WorkViewerSliderMiscAddComponent;
  let fixture: ComponentFixture<WorkViewerSliderMiscAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkViewerSliderMiscAddComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkViewerSliderMiscAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
