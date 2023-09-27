import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkTemplatesLaborPanelComponent } from './work-templates-labor-panel.component';

describe('WorkTemplatesLaborPanelComponent', () => {
  let component: WorkTemplatesLaborPanelComponent;
  let fixture: ComponentFixture<WorkTemplatesLaborPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkTemplatesLaborPanelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkTemplatesLaborPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
