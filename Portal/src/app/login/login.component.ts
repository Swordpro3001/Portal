import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup;
    submitted = false;

    constructor(private fb: FormBuilder) {
      this.loginForm = this.fb.group({
        username: ['', [Validators.required]],
        password: ['', [Validators.required]]
      });
    }

    onSubmit(): void {
      this.submitted = true;
      if (this.loginForm.valid) {
        const { username, password } = this.loginForm.value;
        console.log('Login:', username, password);
        // → hier kommt die Login-Logik
      }
    }
}
