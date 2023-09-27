import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartStockPanelComponent } from './part-stock-panel.component';

describe('PartStockPanelComponent', () => {
  let component: PartStockPanelComponent;
  let fixture: ComponentFixture<PartStockPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartStockPanelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PartStockPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
