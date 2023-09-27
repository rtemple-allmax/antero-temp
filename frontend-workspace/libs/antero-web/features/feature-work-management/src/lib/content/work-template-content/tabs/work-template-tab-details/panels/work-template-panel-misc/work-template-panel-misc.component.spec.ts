import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkTemplatePanelMiscComponent } from './work-template-panel-misc.component';

describe('WorkTemplatePanelMiscComponent', () => {
  let component: WorkTemplatePanelMiscComponent;
  let fixture: ComponentFixture<WorkTemplatePanelMiscComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkTemplatePanelMiscComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkTemplatePanelMiscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
