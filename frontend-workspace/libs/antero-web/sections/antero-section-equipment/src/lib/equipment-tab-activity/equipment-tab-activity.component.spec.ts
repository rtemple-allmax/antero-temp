import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentTabActivityComponent } from './equipment-tab-activity.component';

describe('EquipmentTabActivityComponent', () => {
  let component: EquipmentTabActivityComponent;
  let fixture: ComponentFixture<EquipmentTabActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EquipmentTabActivityComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EquipmentTabActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
