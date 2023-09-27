import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcedureViewerComponent } from './procedure-viewer.component';

describe('ProcedureViewerComponent', () => {
  let component: ProcedureViewerComponent;
  let fixture: ComponentFixture<ProcedureViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProcedureViewerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProcedureViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
