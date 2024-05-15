import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChatServiceService } from '../../services/chat-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  // Variables
  public message: string = '';
  public listMessages: any [] = [];
  nameUser?: string;

  // Constructor
  constructor(
    private router: Router,
    private chatService: ChatServiceService) {
      this.nameUser = this.chatService.getNameInput();
    }

    // Metodo para enviar un mensaje
  public sendMessage() {
    this.chatService.sendMessage(this.message);
    this.listMessages.push(this.message);
    this.message = '';
  }

  // Metodo para listar los mensajes en el chat
  public listMessage () {
    this.chatService.listMessage().subscribe((data: any) => {
      console.log(data);
      this.listMessages.push(data.data);
    });
  }

  // Metodo que inicia al ejecutarse la app
  ngOnInit(): void {
    this.listMessage();
  }

  // Metodo para regresar
  goToHome(){
    this.router.navigate([('/pages/register')])
  }
}
