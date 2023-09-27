import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkTemplatesDetailsPanelComponent } from './work-templates-details-panel.component';

describe('WorkTemplatesDetailsPanelComponent', () => {
  let component: WorkTemplatesDetailsPanelComponent;
  let fixture: ComponentFixture<WorkTemplatesDetailsPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkTemplatesDetailsPanelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkTemplatesDetailsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
