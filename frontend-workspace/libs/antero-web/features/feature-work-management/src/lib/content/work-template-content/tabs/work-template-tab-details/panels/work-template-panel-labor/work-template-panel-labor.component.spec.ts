import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkTemplatePanelLaborComponent } from './work-template-panel-labor.component';

describe('WorkTemplatePanelLaborComponent', () => {
  let component: WorkTemplatePanelLaborComponent;
  let fixture: ComponentFixture<WorkTemplatePanelLaborComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkTemplatePanelLaborComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkTemplatePanelLaborComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
