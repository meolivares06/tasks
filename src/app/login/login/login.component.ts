import {Component, inject} from '@angular/core';
import {MatFormField, MatFormFieldModule, MatLabel} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-login',
  imports: [MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatButton,],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
 fb: FormBuilder = inject(FormBuilder);

 loginForm = this.fb.nonNullable.group({
   username: ['', Validators.required],
   password: ['', Validators.required],
 });

  onSubmit(): void {
    console.log(this.loginForm.value);
  }
}
