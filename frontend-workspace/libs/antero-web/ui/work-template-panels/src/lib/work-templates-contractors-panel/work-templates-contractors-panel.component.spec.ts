import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkTemplatesContractorsPanelComponent } from './work-templates-contractors-panel.component';

describe('WorkTemplatesContractorsPanelComponent', () => {
  let component: WorkTemplatesContractorsPanelComponent;
  let fixture: ComponentFixture<WorkTemplatesContractorsPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkTemplatesContractorsPanelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkTemplatesContractorsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
