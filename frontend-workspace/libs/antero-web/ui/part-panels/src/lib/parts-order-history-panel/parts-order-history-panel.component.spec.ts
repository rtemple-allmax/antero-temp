import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartsOrderHistoryPanelComponent } from './parts-order-history-panel.component';

describe('PartsOrderHistoryPanelComponent', () => {
  let component: PartsOrderHistoryPanelComponent;
  let fixture: ComponentFixture<PartsOrderHistoryPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartsOrderHistoryPanelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PartsOrderHistoryPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
