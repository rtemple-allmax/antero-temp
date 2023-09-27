import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkHistoryPanelPartsComponent } from './work-history-panel-parts.component';

describe('WorkHistoryPanelPartsComponent', () => {
  let component: WorkHistoryPanelPartsComponent;
  let fixture: ComponentFixture<WorkHistoryPanelPartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkHistoryPanelPartsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkHistoryPanelPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
