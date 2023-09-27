import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierContactListItemComponent } from './supplier-contact-list-item.component';

describe('SupplierContactListItemComponent', () => {
  let component: SupplierContactListItemComponent;
  let fixture: ComponentFixture<SupplierContactListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SupplierContactListItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SupplierContactListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
