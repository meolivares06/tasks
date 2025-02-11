import { Component, inject, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import { Lesson } from '../../models';
import { LessonsService } from '../../leftnav/lessons.service';
import { CheckAnswersService } from '../../services/check-answers.service';
import { EvaluationResultDialogComponent } from './evaluation-result-dialog/evaluation-result-dialog.component';
import evaluationAdapter from '../../shared/evaluation.adapter';
import { LoadingService } from '../../core/services/loading-service.service';

@Component({
  selector: 'app-base-lesson',
  imports: [MatDialogModule],
  templateUrl: './base-lesson.component.html',
  styleUrl: './base-lesson.component.scss',
})
export class BaseLessonComponent implements OnInit {
  loadingService = inject(LoadingService);
  lessonsService = inject(LessonsService);
  checkAnswers = inject(CheckAnswersService);
  readonly dialog = inject(MatDialog);
  lesson!: Lesson;
  lessonIndex!: number;
  form!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    const l = this.lessonsService.get(this.lessonIndex);
    if (l) {
      this.lesson = l;
    }

    const group: Record<string, AbstractControl> = {};
    this.lesson.questions.forEach((q) => {
      group[`question${q.index}`] = new FormControl();
    });
    this.form = new FormGroup(group);
  }

  onCheckAnswers(evt: MouseEvent) {
    evt.preventDefault();
    this.loadingService.show();
    this.checkAnswers
      .main(this.form.value, this.lesson.content, this.lesson.questions)
      .then((r) => {
        this.loadingService.hide();
        const dialogRef = this.dialog.open(EvaluationResultDialogComponent, {
          maxWidth: '100%',
          height: '80%',
          width: '90%',
          data: { userAnswer: evaluationAdapter(r) },
        });
      })
      .catch((e) => {
        this.loadingService.hide();
        console.warn(e);
      });
  }
}
