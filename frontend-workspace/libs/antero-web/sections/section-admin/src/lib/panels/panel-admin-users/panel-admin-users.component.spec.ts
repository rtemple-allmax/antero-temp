import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelAdminUsersComponent } from './panel-admin-users.component';

describe('PanelAdminUsersComponent', () => {
  let component: PanelAdminUsersComponent;
  let fixture: ComponentFixture<PanelAdminUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PanelAdminUsersComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PanelAdminUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
