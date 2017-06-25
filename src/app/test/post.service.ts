import { Injectable } from '@angular/core';

import * as firebase from 'firebase';
import { Subject } from 'rxjs/Subject';

import { Post } from './post.model';

import { AuthService } from '../services/auth.service';

@Injectable()
export class PostService {

  postList = [];
  postListSubject = new Subject<Post[]>();

  constructor(
    private authService: AuthService
  ) {
  }

  getAllPosts() {
    firebase.database().ref('posts').orderByKey().on('value', (snapshot) => {
      this.postList = [];
      if(!snapshot.hasChildren()) {
        this.postListSubject.next([]);
      }
      snapshot.forEach((postObject) => {
        this.postList.unshift({
          post: postObject.val(),
          key: postObject.key
        });
        this.postListSubject.next(this.postList);
        return false;
      });
    });
  }

  createNewPost(post: Post) {
    const id = this.authService.currentUser.uid;
    const ref = firebase.database().ref();
    const newPostKey = ref.push().key;
    const updatedData = {};
    updatedData['users/' + id + '/posts/' + newPostKey] = true;
    updatedData['posts/' + newPostKey] = post;
    ref.update(updatedData, (error) => {
      if(error) {
        console.log('Error updating data: ' + error);
      }
    });
  }

  deletePost(key: string) {
    const id = this.authService.currentUser.uid;
    const postRef = firebase.database().ref('posts/' + key);
    const userPostRef = firebase.database().ref('users/' + id + '/posts/' + key);
    postRef.remove();
    userPostRef.remove();
  }

}
