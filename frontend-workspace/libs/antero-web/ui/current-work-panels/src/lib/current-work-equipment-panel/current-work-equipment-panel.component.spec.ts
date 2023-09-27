import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentWorkEquipmentPanelComponent } from './current-work-equipment-panel.component';

describe('CurrentWorkEquipmentPanelComponent', () => {
  let component: CurrentWorkEquipmentPanelComponent;
  let fixture: ComponentFixture<CurrentWorkEquipmentPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CurrentWorkEquipmentPanelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CurrentWorkEquipmentPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
