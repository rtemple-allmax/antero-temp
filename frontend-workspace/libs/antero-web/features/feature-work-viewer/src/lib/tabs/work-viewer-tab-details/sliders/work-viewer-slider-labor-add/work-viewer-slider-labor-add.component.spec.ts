import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkViewerSliderLaborAddComponent } from './work-viewer-slider-labor-add.component';

describe('WorkViewerSliderLaborAddComponent', () => {
  let component: WorkViewerSliderLaborAddComponent;
  let fixture: ComponentFixture<WorkViewerSliderLaborAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkViewerSliderLaborAddComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkViewerSliderLaborAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
