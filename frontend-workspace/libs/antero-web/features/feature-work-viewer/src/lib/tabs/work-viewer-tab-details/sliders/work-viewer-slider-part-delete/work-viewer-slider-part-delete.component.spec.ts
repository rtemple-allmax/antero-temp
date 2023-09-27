import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkViewerSliderPartDeleteComponent } from './work-viewer-slider-part-delete.component';

describe('WorkViewerSliderPartDeleteComponent', () => {
  let component: WorkViewerSliderPartDeleteComponent;
  let fixture: ComponentFixture<WorkViewerSliderPartDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkViewerSliderPartDeleteComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkViewerSliderPartDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
