import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierPartListItemComponent } from './supplier-part-list-item.component';

describe('SupplierPartListItemComponent', () => {
  let component: SupplierPartListItemComponent;
  let fixture: ComponentFixture<SupplierPartListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SupplierPartListItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SupplierPartListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
