import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkHistoryPanelMiscComponent } from './work-history-panel-misc.component';

describe('WorkHistoryPanelMiscComponent', () => {
  let component: WorkHistoryPanelMiscComponent;
  let fixture: ComponentFixture<WorkHistoryPanelMiscComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkHistoryPanelMiscComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkHistoryPanelMiscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
