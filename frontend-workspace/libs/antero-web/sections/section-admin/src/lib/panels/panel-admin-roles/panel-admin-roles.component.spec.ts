import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelAdminRolesComponent } from './panel-admin-roles.component';

describe('PanelAdminRolesComponent', () => {
  let component: PanelAdminRolesComponent;
  let fixture: ComponentFixture<PanelAdminRolesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PanelAdminRolesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PanelAdminRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
