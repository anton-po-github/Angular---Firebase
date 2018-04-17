import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgRxViewComponent } from './ng-rx-view/ng-rx-view.component';


const ngrxRouting: Routes = [
  {
    path: '',
    children: [
      {
        path: 'view',
        component: NgRxViewComponent,
      },
      /*{
        path: 'chat-dialog',
        component: ChatDialogComponent
      }*/
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ngrxRouting)
  ],
  exports: [
    RouterModule
  ]
})
export class NgrxRoutingModule {}
