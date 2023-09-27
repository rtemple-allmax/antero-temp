import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentListItemWorkHistoryComponent } from './equipment-list-item-work-history.component';

describe('EquipmentListItemWorkHistoryComponent', () => {
  let component: EquipmentListItemWorkHistoryComponent;
  let fixture: ComponentFixture<EquipmentListItemWorkHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EquipmentListItemWorkHistoryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EquipmentListItemWorkHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
