import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaborTypeSetupPanelComponent } from './labor-type-setup-panel.component';

describe('LaborTypeSetupPanelComponent', () => {
  let component: LaborTypeSetupPanelComponent;
  let fixture: ComponentFixture<LaborTypeSetupPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LaborTypeSetupPanelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LaborTypeSetupPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
