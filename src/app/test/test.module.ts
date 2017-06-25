// Angular imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// Service imports
import { AuthService } from '../services/auth.service';
import { UserDataService } from '../services/user-data.service';
import { PostService } from './post.service';

// TEST COMPONENTS!!! REMOVE FOR PRODUCTION!!! =================================
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PostComponent } from './post/post.component';
import { PostListComponent } from './post-list/post-list.component';
import { NewPostComponent } from './new-post/new-post.component';
import { ShortenPipe } from './shorten.pipe';
// TEST COMPONENTS!!! REMOVE FOR PRODUCTION!!! =================================

@NgModule({
  declarations: [
    // TEST COMPONENTS!!! REMOVE FOR PRODUCTION!!! =================================
    HomeComponent,
    NotFoundComponent,
    PostComponent,
    PostListComponent,
    NewPostComponent,
    ShortenPipe
    // TEST COMPONENTS!!! REMOVE FOR PRODUCTION!!! =================================
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [AuthService, UserDataService, PostService]
})
export class TestModule {

}
