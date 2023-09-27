import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkTemplatePanelEquipmentComponent } from './work-template-panel-equipment.component';

describe('WorkTemplatePanelEquipmentComponent', () => {
  let component: WorkTemplatePanelEquipmentComponent;
  let fixture: ComponentFixture<WorkTemplatePanelEquipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkTemplatePanelEquipmentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkTemplatePanelEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
