import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentDetailsPanelComponent } from './equipment-details-panel.component';

describe('EquipmentDetailsPanelComponent', () => {
  let component: EquipmentDetailsPanelComponent;
  let fixture: ComponentFixture<EquipmentDetailsPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EquipmentDetailsPanelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EquipmentDetailsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
