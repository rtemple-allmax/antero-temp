import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkHistoryPanelInformationComponent } from './work-history-panel-information.component';

describe('WorkHistoryPanelInformationComponent', () => {
  let component: WorkHistoryPanelInformationComponent;
  let fixture: ComponentFixture<WorkHistoryPanelInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkHistoryPanelInformationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkHistoryPanelInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
