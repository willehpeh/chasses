// Angular imports
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

// Service imports
import { AuthService } from '../../../services/auth.service';

// Validator imports
import { PasswordValidation } from '../password.validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.sass']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;

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

    this.signupForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      passwordConfirm: ['', Validators.required]
    }, {
      validator: PasswordValidation.MatchPassword
    });
  }

  onSignup() {
  // Triggered by submit button, calls AuthService
    const email = this.signupForm.get('email').value;
    const password = this.signupForm.get('password').value;
    this.authService.signup(email, password).then(
      () => {
        this.signupForm.reset();
        this.router.navigate(['/']);
      }
    );
  }

}
