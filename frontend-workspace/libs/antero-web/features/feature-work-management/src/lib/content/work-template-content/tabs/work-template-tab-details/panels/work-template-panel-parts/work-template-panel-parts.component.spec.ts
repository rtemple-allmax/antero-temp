import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkTemplatePanelPartsComponent } from './work-template-panel-parts.component';

describe('WorkTemplatePanelPartsComponent', () => {
  let component: WorkTemplatePanelPartsComponent;
  let fixture: ComponentFixture<WorkTemplatePanelPartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkTemplatePanelPartsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkTemplatePanelPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
