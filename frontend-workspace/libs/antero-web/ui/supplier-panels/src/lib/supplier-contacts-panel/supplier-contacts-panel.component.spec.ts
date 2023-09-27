import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierContactsPanelComponent } from './supplier-contacts-panel.component';

describe('SupplierContactsPanelComponent', () => {
  let component: SupplierContactsPanelComponent;
  let fixture: ComponentFixture<SupplierContactsPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SupplierContactsPanelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SupplierContactsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
