import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RolesRouting } from './roles-routing';
import { PostsListComponent } from './posts-list/posts-list.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { AuthService } from './auth.service';
import { PostService } from './post.service';
import { AuthorGuard } from './author-guard.service';

import { AngularFireDatabase, AngularFireDatabaseModule } from 'angularfire2/database-deprecated';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RolesRouting,
    AngularFireDatabaseModule
  ],
  declarations: [
    PostsListComponent,
    EditPostComponent
  ],
  providers: [
    AuthService,
    PostService,
    AuthorGuard
  ]
})
export class RolesModule { }
