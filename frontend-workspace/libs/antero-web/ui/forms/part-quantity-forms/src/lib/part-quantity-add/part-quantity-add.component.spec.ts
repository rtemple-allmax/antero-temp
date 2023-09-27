import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartQuantityAddComponent } from './part-quantity-add.component';

describe('PartQuantityAddComponent', () => {
  let component: PartQuantityAddComponent;
  let fixture: ComponentFixture<PartQuantityAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartQuantityAddComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PartQuantityAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
