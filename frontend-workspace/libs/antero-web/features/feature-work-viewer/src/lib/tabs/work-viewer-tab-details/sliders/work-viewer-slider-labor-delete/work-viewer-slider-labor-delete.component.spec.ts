import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkViewerSliderLaborDeleteComponent } from './work-viewer-slider-labor-delete.component';

describe('WorkViewerSliderLaborDeleteComponent', () => {
  let component: WorkViewerSliderLaborDeleteComponent;
  let fixture: ComponentFixture<WorkViewerSliderLaborDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkViewerSliderLaborDeleteComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkViewerSliderLaborDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
