# Components Docs


## Auth Components

### SigninComponent  
Contains attribute **signinForm** as a reactive FormGroup for the template.

**initForm()** initializes the FormGroup during the *onInit* lifecycle hook.

**onSignin()** is triggered by the submission of the form, calls the AuthService's
**signin()** function and, on success, resets the form and navigates to '/'.

### SignupComponent  
Contains attribute **signupForm** as a reactive FormGroup for the template.

**initForm()** initializes the FormGroup during the *onInit* lifecycle hook.

**onSignup()** is triggered by the submission of the form, calls the AuthService's
**signup()** function and, on success, resets the form and navigates to '/'.

### PasswordValidator
Simple check to make sure that the **password** and **passwordConfirm** fields in the **SignupComponent** are the same before validating form.
