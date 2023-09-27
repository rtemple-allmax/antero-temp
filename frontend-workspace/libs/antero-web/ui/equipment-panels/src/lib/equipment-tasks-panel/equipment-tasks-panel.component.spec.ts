import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentTasksPanelComponent } from './equipment-tasks-panel.component';

describe('EquipmentTasksPanelComponent', () => {
  let component: EquipmentTasksPanelComponent;
  let fixture: ComponentFixture<EquipmentTasksPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EquipmentTasksPanelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EquipmentTasksPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
