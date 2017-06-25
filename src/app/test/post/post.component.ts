import { Component, OnInit, Input } from '@angular/core';

import { Post } from '../post.model';

import { UserDataService } from '../../services/user-data.service';
import { PostService } from '../post.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.sass']
})
export class PostComponent implements OnInit {

  @Input() post: Post;
  @Input() key: string;
  uid: string;
  fullVersion: boolean = false;

  constructor(
    private uDService: UserDataService,
    private postService: PostService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.uid = this.authService.currentUser.uid;
  }

  showFullVersion() {
    this.fullVersion = !this.fullVersion;
  }

  onDelete() {
    this.postService.deletePost(this.key);
  }

}
