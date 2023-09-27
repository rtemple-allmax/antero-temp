import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentMyDataPanelComponent } from './equipment-my-data-panel.component';

describe('EquipmentMyDataPanelComponent', () => {
  let component: EquipmentMyDataPanelComponent;
  let fixture: ComponentFixture<EquipmentMyDataPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EquipmentMyDataPanelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EquipmentMyDataPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
