import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PageLoadServiceService } from '../services/page-load-service.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  isLoading = true;

  constructor(private fb: FormBuilder, private pageLoad: PageLoadServiceService) {
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

  ngOnInit() {
    this.isLoading = this.pageLoad.isPageLoading();
  }
}
