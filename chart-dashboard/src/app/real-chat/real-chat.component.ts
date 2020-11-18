import { Component, OnInit } from '@angular/core';
import { RealChatService } from '../services/real-chat.service';

@Component({
  selector: 'app-real-chat',
  templateUrl: './real-chat.component.html',
  styleUrls: ['./real-chat.component.scss']
})
export class RealChatComponent implements OnInit {
  message: string;
  messages: string[] = [];

  constructor(private realChatService: RealChatService) { }

  sendMessage() {
    this.realChatService.sendMessage(this.message);
    this.message = '';
  }

  ngOnInit() {
    this.realChatService
      .getMessages()
      .subscribe((message: string) => {
        this.messages.push(message);
      });
  }

}