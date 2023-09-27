import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentPanelCustomizedDataComponent } from './equipment-panel-customized-data.component';

describe('EquipmentPanelCustomizedDataComponent', () => {
  let component: EquipmentPanelCustomizedDataComponent;
  let fixture: ComponentFixture<EquipmentPanelCustomizedDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EquipmentPanelCustomizedDataComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EquipmentPanelCustomizedDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
