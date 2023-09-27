import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkHistoryViewerComponent } from './work-history-viewer.component';

describe('WorkHistoryViewerComponent', () => {
  let component: WorkHistoryViewerComponent;
  let fixture: ComponentFixture<WorkHistoryViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkHistoryViewerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkHistoryViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
