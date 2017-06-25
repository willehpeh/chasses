import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SigninComponent } from './components/auth/signin/signin.component';
import { SignupComponent } from './components/auth/signup/signup.component';

// TEST COMPONENTS!!! REMOVE FOR PRODUCTION!!! =================================
import { HomeComponent } from './test/home/home.component';
import { NotFoundComponent } from './test/not-found/not-found.component';
// TEST COMPONENTS!!! REMOVE FOR PRODUCTION!!! =================================

import { AuthGuard } from './services/guards/auth.guard';

const appRoutes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: '/not-found'}
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
