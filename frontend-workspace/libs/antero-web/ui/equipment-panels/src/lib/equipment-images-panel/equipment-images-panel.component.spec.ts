import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentImagesPanelComponent } from './equipment-images-panel.component';

describe('EquipmentImagesPanelComponent', () => {
  let component: EquipmentImagesPanelComponent;
  let fixture: ComponentFixture<EquipmentImagesPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EquipmentImagesPanelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EquipmentImagesPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
