import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkViewerSliderAdminComponent } from './work-viewer-slider-admin.component';

describe('WorkViewerSliderAdminComponent', () => {
  let component: WorkViewerSliderAdminComponent;
  let fixture: ComponentFixture<WorkViewerSliderAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkViewerSliderAdminComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkViewerSliderAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
