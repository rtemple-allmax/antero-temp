import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelAdminOptionsComponent } from './panel-admin-options.component';

describe('PanelAdminOptionsComponent', () => {
  let component: PanelAdminOptionsComponent;
  let fixture: ComponentFixture<PanelAdminOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PanelAdminOptionsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PanelAdminOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
