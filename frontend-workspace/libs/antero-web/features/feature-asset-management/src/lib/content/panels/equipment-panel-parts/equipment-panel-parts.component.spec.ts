import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentPanelPartsComponent } from './equipment-panel-parts.component';

describe('EquipmentPanelPartsComponent', () => {
  let component: EquipmentPanelPartsComponent;
  let fixture: ComponentFixture<EquipmentPanelPartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EquipmentPanelPartsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EquipmentPanelPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
