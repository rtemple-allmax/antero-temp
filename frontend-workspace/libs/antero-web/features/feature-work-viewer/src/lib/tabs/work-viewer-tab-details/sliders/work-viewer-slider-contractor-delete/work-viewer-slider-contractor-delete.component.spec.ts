import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkViewerSliderContractorDeleteComponent } from './work-viewer-slider-contractor-delete.component';

describe('WorkViewerSliderContractorDeleteComponent', () => {
  let component: WorkViewerSliderContractorDeleteComponent;
  let fixture: ComponentFixture<WorkViewerSliderContractorDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkViewerSliderContractorDeleteComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      WorkViewerSliderContractorDeleteComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
