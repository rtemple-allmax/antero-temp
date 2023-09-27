import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutPanelUserComponent } from './layout-panel-user.component';

describe('LayoutPanelUserComponent', () => {
  let component: LayoutPanelUserComponent;
  let fixture: ComponentFixture<LayoutPanelUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LayoutPanelUserComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LayoutPanelUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
