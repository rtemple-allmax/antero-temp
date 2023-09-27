import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartQuantityDeleteComponent } from './part-quantity-delete.component';

describe('PartQuantityDeleteComponent', () => {
  let component: PartQuantityDeleteComponent;
  let fixture: ComponentFixture<PartQuantityDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartQuantityDeleteComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PartQuantityDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
