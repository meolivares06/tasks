import {Component, inject, Input, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup} from '@angular/forms';
import {Lesson} from '../../models';
import {LessonsService} from '../../leftnav/lessons.service';
import {CheckAnswersService} from '../../services/check-answers.service';

@Component({
  selector: 'app-base-lesson',
  standalone: true,
  imports: [],
  templateUrl: './base-lesson.component.html',
  styleUrl: './base-lesson.component.scss'
})
export class BaseLessonComponent implements OnInit {
  lessonsService = inject(LessonsService);
  checkAnswers = inject(CheckAnswersService);
  lesson!: Lesson;
  lessonIndex!: number;
  form!: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
    const l = this.lessonsService.get(this.lessonIndex);
    if(l) {
      this.lesson = l;
    }

    let group: Record<string, AbstractControl> = {};
    this.lesson.questions.forEach(q => {
      group[`question${q.index}`] = new FormControl()
    });
    this.form = new FormGroup(group);
    console.warn(this.form.value);
  }

  onCheckAnswers(evt: MouseEvent) {
    evt.preventDefault();
    console.warn(this.form.value);
    // this.checkAnswers.main(this.form.value.question1).then(r => console.warn(r));
  }
}
