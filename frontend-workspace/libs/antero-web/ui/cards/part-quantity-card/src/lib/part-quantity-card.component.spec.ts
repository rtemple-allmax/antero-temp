import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartQuantityCardComponent } from './part-quantity-card.component';

describe('PartQuantityCardComponent', () => {
  let component: PartQuantityCardComponent;
  let fixture: ComponentFixture<PartQuantityCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartQuantityCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PartQuantityCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
