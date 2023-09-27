import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartQuantityEditComponent } from './part-quantity-edit.component';

describe('PartQuantityEditComponent', () => {
  let component: PartQuantityEditComponent;
  let fixture: ComponentFixture<PartQuantityEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartQuantityEditComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PartQuantityEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
