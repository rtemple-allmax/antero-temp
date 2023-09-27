import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceivePartsToolComponent } from './receive-parts-tool.component';

describe('ReceivePartsToolComponent', () => {
  let component: ReceivePartsToolComponent;
  let fixture: ComponentFixture<ReceivePartsToolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReceivePartsToolComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ReceivePartsToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
