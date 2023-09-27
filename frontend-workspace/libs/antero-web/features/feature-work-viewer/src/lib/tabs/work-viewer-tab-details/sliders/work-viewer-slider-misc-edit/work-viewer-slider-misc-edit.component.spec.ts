import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkViewerSliderMiscEditComponent } from './work-viewer-slider-misc-edit.component';

describe('WorkViewerSliderMiscEditComponent', () => {
  let component: WorkViewerSliderMiscEditComponent;
  let fixture: ComponentFixture<WorkViewerSliderMiscEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkViewerSliderMiscEditComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkViewerSliderMiscEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
