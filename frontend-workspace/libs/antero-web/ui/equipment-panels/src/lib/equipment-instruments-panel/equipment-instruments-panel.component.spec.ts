import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentInstrumentsPanelComponent } from './equipment-instruments-panel.component';

describe('EquipmentInstrumentsPanelComponent', () => {
  let component: EquipmentInstrumentsPanelComponent;
  let fixture: ComponentFixture<EquipmentInstrumentsPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EquipmentInstrumentsPanelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EquipmentInstrumentsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
