// Angular imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Module imports
import { AppRoutingModule } from '../app-routing.module';

// Service imports
import { AuthService } from '../services/auth.service';
import { UserDataService } from '../services/user-data.service';

// Guard imports
import { AuthGuard } from '../services/guards/auth.guard';

// Component imports
import { HeaderComponent } from './header/header.component';

// TEST COMPONENTS!!! REMOVE FOR PRODUCTION!!! =================================
import { HomeComponent } from '../test/home/home.component';
import { NotFoundComponent } from '../test/not-found/not-found.component';
// TEST COMPONENTS!!! REMOVE FOR PRODUCTION!!! =================================

@NgModule({
  declarations: [
    // TEST COMPONENTS!!! REMOVE FOR PRODUCTION!!! =================================
    HomeComponent,
    NotFoundComponent,
    HeaderComponent
    // TEST COMPONENTS!!! REMOVE FOR PRODUCTION!!! =================================
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    AppRoutingModule,
    HeaderComponent
  ],
  providers: [AuthService, UserDataService, AuthGuard]
})
export class CoreModule {

}
