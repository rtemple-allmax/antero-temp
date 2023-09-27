import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentTemplatesPanelComponent } from './equipment-templates-panel.component';

describe('EquipmentTemplatesPanelComponent', () => {
  let component: EquipmentTemplatesPanelComponent;
  let fixture: ComponentFixture<EquipmentTemplatesPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EquipmentTemplatesPanelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EquipmentTemplatesPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
