import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentPanelDetailsComponent } from './equipment-panel-details.component';

describe('EquipmentPanelDetailsComponent', () => {
  let component: EquipmentPanelDetailsComponent;
  let fixture: ComponentFixture<EquipmentPanelDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EquipmentPanelDetailsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EquipmentPanelDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
