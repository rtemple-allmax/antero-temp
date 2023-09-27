import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentGroupingComponent } from './equipment-grouping.component';

describe('EquipmentGroupingComponent', () => {
  let component: EquipmentGroupingComponent;
  let fixture: ComponentFixture<EquipmentGroupingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EquipmentGroupingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EquipmentGroupingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
