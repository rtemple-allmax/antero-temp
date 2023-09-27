import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkViewerSliderContractorAddComponent } from './work-viewer-slider-contractor-add.component';

describe('WorkViewerSliderContractorAddComponent', () => {
  let component: WorkViewerSliderContractorAddComponent;
  let fixture: ComponentFixture<WorkViewerSliderContractorAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkViewerSliderContractorAddComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkViewerSliderContractorAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
