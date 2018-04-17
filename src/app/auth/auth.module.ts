import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { SigninComponent } from './signin/signin.component';
import { SignoutComponent } from './signout/signout.component';
import { RegisterComponent } from './register/register.component';

import { AuthService } from '../roles/auth.service';

import { AngularFireAuthModule, AngularFireAuthProvider } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireDatabaseModule } from 'angularfire2/database-deprecated';
import { PostService } from '../roles/post.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  declarations: [
    AuthComponent,
    SigninComponent,
    SignoutComponent,
    RegisterComponent
  ],
  providers: [
    AuthService
  ]
})
export class AuthModule { }
