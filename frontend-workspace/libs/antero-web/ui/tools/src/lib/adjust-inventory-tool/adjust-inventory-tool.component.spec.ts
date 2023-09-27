import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdjustInventoryToolComponent } from './adjust-inventory-tool.component';

describe('AdjustInventoryToolComponent', () => {
  let component: AdjustInventoryToolComponent;
  let fixture: ComponentFixture<AdjustInventoryToolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdjustInventoryToolComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AdjustInventoryToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
