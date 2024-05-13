import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChatServiceService } from '../../services/chat-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  public message: string = '';
  public listMessages: any [] = [];
  nameUser?: string;

  constructor(
    private router: Router,
    private chatService: ChatServiceService) {
      this.nameUser = this.chatService.getNameInput();
    }

  public sendMessage() {
    this.chatService.sendMessage(this.message);
    this.listMessages.push(this.message);
    this.message = '';
  }

  public listMessage () {
    this.chatService.listMessage().subscribe((data: any) => {
      console.log(data);
      this.listMessages.push(data.data);
    });
  }

  ngOnInit(): void {
    this.listMessage();
  }

  goToHome(){
    this.router.navigate([('/pages/register')])
  }
}
