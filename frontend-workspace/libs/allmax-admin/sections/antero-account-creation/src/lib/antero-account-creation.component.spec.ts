import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnteroAccountCreationComponent } from './antero-account-creation.component';

describe('AnteroAccountCreationComponent', () => {
  let component: AnteroAccountCreationComponent;
  let fixture: ComponentFixture<AnteroAccountCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnteroAccountCreationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AnteroAccountCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
