import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentPanelInstrumentsComponent } from './equipment-panel-instruments.component';

describe('EquipmentPanelInstrumentsComponent', () => {
  let component: EquipmentPanelInstrumentsComponent;
  let fixture: ComponentFixture<EquipmentPanelInstrumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EquipmentPanelInstrumentsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EquipmentPanelInstrumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
