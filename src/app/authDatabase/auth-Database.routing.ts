import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';

const authDataBaseRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'login',
        component: UserLoginComponent
      },
      /*{
        path: 'signout',
        component: SignoutComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      }*/
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(authDataBaseRoutes),
  ],
  exports: [ RouterModule ]
})
export class AuthDatabaseRouting { }
