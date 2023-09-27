import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkTemplatesToolsPanelComponent } from './work-templates-tools-panel.component';

describe('WorkTemplatesToolsPanelComponent', () => {
  let component: WorkTemplatesToolsPanelComponent;
  let fixture: ComponentFixture<WorkTemplatesToolsPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkTemplatesToolsPanelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkTemplatesToolsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
