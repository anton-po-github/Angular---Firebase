import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './chat.component';
import { ChatDialogComponent } from './chat-dialog/chat-dialog.component';
import { CommonModule } from '@angular/common';


const chatRouting: Routes = [
  {
    path: '',
    children: [
      {
        path: 'chat',
        component: ChatComponent,
      },
      {
        path: 'chat-dialog',
        component: ChatDialogComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(chatRouting)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingChatModule {}
