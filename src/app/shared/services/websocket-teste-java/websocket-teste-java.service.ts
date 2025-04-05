import { BACKEND_URL } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
//import { webSocket } from "rxjs/webSocket";

@Injectable({
  providedIn: 'root'
})
export class WebsocketTesteJavaService {

  private websocket;
  constructor() { 
    //this.webSocketInit();
  }

  webSocketInit(){
    //this.websocket = webSocket(`ws://${BACKEND_URL}/javaTestProjectWebSocket`);
    this.websocket = new WebSocket(`ws://localhost:8080/javaTeste/javaTestProjectWebSocket`);
  }

  sendMessage(message: string){
    //this.websocket.next({message: message});
    this.websocket.send(message);
  }

  getWebSocket(){
    return this.websocket;
  }
  
}
