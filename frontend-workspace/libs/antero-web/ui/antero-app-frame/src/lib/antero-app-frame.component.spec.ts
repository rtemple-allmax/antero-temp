import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnteroAppFrameComponent } from './antero-app-frame.component';

describe('AnteroAppFrameComponent', () => {
  let component: AnteroAppFrameComponent;
  let fixture: ComponentFixture<AnteroAppFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnteroAppFrameComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AnteroAppFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
