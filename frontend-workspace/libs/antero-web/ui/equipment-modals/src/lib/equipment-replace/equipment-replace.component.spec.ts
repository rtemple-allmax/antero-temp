import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentReplaceComponent } from './equipment-replace.component';

describe('EquipmentReplaceComponent', () => {
  let component: EquipmentReplaceComponent;
  let fixture: ComponentFixture<EquipmentReplaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EquipmentReplaceComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EquipmentReplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
