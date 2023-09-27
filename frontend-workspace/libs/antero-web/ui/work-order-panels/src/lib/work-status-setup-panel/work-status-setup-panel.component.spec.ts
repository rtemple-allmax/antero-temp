import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkStatusSetupPanelComponent } from './work-status-setup-panel.component';

describe('WorkStatusSetupPanelComponent', () => {
  let component: WorkStatusSetupPanelComponent;
  let fixture: ComponentFixture<WorkStatusSetupPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkStatusSetupPanelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkStatusSetupPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
