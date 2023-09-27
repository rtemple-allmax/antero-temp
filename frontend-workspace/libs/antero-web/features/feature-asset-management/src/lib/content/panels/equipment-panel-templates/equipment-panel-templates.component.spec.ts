import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentPanelTemplatesComponent } from './equipment-panel-templates.component';

describe('EquipmentPanelTemplatesComponent', () => {
  let component: EquipmentPanelTemplatesComponent;
  let fixture: ComponentFixture<EquipmentPanelTemplatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EquipmentPanelTemplatesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EquipmentPanelTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
