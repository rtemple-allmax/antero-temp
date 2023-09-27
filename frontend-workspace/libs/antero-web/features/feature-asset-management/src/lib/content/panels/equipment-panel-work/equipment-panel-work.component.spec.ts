import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentPanelWorkComponent } from './equipment-panel-work.component';

describe('EquipmentPanelWorkComponent', () => {
  let component: EquipmentPanelWorkComponent;
  let fixture: ComponentFixture<EquipmentPanelWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EquipmentPanelWorkComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EquipmentPanelWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
