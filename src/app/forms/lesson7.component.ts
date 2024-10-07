import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {MatFormField} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButton} from '@angular/material/button';
import {CheckAnswersService} from '../services/check-answers.service';

export interface Question {
  question: string;
  correctAnswer: string;
  userAnswer: string;
}
@Component({
  selector: 'c-lesson4',
  standalone: true,
  imports: [MatFormField, MatInputModule, MatButton, ReactiveFormsModule],
  template: `
    <form class="formLesson" [formGroup]="form">
      <div>{{ questionList.get(1)?.question }}</div>
      <mat-form-field class="full-width">
        <textarea matInput formControlName="question1"></textarea>
      </mat-form-field>

      <div>{{ questionList.get(2)?.question }}</div>
      <mat-form-field class="full-width">
        <input matInput formControlName="question2" />
      </mat-form-field>
      <button mat-flat-button (click)="onCheckAnswers($event)">Check Answers</button>

    </form>
  `,
  styles: [`
    :host {
      display: block;
      box-sizing: border-box;
    }
    .formLesson{
      width: calc(100% - 16px);
      padding-right: 8px;
      padding-left: 8px;
    }
    .full-width {
      width: 100%;
    }
  `]
})
export class Lesson4Component {
  title = 'O Batismo';
  questionList = new Map<number, Question>();

  constructor(private checkAnswers: CheckAnswersService) {
    this.questionList.set(1, {
      question: 'O que significa a palavra batismo',
      correctAnswer: 'A palavra batismo vem do grego "baptizo" e significa "imergir", "afundar". Somos batistas porque batizamos imergindo as pessoas. O nome Batista vem da palabvra batismo, e a palavra batismo significa "imergir".',
      userAnswer: ''
    });
    this.questionList.set(2, {
      question: 'A forma biblica do batismo, conforme o sentido etimologico da palavra e por:',
      correctAnswer: 'Se a palavra batismo significa imgergir, afundar, entendemos, então, que a forma bíblica do batismo é por imersão do corpo inteiro. Por esta razão, nós, batistas, só aceitamos o batismo por imersão, por entendemos ser a forma bíblica de batismo. Outras formas praticadas são o batismo por aspersão e efusão (derramamento).',
      userAnswer: ''
    });
  }

  form: FormGroup = new FormGroup({
    question1: new FormControl(),
    question2: new FormControl(),
  });

  onCheckAnswers(evt: MouseEvent) {
    evt.preventDefault();
    console.warn(this.form.value);
    this.checkAnswers.main(this.form.value.question1).then(r => console.warn(r));
  }
}
