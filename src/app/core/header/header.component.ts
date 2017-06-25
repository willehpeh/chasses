// Angular imports
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

// Other basic imports
import { Subscription } from 'rxjs/Subscription';

// Service imports
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit, OnDestroy {

  isAuthenticated: boolean;
  checkAuth: Subscription;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {

    // Sets isAuthenticated variable to follow AuthService
    this.checkAuth = this.authService.isAuthenticated.subscribe(
      (isAuth: boolean) => {
        this.isAuthenticated = isAuth;
      }
    );
  }

  onSignout() {
    this.authService.signout();
    this.router.navigate(['signin']);

  }

  ngOnDestroy() {
    this.checkAuth.unsubscribe();
  }

}
