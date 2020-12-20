import { BACKEND_URL } from './../../config/config';
import { Injectable } from '@angular/core';
import { webSocket } from "rxjs/webSocket";

@Injectable({
  providedIn: 'root'
})
export class WebsocketTesteJavaService {

  private websocket;
  constructor() { this.webSocketInit();}

  private webSocketInit(){
    this.websocket = webSocket(`ws://${BACKEND_URL}/javaTestProjectWebSocket`);
  }

  sendMessage(message: string){
    this.websocket.next({message: message});
  }

  getWebSocket(){
    return this.websocket;
  }
}
