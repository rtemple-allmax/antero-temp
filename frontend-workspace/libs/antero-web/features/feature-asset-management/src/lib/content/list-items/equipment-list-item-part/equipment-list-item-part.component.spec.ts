import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentListItemPartComponent } from './equipment-list-item-part.component';

describe('EquipmentListItemPartComponent', () => {
  let component: EquipmentListItemPartComponent;
  let fixture: ComponentFixture<EquipmentListItemPartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EquipmentListItemPartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EquipmentListItemPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
