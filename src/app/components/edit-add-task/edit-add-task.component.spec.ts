import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAddTaskComponent } from './edit-add-task.component';

describe('EditAddTaskComponent', () => {
  let component: EditAddTaskComponent;
  let fixture: ComponentFixture<EditAddTaskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditAddTaskComponent]
    });
    fixture = TestBed.createComponent(EditAddTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
