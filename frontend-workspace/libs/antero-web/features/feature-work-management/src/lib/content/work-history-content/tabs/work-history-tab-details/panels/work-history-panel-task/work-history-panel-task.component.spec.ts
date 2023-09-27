import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkHistoryPanelTaskComponent } from './work-history-panel-task.component';

describe('WorkHistoryPanelTaskComponent', () => {
  let component: WorkHistoryPanelTaskComponent;
  let fixture: ComponentFixture<WorkHistoryPanelTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkHistoryPanelTaskComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkHistoryPanelTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
