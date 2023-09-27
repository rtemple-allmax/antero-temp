import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartsSuppliersPanelComponent } from './parts-suppliers-panel.component';

describe('PartsSuppliersPanelComponent', () => {
  let component: PartsSuppliersPanelComponent;
  let fixture: ComponentFixture<PartsSuppliersPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartsSuppliersPanelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PartsSuppliersPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
