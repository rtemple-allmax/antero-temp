import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseOrderPartListItemComponent } from './purchase-order-part-list-item.component';

describe('PurchaseOrderPartListItemComponent', () => {
  let component: PurchaseOrderPartListItemComponent;
  let fixture: ComponentFixture<PurchaseOrderPartListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PurchaseOrderPartListItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PurchaseOrderPartListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
