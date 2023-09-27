import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierActivityPanelComponent } from './supplier-activity-panel.component';

describe('SupplierActivityPanelComponent', () => {
  let component: SupplierActivityPanelComponent;
  let fixture: ComponentFixture<SupplierActivityPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SupplierActivityPanelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SupplierActivityPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
