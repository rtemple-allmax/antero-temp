import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentCriticalityWidgetComponent } from './equipment-criticality-widget.component';

describe('EquipmentCriticalityWidgetComponent', () => {
  let component: EquipmentCriticalityWidgetComponent;
  let fixture: ComponentFixture<EquipmentCriticalityWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EquipmentCriticalityWidgetComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EquipmentCriticalityWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
