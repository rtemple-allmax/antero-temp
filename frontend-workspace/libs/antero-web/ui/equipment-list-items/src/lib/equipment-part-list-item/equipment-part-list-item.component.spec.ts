import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentPartListItemComponent } from './equipment-part-list-item.component';

describe('EquipmentPartListItemComponent', () => {
  let component: EquipmentPartListItemComponent;
  let fixture: ComponentFixture<EquipmentPartListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EquipmentPartListItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EquipmentPartListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
