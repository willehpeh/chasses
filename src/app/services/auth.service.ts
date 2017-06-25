// Angular imports
import { Injectable } from '@angular/core';

// Other basic imports
import * as firebase from 'firebase';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

// Service imports
import { UserDataService } from './user-data.service';

@Injectable()
export class AuthService {

  currentUser: firebase.User;
  isAuthenticated = new BehaviorSubject<boolean>(null);

  constructor(private uDService: UserDataService) {

    // Updates currentUser and isAuthenticated variables when auth status changes
    firebase.auth().onAuthStateChanged(
      (user) => {
        if(user) {
          this.currentUser = user;
          this.isAuthenticated.next(true);
        }
        else {
          this.currentUser = null;
          this.isAuthenticated.next(false);
        }
      }
    );
  }

  signin(email: string, password: string) {
  // Signs in, sets currentUser to user returned by Firebase
  // Returns promise, resolved once signin complete

    const promise = new Promise(
      (resolve, reject) => {
        firebase.auth().signInWithEmailAndPassword(email, password).then(
          (user: firebase.User) => {
            this.currentUser = user;
            resolve();
          }
        );
      }
    );
    return promise;
  }

  signup(email: string, password: string) {
  // Returns promise, resolves after:
    // 1) User successfully created in auth
    // 2) User successfully added to DB

    const promise = new Promise(
      (resolve, reject) => {
        firebase.auth().createUserWithEmailAndPassword(email, password).then(
          (user: firebase.User) => {
            this.currentUser = user;
            this.uDService.createNewUserWithEmail(user.uid, email).then(
              () => {
                resolve();
              }
            );
          }
        );
      }
    );
    return promise;
  }

  signout() {
  // Signs user out

    firebase.auth().signOut()
  }

}
