import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkHistoryPanelLaborComponent } from './work-history-panel-labor.component';

describe('WorkHistoryPanelLaborComponent', () => {
  let component: WorkHistoryPanelLaborComponent;
  let fixture: ComponentFixture<WorkHistoryPanelLaborComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkHistoryPanelLaborComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkHistoryPanelLaborComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
