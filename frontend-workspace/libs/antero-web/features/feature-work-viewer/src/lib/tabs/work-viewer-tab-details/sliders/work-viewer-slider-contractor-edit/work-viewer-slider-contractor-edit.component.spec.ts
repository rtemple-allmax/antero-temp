import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkViewerSliderContractorEditComponent } from './work-viewer-slider-contractor-edit.component';

describe('WorkViewerSliderContractorEditComponent', () => {
  let component: WorkViewerSliderContractorEditComponent;
  let fixture: ComponentFixture<WorkViewerSliderContractorEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkViewerSliderContractorEditComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkViewerSliderContractorEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
