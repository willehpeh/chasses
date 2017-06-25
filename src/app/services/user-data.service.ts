import { Injectable } from '@angular/core';

import * as firebase from 'firebase';

import { User } from '../models/user.model';
import { UserInfo } from '../models/user-info.model';

@Injectable()
export class UserDataService {

  constructor() { }

  getAllUsers() {
    const dbRef = firebase.database().ref('users').once('value').then(
      (dataSnapshot) => {
        return dataSnapshot.value;
      }
    );
  }

  getUserInfoById(id: string) {
    const promise = new Promise(
      (resolve, reject) => {
        const dbRef = firebase.database().ref('user-info' + id);
        dbRef.once('value').then(
          (dataSnapshot) => {
            resolve(<firebase.User>dataSnapshot.value);
          }
        );
      }
    );
    return promise;
  }

  createNewUserWithEmail(id: string, email: string) {
  // Returns promise, resolves when user successfully written to DB

    const promise = new Promise(
      (resolve, reject) => {
        const dbRef = firebase.database().ref('users/' + id);
        const newUser = new User(id, email);
        dbRef.set(newUser).then(
          () => {
            resolve();
          }
        );
      }
    );
    return promise;
  }

  addInfoToUser(id: string, userInfo: UserInfo) {
  // Returns promise, resolves when user info successfully added to DB

    const promise = new Promise(
      (resolve, reject) => {
        const dbRef = firebase.database().ref('user-info/' + id);
        dbRef.set(userInfo).then(
          () => {
            resolve();
          }
        );
      }
    );
    return promise;
  }

}
