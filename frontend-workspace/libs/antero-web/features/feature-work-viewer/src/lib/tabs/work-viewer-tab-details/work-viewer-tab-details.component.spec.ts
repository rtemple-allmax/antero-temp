import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkViewerTabDetailsComponent } from './work-viewer-tab-details.component';

describe('WorkViewerTabDetailsComponent', () => {
  let component: WorkViewerTabDetailsComponent;
  let fixture: ComponentFixture<WorkViewerTabDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkViewerTabDetailsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkViewerTabDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
