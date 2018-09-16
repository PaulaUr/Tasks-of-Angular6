import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskServerComponent } from './task-server.component';

describe('TaskServerComponent', () => {
  let component: TaskServerComponent;
  let fixture: ComponentFixture<TaskServerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskServerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
