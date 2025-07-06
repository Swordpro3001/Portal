import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingService } from '../services/loading.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private loadingService: LoadingService
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;

      // Show loading spinner
      this.loadingService.show();

      // Simulate login process
      setTimeout(() => {
        console.log('Login:', username, password);
        this.loadingService.hide();
        // → hier kommt die Login-Logik
      }, 2000);
    }
  }
}
