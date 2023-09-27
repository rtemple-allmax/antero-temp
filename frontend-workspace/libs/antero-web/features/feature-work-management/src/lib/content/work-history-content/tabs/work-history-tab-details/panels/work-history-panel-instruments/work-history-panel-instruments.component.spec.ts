import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkHistoryPanelInstrumentsComponent } from './work-history-panel-instruments.component';

describe('WorkHistoryPanelInstrumentsComponent', () => {
  let component: WorkHistoryPanelInstrumentsComponent;
  let fixture: ComponentFixture<WorkHistoryPanelInstrumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkHistoryPanelInstrumentsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkHistoryPanelInstrumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
