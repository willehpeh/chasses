import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

import { Post } from '../post.model';

import { PostService } from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.sass']
})
export class PostListComponent implements OnInit, OnDestroy {
  postListSubscription: Subscription;
  postList = [];

  constructor(
    private postService: PostService
  ) {
  }

  ngOnInit() {
    this.postListSubscription = this.postService.postListSubject.subscribe(
      (listOfPosts) => {
        this.postList = listOfPosts;
      }
    );
    this.postService.getAllPosts();
  }

  ngOnDestroy() {
    this.postListSubscription.unsubscribe();
  }

}
