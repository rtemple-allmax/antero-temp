import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkHistoryPanelContractorsComponent } from './work-history-panel-contractors.component';

describe('WorkHistoryPanelContractorsComponent', () => {
  let component: WorkHistoryPanelContractorsComponent;
  let fixture: ComponentFixture<WorkHistoryPanelContractorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkHistoryPanelContractorsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkHistoryPanelContractorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
