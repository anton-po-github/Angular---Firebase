import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Layouts
import { FullLayoutComponent } from './layouts/full-layout.component';
import { SimpleLayoutComponent } from './layouts/simple-layout.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'signin',
    pathMatch: 'full',
  },
  {
    path: '',
    component: FullLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'item',
        loadChildren: './items/shared/item.module#ItemModule'
      },
      {
        path: 'auth',
        loadChildren: './authDatabase/authDatabase.module#AuthDatabaseModule'
      },
      {
        path: 'roles',
        loadChildren: './roles/roles.module#RolesModule'
      },
      {
        path: 'chat',
        loadChildren: './chat/chat.module#ChatModule'
      },
      {
        path: 'ng-rx',
        loadChildren: './ng-rx/ngrx.module#NgrxModule'
      },
    ]
  },
  {
    path: '',
    component: SimpleLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './auth/auth.module#AuthModule',
      },
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
