import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartsEquipmentPanelComponent } from './parts-equipment-panel.component';

describe('PartsEquipmentPanelComponent', () => {
  let component: PartsEquipmentPanelComponent;
  let fixture: ComponentFixture<PartsEquipmentPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartsEquipmentPanelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PartsEquipmentPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
