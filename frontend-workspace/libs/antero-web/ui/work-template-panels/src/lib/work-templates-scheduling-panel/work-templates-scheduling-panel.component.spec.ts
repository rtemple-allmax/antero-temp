import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkTemplatesSchedulingPanelComponent } from './work-templates-scheduling-panel.component';

describe('WorkTemplatesSchedulingPanelComponent', () => {
  let component: WorkTemplatesSchedulingPanelComponent;
  let fixture: ComponentFixture<WorkTemplatesSchedulingPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkTemplatesSchedulingPanelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkTemplatesSchedulingPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
