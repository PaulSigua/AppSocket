import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatServiceService {

  nameInput: string = '';

  constructor(private socket: Socket) { }

  public sendMessage(message: string) {
    this.socket.emit('message', message);
  }

  public listMessage () {
    return this.socket.fromEvent('received').pipe(map((data) => data))
  }

  public saveName(name: string){
    this.nameInput = name;
  }
  
  public getNameInput(){
    return this.nameInput;
  }

}
