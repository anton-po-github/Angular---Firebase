import { Injectable } from '@angular/core';
import { ApiAiClient } from 'api-ai-javascript';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export const environmentChat = {
  production: false,
  dialogflow: {
    angularBot: 'b981b06cbf654b1cbac532445ee31203'
  }
};


// Message class for displaying messages in the component
export class Message {
  constructor(public content: string, public sentBy: string) {}
}
@Injectable()
export class ChatService {
  readonly token = environmentChat.dialogflow.angularBot;
  readonly client = new ApiAiClient({ accessToken: this.token });
  conversation = new BehaviorSubject<Message[]>([]);
  constructor() {}
  // Sends and receives messages via DialogFlow
  converse(msg: string) {
    const userMessage = new Message(msg, 'user');
    this.update(userMessage);
    return this.client.textRequest(msg)
      .then(res => {
        const speech = res.result.fulfillment.speech;
        const botMessage = new Message(speech, 'bot');
        this.update(botMessage);
      });
  }
  // Adds message to source
  update(msg: Message) {
    this.conversation.next([msg]);
  }
}
