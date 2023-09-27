import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentPartsPanelComponent } from './equipment-parts-panel.component';

describe('EquipmentPartsPanelComponent', () => {
  let component: EquipmentPartsPanelComponent;
  let fixture: ComponentFixture<EquipmentPartsPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EquipmentPartsPanelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EquipmentPartsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
