import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ChatService } from './chat.service';

import { ChatComponent } from './chat.component';
import { ChatDialogComponent } from './chat-dialog/chat-dialog.component';
import { RoutingChatModule } from './routing-chat.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RoutingChatModule
  ],
  declarations: [
    ChatComponent,
    ChatDialogComponent
  ],
  providers: [
    ChatService
  ]
})
export class ChatModule { }
