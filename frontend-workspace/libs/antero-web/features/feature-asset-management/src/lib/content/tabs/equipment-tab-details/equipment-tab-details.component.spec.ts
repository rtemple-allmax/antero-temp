import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentTabDetailsComponent } from './equipment-tab-details.component';

describe('EquipmentTabDetailsComponent', () => {
  let component: EquipmentTabDetailsComponent;
  let fixture: ComponentFixture<EquipmentTabDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EquipmentTabDetailsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EquipmentTabDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
