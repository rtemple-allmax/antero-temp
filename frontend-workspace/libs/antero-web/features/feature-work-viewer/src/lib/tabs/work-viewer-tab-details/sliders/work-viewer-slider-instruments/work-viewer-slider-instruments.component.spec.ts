import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkViewerSliderInstrumentsComponent } from './work-viewer-slider-instruments.component';

describe('WorkViewerSliderInstrumentsComponent', () => {
  let component: WorkViewerSliderInstrumentsComponent;
  let fixture: ComponentFixture<WorkViewerSliderInstrumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkViewerSliderInstrumentsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkViewerSliderInstrumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
