import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferStockToolComponent } from './transfer-stock-tool.component';

describe('TransferStockToolComponent', () => {
  let component: TransferStockToolComponent;
  let fixture: ComponentFixture<TransferStockToolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransferStockToolComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TransferStockToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
