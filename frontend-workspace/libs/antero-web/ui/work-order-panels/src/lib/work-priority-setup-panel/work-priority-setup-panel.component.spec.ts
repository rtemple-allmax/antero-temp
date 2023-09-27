import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkPrioritySetupPanelComponent } from './work-priority-setup-panel.component';

describe('WorkPrioritySetupPanelComponent', () => {
  let component: WorkPrioritySetupPanelComponent;
  let fixture: ComponentFixture<WorkPrioritySetupPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkPrioritySetupPanelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkPrioritySetupPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
