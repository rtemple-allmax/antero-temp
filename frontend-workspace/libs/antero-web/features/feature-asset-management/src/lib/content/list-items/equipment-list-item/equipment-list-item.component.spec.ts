import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentListItemComponent } from './equipment-list-item.component';

describe('EquipmentListItemComponent', () => {
  let component: EquipmentListItemComponent;
  let fixture: ComponentFixture<EquipmentListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EquipmentListItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EquipmentListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
