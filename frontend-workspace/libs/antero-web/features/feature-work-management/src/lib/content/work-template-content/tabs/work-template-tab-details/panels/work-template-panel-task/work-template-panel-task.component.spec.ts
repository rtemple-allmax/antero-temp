import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkTemplatePanelTaskComponent } from './work-template-panel-task.component';

describe('WorkTemplatePanelTaskComponent', () => {
  let component: WorkTemplatePanelTaskComponent;
  let fixture: ComponentFixture<WorkTemplatePanelTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkTemplatePanelTaskComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkTemplatePanelTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
