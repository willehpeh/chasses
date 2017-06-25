// Angular imports
import { Component } from '@angular/core';

// Other basic imports
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  constructor() {
    firebase.initializeApp({
      apiKey: "AIzaSyAr6395esmwCCN0s65samSPzZWywyWutlM",
      authDomain: "chasses-f99f2.firebaseapp.com",
      databaseURL: "https://chasses-f99f2.firebaseio.com",
      projectId: "chasses-f99f2",
      storageBucket: "chasses-f99f2.appspot.com",
      messagingSenderId: "720429061120"
    });
  }
}
