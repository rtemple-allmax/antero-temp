import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentListsComponent } from './equipment-lists.component';

describe('EquipmentListsComponent', () => {
  let component: EquipmentListsComponent;
  let fixture: ComponentFixture<EquipmentListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EquipmentListsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EquipmentListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
