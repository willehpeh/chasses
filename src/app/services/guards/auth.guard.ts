import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router'
import { Injectable } from '@angular/core';

import { AuthService } from '../auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
  // Subscribes to BehaviorSubject, returns Promise which resolves when
  // the BehaviorSubject receives a value (default is null)

    const promise = new Promise(
      (resolve, reject) => {
        this.authService.isAuthenticated.subscribe(
          (isAuth) => {
            if(isAuth === true) {
              resolve(true);
            }
            else if(isAuth === false) {
              this.router.navigate(['/signin']);
              resolve(false);
            }
          }
        );
      }
    );
    return promise;
  }

}
