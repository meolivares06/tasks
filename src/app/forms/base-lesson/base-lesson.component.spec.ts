import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseLessonComponent } from './base-lesson.component';

describe('BaseLessonComponent', () => {
  let component: BaseLessonComponent;
  let fixture: ComponentFixture<BaseLessonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaseLessonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
