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

@NgModule({
  declarations: [
    HeaderComponent
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
