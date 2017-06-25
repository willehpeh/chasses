// Angular imports
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

// Module imports
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';

// Component imports
import { AppComponent } from './app.component';
import { SigninComponent } from './components/auth/signin/signin.component';
import { SignupComponent } from './components/auth/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CoreModule
  ],
  providers: [ReactiveFormsModule, FormsModule, CoreModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
