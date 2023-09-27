import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartsWorkHistoryPanelComponent } from './parts-work-history-panel.component';

describe('PartsWorkHistoryPanelComponent', () => {
  let component: PartsWorkHistoryPanelComponent;
  let fixture: ComponentFixture<PartsWorkHistoryPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartsWorkHistoryPanelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PartsWorkHistoryPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
