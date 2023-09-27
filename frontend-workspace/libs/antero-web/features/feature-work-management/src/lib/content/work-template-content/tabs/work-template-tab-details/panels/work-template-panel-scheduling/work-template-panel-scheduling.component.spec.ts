import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkTemplatePanelSchedulingComponent } from './work-template-panel-scheduling.component';

describe('WorkTemplatePanelSchedulingComponent', () => {
  let component: WorkTemplatePanelSchedulingComponent;
  let fixture: ComponentFixture<WorkTemplatePanelSchedulingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkTemplatePanelSchedulingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkTemplatePanelSchedulingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
