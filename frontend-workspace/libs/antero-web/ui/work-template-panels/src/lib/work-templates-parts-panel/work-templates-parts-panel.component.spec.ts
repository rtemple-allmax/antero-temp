import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkTemplatesPartsPanelComponent } from './work-templates-parts-panel.component';

describe('WorkTemplatesPartsPanelComponent', () => {
  let component: WorkTemplatesPartsPanelComponent;
  let fixture: ComponentFixture<WorkTemplatesPartsPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkTemplatesPartsPanelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkTemplatesPartsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
