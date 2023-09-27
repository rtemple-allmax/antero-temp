import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkTypeSetupPanelComponent } from './work-type-setup-panel.component';

describe('WorkTypeSetupPanelComponent', () => {
  let component: WorkTypeSetupPanelComponent;
  let fixture: ComponentFixture<WorkTypeSetupPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkTypeSetupPanelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkTypeSetupPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
