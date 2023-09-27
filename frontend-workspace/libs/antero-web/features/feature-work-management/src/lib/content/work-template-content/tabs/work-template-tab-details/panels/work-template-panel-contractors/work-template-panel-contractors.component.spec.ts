import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkTemplatePanelContractorsComponent } from './work-template-panel-contractors.component';

describe('WorkTemplatePanelContractorsComponent', () => {
  let component: WorkTemplatePanelContractorsComponent;
  let fixture: ComponentFixture<WorkTemplatePanelContractorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkTemplatePanelContractorsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkTemplatePanelContractorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
