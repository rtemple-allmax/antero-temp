import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentInServiceHistoryListItemComponent } from './equipment-in-service-history-list-item.component';

describe('EquipmentInServiceHistoryListItemComponent', () => {
  let component: EquipmentInServiceHistoryListItemComponent;
  let fixture: ComponentFixture<EquipmentInServiceHistoryListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EquipmentInServiceHistoryListItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      EquipmentInServiceHistoryListItemComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
