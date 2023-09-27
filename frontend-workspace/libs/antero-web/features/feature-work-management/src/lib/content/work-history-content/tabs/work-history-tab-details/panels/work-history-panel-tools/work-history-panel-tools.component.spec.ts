import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkHistoryPanelToolsComponent } from './work-history-panel-tools.component';

describe('WorkHistoryPanelToolsComponent', () => {
  let component: WorkHistoryPanelToolsComponent;
  let fixture: ComponentFixture<WorkHistoryPanelToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkHistoryPanelToolsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkHistoryPanelToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
