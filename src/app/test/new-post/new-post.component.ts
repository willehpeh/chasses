import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Post } from '../post.model';

import { AuthService } from '../../services/auth.service';
import { PostService } from '../post.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.sass']
})
export class NewPostComponent implements OnInit {

  newPostForm: FormGroup
  editMode: boolean = false;
  postToEdit: Post;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private postService: PostService
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.newPostForm = this.formBuilder.group({
      title: ['', Validators.required],
      text: ['', Validators.required],
      name: ['', Validators.required]
    });
  }

  onSubmit() {
    const title = this.newPostForm.controls.title.value;
    const text = this.newPostForm.controls.text.value;
    const ownerId = this.authService.currentUser.uid;
    const owner = this.newPostForm.controls.name.value;
    const newPost = new Post(title, text, ownerId, owner);
    this.postService.createNewPost(newPost);
    this.newPostForm.reset();
  }

}
