import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartsTransferHistoryPanelComponent } from './parts-transfer-history-panel.component';

describe('PartsTransferHistoryPanelComponent', () => {
  let component: PartsTransferHistoryPanelComponent;
  let fixture: ComponentFixture<PartsTransferHistoryPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartsTransferHistoryPanelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PartsTransferHistoryPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
