import {Component} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormField} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButton} from '@angular/material/button';
import {MatTab, MatTabGroup} from '@angular/material/tabs';
import {BaseLessonComponent} from './base-lesson/base-lesson.component';

@Component({
    selector: 'c-lesson1',
    imports: [MatFormField, MatInputModule, MatButton, ReactiveFormsModule, MatTabGroup, MatTab],
    template: `
    <mat-tab-group [mat-stretch-tabs]="false" mat-align-tabs="center">
      <mat-tab label="Conteudo">
        <div class="formLesson" [innerHTML]="lesson.content"></div>
      </mat-tab>
      <mat-tab label="Tarefas">
        <form class="formLesson" [formGroup]="form">

          <div>1. {{ lesson.questions[0].question }}</div>
          <mat-form-field class="full-width">
            <textarea matInput formControlName="question1"></textarea>
          </mat-form-field>

          <span>2. {{ lesson.questions[1].question }}</span>
          <mat-form-field class="">
            <input matInput formControlName="question2" />
          </mat-form-field>

          <div>3. {{ lesson.questions[2].question }}</div>
          <mat-form-field class="full-width">
            <input matInput formControlName="question3" placeholder="_________ _________ _________"/>
          </mat-form-field>

          <div>4. {{ lesson.questions[3].question }}</div>
          <mat-form-field class="full-width">
            <input matInput formControlName="question4" placeholder="_________ _________ _________ _________"/>
          </mat-form-field>

          <div>5. {{ lesson.questions[4].question }}</div>
          <mat-form-field class="full-width">
            <textarea matInput formControlName="question5"></textarea>
          </mat-form-field>

          <div>6. {{ lesson.questions[5].question }}</div>
          <mat-form-field class="full-width">
            <textarea matInput formControlName="question6"></textarea>
          </mat-form-field>

          <div>7. {{ lesson.questions[6].question }}</div>
          <mat-form-field class="full-width">
            <textarea matInput formControlName="question7" placeholder=" _________  _________  _________"></textarea>
          </mat-form-field>

          <div>8. {{ lesson.questions[7].question }}</div>
          <mat-form-field class="full-width">
            <textarea matInput formControlName="question8"></textarea>
          </mat-form-field>

          <button mat-flat-button (click)="onCheckAnswers($event)">Check Answers</button>
        </form>
      </mat-tab>
    </mat-tab-group>
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
export class Lesson1Component extends BaseLessonComponent {
  override lessonIndex = 1;
}

/**
 * @if (mainMenuService.activeLesson().status === 'ok') {
 *         <mat-icon aria-hidden="false" aria-label="Example home icon" fontIcon="thumb_up"></mat-icon>
 *       } @else if (mainMenuService.activeLesson().status === 'wrong') {
 *         <mat-icon aria-hidden="false" aria-label="Example home icon" fontIcon="thumb_down"></mat-icon>
 *       } @else {
 *         <mat-icon aria-hidden="false" aria-label="Example home icon" fontIcon="thumb_up_down"></mat-icon>
 *       }
 */
