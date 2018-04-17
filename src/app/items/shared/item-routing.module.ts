import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { ItemsListComponent } from '../items-list/items-list.component';
import { AnimalsListComponent } from '../animals-list/animals-list.component';

const itemRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'item-list',
        component: ItemsListComponent
      },
      {
        path: 'animal-list',
        component: AnimalsListComponent,
      },
      /*{
        path: 'register',
        component: RegisterComponent,
      }*/
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(itemRoutes),
  ],
  exports: [ RouterModule ]
})
export class ItemRoutingModule { }
