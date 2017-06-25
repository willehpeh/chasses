// Angular imports
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

// Module imports
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
// REMOVE FOR PRODUCTION ==========================================
import { TestModule } from './test/test.module';
// REMOVE FOR PRODUCTION ==========================================

// Component imports
import { AppComponent } from './app.component';
import { SigninComponent } from './components/auth/signin/signin.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { AddUserInfoComponent } from './components/user/add-user-info/add-user-info.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    AddUserInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CoreModule,
  // REMOVE FOR PRODUCTION ==========================================
    TestModule
  // REMOVE FOR PRODUCTION ==========================================
  ],
  providers: [ReactiveFormsModule, FormsModule, CoreModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
