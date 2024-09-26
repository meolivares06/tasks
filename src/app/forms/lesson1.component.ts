import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {MatFormField} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-lesson1',
  standalone: true,
  imports: [MatFormField, MatInputModule],
  template: `
    <form class="formLesson" formGroupName="form">
      <mat-form-field class="full-width">
        <mat-label>1. O que significa a palavra Batismo?</mat-label>
        <textarea matInput formControlName="lesson1"></textarea>
      </mat-form-field>
    </form>
  `,
  styles: [`
    :host {
      padding: 8px;
    }
    .formLesson{
      width: 100%;
    }
    .full-width {
      width: 100%;
    }
  `]
})
export class Lesson1Component {
  title = 'O Batismo';

  form: FormGroup = new FormGroup({
    lesson1: new FormControl(),
    lesson2: new FormControl(),
  })
}
