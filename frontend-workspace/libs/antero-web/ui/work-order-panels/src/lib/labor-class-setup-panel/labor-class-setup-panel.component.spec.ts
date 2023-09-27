import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaborClassSetupPanelComponent } from './labor-class-setup-panel.component';

describe('LaborClassSetupPanelComponent', () => {
  let component: LaborClassSetupPanelComponent;
  let fixture: ComponentFixture<LaborClassSetupPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LaborClassSetupPanelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LaborClassSetupPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
