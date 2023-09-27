import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkTemplatePanelToolsComponent } from './work-template-panel-tools.component';

describe('WorkTemplatePanelToolsComponent', () => {
  let component: WorkTemplatePanelToolsComponent;
  let fixture: ComponentFixture<WorkTemplatePanelToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkTemplatePanelToolsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkTemplatePanelToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
