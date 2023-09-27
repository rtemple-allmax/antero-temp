import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentWorkAdminPanelComponent } from './current-work-admin-panel.component';

describe('CurrentWorkAdminPanelComponent', () => {
  let component: CurrentWorkAdminPanelComponent;
  let fixture: ComponentFixture<CurrentWorkAdminPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CurrentWorkAdminPanelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CurrentWorkAdminPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
