import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChatServiceService } from '../../services/chat-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit{

  public nombreInput: string = '';

  constructor (
    private router: Router,
    private chatSer: ChatServiceService) {}

  ngOnInit(): void {
    console.log(this.nombreInput)
  }

  // Metodo para registrarse
  goToChat(){
    this.chatSer.saveName(this.nombreInput);
    console.log(this.nombreInput)
    this.router.navigate([('/pages/home')])
  }
}
