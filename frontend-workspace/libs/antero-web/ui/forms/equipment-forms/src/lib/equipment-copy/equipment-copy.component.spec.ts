import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentCopyComponent } from './equipment-copy.component';

describe('EquipmentCopyComponent', () => {
  let component: EquipmentCopyComponent;
  let fixture: ComponentFixture<EquipmentCopyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EquipmentCopyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EquipmentCopyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
