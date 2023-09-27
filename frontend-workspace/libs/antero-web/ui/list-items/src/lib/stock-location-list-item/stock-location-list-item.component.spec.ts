import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockLocationListItemComponent } from './stock-location-list-item.component';

describe('StockLocationListItemComponent', () => {
  let component: StockLocationListItemComponent;
  let fixture: ComponentFixture<StockLocationListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StockLocationListItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StockLocationListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
