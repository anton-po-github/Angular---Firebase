import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AuthDatabaseRouting } from './auth-Database.routing';
import { UserLoginComponent } from './user-login/user-login.component';
import { ChooseUsernameComponent } from './choose-username/choose-username.component';
import { AuthDatabaseService } from './auth-Database.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AngularFireDatabaseModule,
    AuthDatabaseRouting
  ],
  declarations: [
    UserLoginComponent,
    ChooseUsernameComponent
  ],
  providers: [
    AuthDatabaseService
  ]
})
export class AuthDatabaseModule { }
