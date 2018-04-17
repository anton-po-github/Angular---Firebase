import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { PostsListComponent } from './posts-list/posts-list.component';
import { AuthorGuard } from './author-guard.service';
import { EditPostComponent } from './edit-post/edit-post.component';

const rolesRoutes: Routes = [
  {
    path: '',
    children: [
      { path: 'posts',    component: PostsListComponent},
      { path: 'edit/:id', component: EditPostComponent, canActivate: [AuthorGuard]},
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(rolesRoutes),
  ],
  exports: [ RouterModule ]
})
export class RolesRouting { }
