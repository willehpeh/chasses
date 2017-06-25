// Angular imports
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

// Service imports
import { AuthService } from '../../../services/auth.service';

// Validator imports
import { PasswordValidation } from '../password.validator';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.sass']
})
export class SigninComponent implements OnInit {

  signinForm: FormGroup;
  alertMsg: string;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
  // Builds signup form

    this.signinForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSignin() {
  // Triggered by submit button, calls AuthService
    const email = this.signinForm.get('email').value;
    const password = this.signinForm.get('password').value;
    this.authService.signin(email, password).then(
      () => {
        this.signinForm.reset();
        this.router.navigate(['/']);
      },
      (error) => {
        this.alertMsg = error.message;
      }
    );
  }

}
