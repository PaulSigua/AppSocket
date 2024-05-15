import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatServiceService {

  nameInput: string = '';

  constructor(private socket: Socket) { }

  // Metodos para el funcionamiento del chat

  // Metodo para enviar un mensaje
  public sendMessage(message: string) {
    this.socket.emit('message', message);
  }

  // Metodo para listar un mensaje
  public listMessage () {
    return this.socket.fromEvent('received').pipe(map((data) => data))
  }

  // Metodo para guardar el nombre del cliente
  public saveName(name: string){
    this.nameInput = name;
  }
  
  public getNameInput(){
    return this.nameInput;
  }

}
