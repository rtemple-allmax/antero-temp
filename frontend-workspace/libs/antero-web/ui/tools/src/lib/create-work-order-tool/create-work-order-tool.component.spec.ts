import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateWorkOrderToolComponent } from './create-work-order-tool.component';

describe('CreateWorkOrderToolComponent', () => {
  let component: CreateWorkOrderToolComponent;
  let fixture: ComponentFixture<CreateWorkOrderToolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateWorkOrderToolComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateWorkOrderToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
