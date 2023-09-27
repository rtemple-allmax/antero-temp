import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaborAccountSetupPanelComponent } from './labor-account-setup-panel.component';

describe('LaborAccountSetupPanelComponent', () => {
  let component: LaborAccountSetupPanelComponent;
  let fixture: ComponentFixture<LaborAccountSetupPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LaborAccountSetupPanelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LaborAccountSetupPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
