import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentListItemInstrumentComponent } from './equipment-list-item-instrument.component';

describe('EquipmentListItemInstrumentComponent', () => {
  let component: EquipmentListItemInstrumentComponent;
  let fixture: ComponentFixture<EquipmentListItemInstrumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EquipmentListItemInstrumentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EquipmentListItemInstrumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
