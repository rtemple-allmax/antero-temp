import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkViewerTabActivityComponent } from './work-viewer-tab-activity.component';

describe('WorkViewerTabActivityComponent', () => {
  let component: WorkViewerTabActivityComponent;
  let fixture: ComponentFixture<WorkViewerTabActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkViewerTabActivityComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkViewerTabActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
