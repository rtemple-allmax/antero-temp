import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkTemplateTabMapComponent } from './work-template-tab-map.component';

describe('WorkTemplateTabMapComponent', () => {
  let component: WorkTemplateTabMapComponent;
  let fixture: ComponentFixture<WorkTemplateTabMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkTemplateTabMapComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkTemplateTabMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
