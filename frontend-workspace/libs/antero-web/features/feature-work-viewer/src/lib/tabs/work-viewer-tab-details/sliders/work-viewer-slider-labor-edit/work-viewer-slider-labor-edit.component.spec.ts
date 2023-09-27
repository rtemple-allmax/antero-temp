import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkViewerSliderLaborEditComponent } from './work-viewer-slider-labor-edit.component';

describe('WorkViewerSliderLaborEditComponent', () => {
  let component: WorkViewerSliderLaborEditComponent;
  let fixture: ComponentFixture<WorkViewerSliderLaborEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkViewerSliderLaborEditComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkViewerSliderLaborEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
